---
name: xiaokangxxs-miniprogram-scout
display_name: 微信小程序与小游戏机会侦察
display_name_en: WeChat Opportunity Scout
description: 全球机会侦察或用户需求产品化，并通过可解释评分、证据质量、风险审计、反方审查、验证实验与趋势记忆筛选微信小程序/小游戏机会
description_zh: 从全球信号或用户需求出发，经过 JTBD、产品重构、可解释评分、证据/版权风险、反方审查、验证与趋势记忆，筛选值得做的微信机会
description_en: Scout or productize opportunities with explainable scoring, evidence quality, rights/risk checks, red-team review, validation experiments and persistent trend memory.
version: 1.5.0
author: "xiaokangxxs"
---


# xiaokangxxs-miniprogram-scout

Version: **1.5.0**

> WeChat Opportunity Intelligence · Trust, Validate & Remember

## Mission

Find **or derive** opportunities that are:

> **值得做 + 有明确需求/玩法入口 + 刚需/强乐趣 + 小众可切入 + 最新/有热度 + 开发杠杆高 + 适合微信生态**

Then make the answer:

> **可解释 + 可反驳 + 可验证 + 可记忆**

## Entry modes

- **GLOBAL_DISCOVERY** — scout public product/game signals.
- **USER_SEED** — start from the user's idea, requirements, GitHub repositories, competitor links, feedback or files.

## Core workflow

### GLOBAL_DISCOVERY

1. Capability / credential check
2. Load `data/rolling_pool.json`
3. Multi-source fresh discovery
4. Normalize / deduplicate / stable opportunity IDs
5. Merge Fresh + Rolling + Champions
6. Cluster into JTBD/mechanic themes
7. Product Form Router
8. Dual scoring
9. Explain scores / assess evidence
10. China demand / Rights & Risk / WeChat readiness
11. Contrarian review
12. Final boards + validation experiments
13. Persist public Rolling Pool when write access is available

### USER_SEED

1. Detect User Seed
2. Normalize provenance
3. Extract JTBD
4. Product Reframe: KEEP / REFRAME / SPLIT / REJECT
5. Generate 3–5 materially different concepts
6. Product Form Router
7. Score strongest concepts
8. Explain scores / assess evidence
9. China demand / Rights & Risk / WeChat readiness
10. Contrarian review
11. Recommend one concept
12. P0 + Validation OS + Kill Criteria

## Read these references

- `references/master_prompt_v3_6.md`
- `references/user_seed_mode.md`
- `references/jtbd_extraction.md`
- `references/product_reframe.md`
- `references/multi_concept_generation.md`
- `references/platform_router.md`
- `references/scoring_model.md`
- `references/score_explainability.md`
- `references/evidence_rules.md`
- `references/evidence_quality_matrix.md`
- `references/china_demand_validator.md`
- `references/rights_and_risk_gate.md`
- `references/china_feasibility_gate.md`
- `references/contrarian_reviewer.md`
- `references/validation_os.md`
- `references/rolling_candidate_pool.md`
- `references/wechat_official_constraints.md`
- `references/source_registry.md`
- `references/output_schema.md`
- `references/auth_and_secrets.md`

## Productization rules

USER_SEED must:

- extract target user, trigger, desired outcome, workaround and cost of inaction;
- challenge solution anchoring;
- return KEEP / REFRAME / SPLIT / REJECT;
- generate 3–5 materially different concepts;
- keep the original idea as a control when useful.

Do not create cosmetic concept variants.

## Product Form Router

Route to:

- WECHAT_MINIPROGRAM
- WECHAT_MINIGAME
- WEB_APP
- NATIVE_APP
- DESKTOP
- REJECT

Mini Program = task/service first.
Mini Game = play/fun/challenge first.

Gamification does not automatically make a utility a Mini Game.

## Scoring

v1.5 keeps the existing v1.3 scoring weights unchanged.

### Mini Program — 100
- Search Demand & Intent — 20
- Rigid Need / Pain — 20
- Niche Wedge — 15
- Value & Monetization — 10
- WeChat Native Fit — 10
- Trend Heat — 8
- Freshness — 5
- Buildability — 10
- Product Leverage — 2

### Mini Game — 100
- Instant Hook — 20
- Replayability — 15
- WeChat Social/Viral — 15
- Monetization Fit — 15
- Trend Heat — 10
- Freshness — 10
- Buildability — 10
- Competition Gap — 5

## Score Explainability

Every serious score must show:

- component breakdown;
- supporting evidence;
- assumptions;
- why-not-higher;
- gates/caps;
- final score.

No hidden bonus weight.

## Evidence Quality

Every material claim must remain:

- Observed
- Proxy
- Estimate
- Unknown

User-provided claims remain USER_CLAIM / USER_PROVIDED until independently verified where material.

Important evidence should also be assessed for:

- reliability
- freshness
- independence
- relevance
- directness

## China Demand Validator

Without a real Chinese keyword/data source:

- Search Frequency = HYPOTHESIS;
- generate concrete China validation queries;
- specify channels and success/failure signals;
- do not invent volume.

## Rights & Risk

Check rights for material external dependencies:

- license
- redistribution
- modification
- commercial use
- RAG/embedding
- attribution
- permission

Also classify health, finance, legal, minors, UGC, privacy, API and platform-review risks.

## Contrarian Reviewer

Red-team:

- GLOBAL_DISCOVERY Top 3;
- USER_SEED recommended concept;
- BUILD NOW / BUILD PROTOTYPE candidates.

Always identify a Bear Case and one Fatal Assumption.

Do not downscore merely because criticism exists; change scores only for a real scoring/evidence/gate error.

## Validation OS

Every serious recommendation must contain a structured experiment:

- hypothesis
- riskiest assumption
- method
- metric
- success threshold
- kill threshold
- result status
- decision
- learning

## Real Rolling Pool

Canonical public state:

`data/rolling_pool.json`

Only public market signals may be persisted.

Never store user data, private seed material, cookies, tokens or credentials.

If persistence fails, mark it DEGRADED and continue without inventing historical comparisons.

## Readiness

Opportunity is not Readiness.

Check current WeChat official requirements before BUILD/LAUNCH.

A high Opportunity can remain high while Rights, platform or data blockers lower Readiness.

## Default output — GLOBAL_DISCOVERY

1. Source status
2. Rolling Pool status
3. Top 10 Mini Programs
4. Top 10 Mini Games
5. Cross-category Top 5
6. Full score breakdown for Top 3
7. Contrarian review for Top 3
8. China demand / Rights / policy blockers
9. Structured validation experiments
10. Champion movement

## Default output — USER_SEED

1. Seed interpretation / provenance
2. JTBD
3. Reframe verdict
4. 3–5 concepts
5. Route
6. Scored shortlist with explainability
7. China demand + Rights & Risk
8. Contrarian review
9. Recommended concept
10. P0
11. Validation experiment
12. Kill Criteria
