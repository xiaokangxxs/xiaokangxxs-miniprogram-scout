#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const ignoredDirs = new Set([".git", "node_modules", ".cache", "tmp", "temp"]);
const textExts = new Set([
  ".md", ".txt", ".json", ".yml", ".yaml", ".cff", ".js", ".mjs", ".ts", ".sh", ".env", ""
]);

const fixedPatterns = [
  { name: "GitHub classic/fine-grained token", re: /\b(?:gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,})\b/g },
  { name: "OpenAI-style secret", re: /\bsk-[A-Za-z0-9_-]{20,}\b/g },
  { name: "AWS access key", re: /\bAKIA[0-9A-Z]{16}\b/g },
  { name: "Bearer credential", re: /Bearer\s+(?!<|\$\{|your_)[A-Za-z0-9._-]{20,}/gi },
  { name: "Generic long hex secret assignment", re: /(?:api[_-]?key|token|secret)\s*[:=]\s*["']?([a-f0-9]{32,})["']?/gi }
];

const envAssignment = /\b(PRODUCTHUNT_TOKEN|GITHUB_TOKEN)\s*=\s*([^\s#]*)/gi;

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (textExts.has(ext) || entry.name === ".env.example" || entry.name === ".gitignore") out.push(full);
    }
  }
  return out;
}

function cleanValue(value) {
  return value
    .trim()
    .replace(/^[`"'(]+|[`"'),.;]+$/g, "");
}

function looksLikePlaceholder(value) {
  if (!value) return true;
  const lower = value.toLowerCase();
  return (
    value === "..." ||
    lower.startsWith("your_") ||
    lower.startsWith("example") ||
    lower.startsWith("placeholder") ||
    /^<.*>$/.test(value) ||
    /^\$\{.*\}$/.test(value) ||
    value.length < 16
  );
}

const findings = [];
for (const file of walk(root)) {
  let content;
  try { content = fs.readFileSync(file, "utf8"); } catch { continue; }

  for (const { name, re } of fixedPatterns) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(content)) !== null) {
      const line = content.slice(0, m.index).split("\n").length;
      const sample = m[0].replace(/(.{6}).+(.{4})/, "$1…$2");
      findings.push({ file: path.relative(root, file), line, name, sample });
    }
  }

  envAssignment.lastIndex = 0;
  let envMatch;
  while ((envMatch = envAssignment.exec(content)) !== null) {
    const value = cleanValue(envMatch[2]);
    if (looksLikePlaceholder(value)) continue;
    const line = content.slice(0, envMatch.index).split("\n").length;
    findings.push({
      file: path.relative(root, file),
      line,
      name: `${envMatch[1]} assignment`,
      sample: `${envMatch[1]}=${value.slice(0, 4)}…${value.slice(-4)}`
    });
  }
}

if (findings.length) {
  console.error("❌ Potential secrets detected:\n");
  for (const f of findings) {
    console.error(`- ${f.file}:${f.line} [${f.name}] ${f.sample}`);
  }
  console.error("\nReview these matches. If any credential is real, revoke/rotate it before publishing.");
  process.exit(1);
}

console.log("✅ No common committed-secret patterns detected.");
