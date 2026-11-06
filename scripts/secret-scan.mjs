#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const ignoredDirs = new Set([".git", "node_modules", ".cache", "tmp", "temp"]);
const textExts = new Set([
  ".md", ".txt", ".json", ".yml", ".yaml", ".cff", ".js", ".mjs", ".ts", ".sh", ".env", ""
]);

const patterns = [
  { name: "GitHub classic/fine-grained token", re: /\b(?:gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,})\b/g },
  { name: "OpenAI-style secret", re: /\bsk-[A-Za-z0-9_-]{20,}\b/g },
  { name: "AWS access key", re: /\bAKIA[0-9A-Z]{16}\b/g },
  { name: "Bearer credential", re: /Bearer\s+(?!<|\$\{|your_)[A-Za-z0-9._-]{20,}/gi },
  { name: "Product Hunt env assignment", re: /PRODUCTHUNT_TOKEN\s*=\s*(?!your_|<|\$\{|example|placeholder)([^\s#]+)/gi },
  { name: "GitHub env assignment", re: /GITHUB_TOKEN\s*=\s*(?!your_|<|\$\{|example|placeholder)([^\s#]+)/gi },
  { name: "Generic long hex secret assignment", re: /(?:api[_-]?key|token|secret)\s*[:=]\s*["']?([a-f0-9]{32,})["']?/gi }
];

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

const findings = [];
for (const file of walk(root)) {
  let content;
  try { content = fs.readFileSync(file, "utf8"); } catch { continue; }

  for (const { name, re } of patterns) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(content)) !== null) {
      const line = content.slice(0, m.index).split("\n").length;
      const sample = m[0].replace(/(.{6}).+(.{4})/, "$1…$2");
      findings.push({ file: path.relative(root, file), line, name, sample });
    }
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
