#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));

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
  "references/score_explainability.md",
  "references/evidence_quality_matrix.md",
  "references/contrarian_reviewer.md",
  "references/rights_and_risk_gate.md",
  "references/china_demand_validator.md",
  "references/validation_os.md",
  "references/master_prompt_v3_6.md",
  "data/rolling_pool.json",
  "data/rolling_pool.schema.json",
  "scripts/rolling-pool.mjs",
  "references/user_seed_mode.md",
  "references/jtbd_extraction.md",
  "references/product_reframe.md",
  "references/multi_concept_generation.md",
  "references/master_prompt_v3_5.md",
  "references/scoring_model.md",
  "references/platform_router.md",
  "references/source_registry.md",
  "references/evidence_rules.md",
  "references/wechat_official_constraints.md",
  "references/output_schema.md",
  "references/rolling_candidate_pool.md",
  "assets/report_template.md",
  "evals/test_cases.md",
  "test-prompts.json",
  "docs/LATEST_RUN.md",
  "assets/readme/hero.svg",
  "assets/readme/social-preview-v1.5.svg",
  "assets/readme/scoring.svg",
  "assets/readme/latest-run-2026-11-06.svg"
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

  const productizationRefs = [
    "references/user_seed_mode.md",
    "references/jtbd_extraction.md",
    "references/product_reframe.md",
    "references/multi_concept_generation.md"
  ];
  for (const rel of productizationRefs) {
    if (!skill.includes(rel)) errors.push(`SKILL.md does not reference v1.4 productization file: ${rel}`);
  }

  const v15Refs = [
    "references/score_explainability.md",
    "references/evidence_quality_matrix.md",
    "references/contrarian_reviewer.md",
    "references/rights_and_risk_gate.md",
    "references/china_demand_validator.md",
    "references/validation_os.md",
    "references/master_prompt_v3_6.md"
  ];
  for (const rel of v15Refs) {
    if (!skill.includes(rel)) errors.push(`SKILL.md does not reference v1.5 trust/validation file: ${rel}`);
  }

  const pool = JSON.parse(read("data/rolling_pool.json"));
  if (pool.privacy !== "PUBLIC_MARKET_SIGNALS_ONLY") errors.push("rolling pool privacy boundary missing.");
  if (pool.skill_version !== version) errors.push(`rolling pool skill_version ${pool.skill_version} != VERSION ${version}.`);

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
