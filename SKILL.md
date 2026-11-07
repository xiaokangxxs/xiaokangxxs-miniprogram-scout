---
name: xiaokangxxs-miniprogram-scout
description: Discover current global product/game signals or productize user-provided ideas, repositories and requirements into evidence-based China-feasible WeChat Mini Program and Mini Game opportunities.
---

# xiaokangxxs-miniprogram-scout

Version: **1.4.0**

> WeChat Opportunity Intelligence · From Discovery to Productization

## Mission

Find **or derive** opportunities that are simultaneously:

> **值得做 + 有明确需求/玩法入口 + 刚需/强乐趣 + 小众可切入 + 最新/有热度 + 开发杠杆高 + 适合微信生态**

The Skill has two entry paths:

- **GLOBAL_DISCOVERY** — scout the market.
- **USER_SEED** — start from the user's idea, requirement, GitHub repositories, product links, feedback or files.

Do not optimize for only one dimension.

## Workflow

### A. Global discovery

1. Capability / credential check
2. Multi-source fresh discovery
3. Load Rolling Pools
4. Normalize / deduplicate
5. Cluster into JTBD themes or game-mechanic themes
6. Product Form Router
7. Score with the correct model
8. Verify WeChat constraints
9. Output separate boards + Best Bets

### B. User Seed productization

1. Detect User Seed input
2. Normalize seed provenance
3. Extract JTBD / problem model
4. Product Reframe: KEEP / REFRAME / SPLIT / REJECT
5. Generate 3–5 materially different concepts
6. Product Form Router for each concept
7. Score the strongest concepts
8. Readiness / Confidence / WeChat constraints
9. Recommend one concept
10. P0 + fastest validation + blockers + Kill Criteria

Read:

- `references/master_prompt_v3_5.md`
- `references/user_seed_mode.md`
- `references/jtbd_extraction.md`
- `references/product_reframe.md`
- `references/multi_concept_generation.md`
- `references/platform_router.md`
- `references/scoring_model.md`
- `references/rolling_candidate_pool.md`
- `references/wechat_official_constraints.md`
- `references/source_registry.md`
- `references/evidence_rules.md`
- `references/output_schema.md`
- `references/auth_and_secrets.md`

## User Seed Mode

When the user already supplies meaningful material, do not force a global scan before understanding it.

Supported seeds include:

- raw requirements / ideas;
- one or more GitHub repositories;
- competitor/product URLs;
- user feedback/interview notes;
- screenshots/files/exports;
- existing planned products.

User-provided claims are not automatically Observed.

## JTBD Extraction

Before scoring a user-provided solution, extract:

- target user;
- trigger;
- struggling moment;
- desired outcome;
- current workaround;
- cost of inaction;
- frequency / urgency;
- constraints.

A good JTBD describes the outcome, not the implementation.

## Product Reframe

Every serious User Seed evaluation should choose:

- KEEP
- REFRAME
- SPLIT
- REJECT

The Skill is explicitly allowed to say:

> "这个需求值得做，但你现在定义的产品形态不对。"

Do not reframe only to sound clever.

## Multi-Concept Generation

Generate 3–5 materially different concepts before committing to one solution.

Concepts must differ in meaningful dimensions such as:

- target segment;
- trigger;
- workflow;
- interaction;
- monetization;
- distribution;
- product form;
- AI/data leverage.

Do not generate five cosmetic variants.

Keep the original idea as a control when useful.

## Discovery

### Product / utility sources

- Product Hunt
- Hacker News / Show HN / Ask HN
- Neeed
- GitHub
- BetaList
- Indie Hackers
- optional Reddit / G2

### Game / mechanic sources

- itch.io New & Popular
- Poki trending/top
- Steam public trend/new-release signals
- CrazyGames
- public game-jam/prototype signals

Product Hunt is not enough for Mini Game scouting.

## Product Form Router

Route serious concepts to:

- WECHAT_MINIPROGRAM
- WECHAT_MINIGAME
- WEB_APP
- NATIVE_APP
- DESKTOP
- REJECT

Never force every opportunity into WeChat.

Mini Program = task/service first.
Mini Game = play/fun/challenge first.

## Mini Program score

Use the unchanged v1.3 Mini Program model:

- Search Demand & Intent — 20
- Rigid Need / Pain — 20
- Niche Wedge — 15
- Value & Monetization — 10
- WeChat Native Fit — 10
- Trend Momentum / Heat — 8
- Freshness / Novelty — 5
- Buildability / Solo-Dev Leverage — 10
- Product Leverage — 2

Without a real keyword tool, search frequency is a hypothesis, not fact.

## Mini Game score

Use the unchanged v1.3 Mini Game model:

- Instant Hook / Fun Clarity — 20
- Replayability / Retention Loop — 15
- WeChat Social / Viral Loop — 15
- Monetization Fit — 15
- Trend Momentum / Heat — 10
- Freshness / Novel Mechanic — 10
- Buildability / Asset Leverage — 10
- Niche / Competition Gap — 5

Do not penalize a good game because people do not search for it like a utility.

## Latest / Hot / Easy

Track separately:

### Freshness
- launch age
- mechanic novelty
- China/WeChat novelty

### Heat
- ranking velocity
- comments/reviews/player growth
- cross-source convergence
- repeated independent products around one job/mechanic
- sustained vs one-day spike

### Buildability
- prototype time
- asset burden
- backend burden
- API/data dependencies
- content/moderation/live-ops burden
- model cost
- engine/runtime fit

Easy development may break ties but cannot rescue weak demand or weak fun.

## Readiness

Score platform readiness separately from Opportunity.

For Mini Programs:
- China data/API
- WeChat capability
- privacy/compliance
- upstream dependency
- implementation/ops

For Mini Games:
- category/qualification/publication
- ads/payment eligibility
- package/performance/engine fit
- content/IP/review risk
- implementation/assets/live ops

## Deeper analysis

Every serious candidate/concept must answer:

### Distribution
How do the first 1,000 users arrive?

### Retention
What is the correct retention shape?

### Monetization-platform fit
Does the model fit WeChat rules and user behavior?

### Defensibility
What remains after competitors copy the feature/mechanic?

### Time-to-signal
What is the fastest experiment that could disprove it?

### IP risk
Extract the job/mechanic; never copy protected brand/assets/music/characters/content.

## Rolling pools

For GLOBAL_DISCOVERY, maintain separate rolling pools:

- Mini Program Rolling Pool + Champion Board
- Mini Game Rolling Pool + Champion Board

Freshness does not reset champions.

USER_SEED concepts may enter a rolling pool later only when the host intentionally persists them.

## Evidence

Every material claim must be:

- Observed
- Proxy
- Estimate
- Unknown

User-provided claims remain USER_CLAIM/USER_PROVIDED until independently verified where verification matters.

Never fabricate search volume, ASO metrics, revenue, downloads, retention, platform permissions or qualification status.

## Default output — GLOBAL_DISCOVERY

1. Source status
2. Top 10 WeChat Mini Program Opportunities
3. Top 10 WeChat Mini Game Opportunities
4. Cross-category Top 5 Best Bets
5. Policy blockers
6. Validation queue

## Default output — USER_SEED

1. Input interpretation / provenance
2. Problem / JTBD
3. Original idea verdict
4. 3–5 product concepts
5. Product-form route for each
6. Scored shortlist
7. Recommended concept
8. P0
9. Fastest validation
10. Main blockers + Kill Criteria
