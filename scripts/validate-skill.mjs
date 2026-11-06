#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(new URL("..", import.meta.url).pathname);

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function exists(rel) {
  return fs.existsSync(path.join(root, rel));
}

const required = [
  "SKILL.md",
  "UNIVERSAL_SINGLE_FILE.md",
  "README.md",
  "README.en.md",
  "VERSION",
  "LICENSE",
  "SECURITY.md",
  "CONTRIBUTING.md",
  "ATTRIBUTION.md",
  "CITATION.cff",
  "package.json",
  ".env.example",
  "references/scoring_model.md",
  "references/platform_router.md",
  "references/source_registry.md",
  "references/evidence_rules.md",
  "references/wechat_official_constraints.md",
  "references/output_schema.md",
  "references/rolling_candidate_pool.md",
  "assets/report_template.md",
  "evals/test_cases.md",
  "test-prompts.json"
];

const errors = [];
const warnings = [];

for (const rel of required) {
  if (!exists(rel)) errors.push(`Missing required file: ${rel}`);
}

if (!errors.length) {
  const version = read("VERSION").trim();
  const skill = read("SKILL.md");
  const universal = read("UNIVERSAL_SINGLE_FILE.md");
  const readme = read("README.md");
  const readmeEn = read("README.en.md");
  const pkg = JSON.parse(read("package.json"));

  if (!skill.startsWith("---\n")) {
    errors.push("SKILL.md must start with YAML frontmatter.");
  }
  if (!/^name:\s*xiaokangxxs-miniprogram-scout\s*$/m.test(skill)) {
    errors.push("SKILL.md frontmatter name is missing or incorrect.");
  }
  if (!/^description:\s*.+$/m.test(skill)) {
    errors.push("SKILL.md frontmatter description is missing.");
  }

  const expectedVersionTokens = [
    ["SKILL.md", skill],
    ["UNIVERSAL_SINGLE_FILE.md", universal],
    ["README.md", readme],
    ["README.en.md", readmeEn]
  ];
  for (const [name, content] of expectedVersionTokens) {
    if (!content.includes(version)) {
      errors.push(`${name} does not mention VERSION ${version}.`);
    }
  }
  if (pkg.version !== version) {
    errors.push(`package.json version ${pkg.version} != VERSION ${version}.`);
  }

  const refPattern = /`((?:references|assets|docs|evals|scripts)\/[A-Za-z0-9_./-]+)`/g;
  let match;
  const checked = new Set();
  while ((match = refPattern.exec(skill)) !== null) {
    const rel = match[1].replace(/[.,;:)]+$/, "");
    if (checked.has(rel)) continue;
    checked.add(rel);
    if (!exists(rel)) errors.push(`SKILL.md references missing path: ${rel}`);
  }

  const scoring = read("references/scoring_model.md");
  if (!scoring.includes("WeChat Mini Program Opportunity Score")) {
    errors.push("Mini Program scoring model section not found.");
  }
  if (!scoring.includes("WeChat Mini Game Opportunity Score")) {
    errors.push("Mini Game scoring model section not found.");
  }

  const prompts = JSON.parse(read("test-prompts.json"));
  if (!Array.isArray(prompts) || prompts.length < 8) {
    warnings.push("test-prompts.json should contain at least 8 smoke tests.");
  }
}

if (errors.length) {
  console.error("❌ Skill validation failed:\n");
  for (const e of errors) console.error(`- ${e}`);
  process.exit(1);
}

console.log("✅ Skill structure validation passed.");
for (const w of warnings) console.warn(`⚠️ ${w}`);
