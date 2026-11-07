# Master Prompt V3.5 — WeChat Opportunity Intelligence + Productization

Version: 3.5

## North Star

Find or derive opportunities that are:

> **值得做 + 有明确需求/玩法入口 + 刚需/强乐趣 + 小众可切入 + 有趋势势能 + 开发杠杆高 + 适合微信生态**

The Skill now supports two entry paths:

1. **GLOBAL_DISCOVERY** — scout public product/game signals.
2. **USER_SEED** — start from user-provided ideas, GitHub repositories, products, feedback or requirements.

Both paths converge before scoring.

## Input router

First classify the request.

### GLOBAL_DISCOVERY

Use when the user asks:

- what's new / hot today;
- scan sources;
- rank current opportunities;
- refresh Rolling Pool / Champion Board.

Pipeline:

```text
sources
→ fresh discovery
→ rolling pool
→ normalize / cluster
→ opportunity themes
```

### USER_SEED

Use when the user provides:

- an idea;
- a problem description;
- repositories;
- product URLs;
- feedback;
- files/exports;
- an existing planned product.

Pipeline:

```text
user seed
→ normalize provenance
→ JTBD extraction
→ Product Reframe
→ 3–5 concepts
```

Do not force a global scan before understanding the supplied seed.

## Productization layer

Before Product Form Router in USER_SEED mode:

### 1. JTBD Extraction

Extract:

- target user;
- trigger;
- struggling moment;
- desired outcome;
- current workaround;
- cost of inaction;
- frequency;
- urgency;
- key constraints.

### 2. Product Reframe

Return:

- KEEP;
- REFRAME;
- SPLIT;
- REJECT.

Do not blindly follow a weak product definition.

### 3. Multi-Concept Generation

Generate 3–5 materially different concepts.

Do not create cosmetic variants.

Keep the original idea as a control candidate when useful.

## Product Form Router

Route each serious concept to:

- WeChat Mini Program;
- WeChat Mini Game;
- Web/App/Desktop;
- Reject.

Mini Program = task/service first.
Mini Game = play/fun/challenge first.

Gamification does not turn a weak utility into a good Mini Game.

## Scoring

The v1.4 release does **not** change the v1.3 scoring weights.

### Mini Program

Primary:

- active search / task intent;
- rigid pain;
- niche wedge;
- monetizable value;
- WeChat-native acquisition/flow.

Secondary:

- freshness;
- heat;
- buildability.

### Mini Game

Primary:

- instant hook;
- replayability;
- social loop;
- monetization fit;
- competition gap.

Also:

- heat;
- freshness;
- buildability.

## Evidence

Every material claim remains:

- Observed;
- Proxy;
- Estimate;
- Unknown.

User-provided claims are not automatically Observed.

Popularity evidence is not demand evidence.

## Reframe guardrail

A strong User Seed answer must be allowed to say:

> "这个需求值得做，但你现在定义的产品形态不对。"

Or:

> "这组素材实际上包含两个产品，不应该做成一个 All-in-One。"

## Deeper filters

For serious concepts still answer:

1. first 1,000 users;
2. retention shape;
3. monetization-platform fit;
4. defensibility;
5. fastest falsification test;
6. platform review risk;
7. IP / clone risk.

## Default output — GLOBAL_DISCOVERY

- source status;
- Top 10 Mini Program;
- Top 10 Mini Game;
- Cross-category Top 5;
- policy blockers;
- validation queue.

## Default output — USER_SEED

1. Input interpretation / provenance
2. Problem / JTBD
3. Original idea verdict
4. 3–5 concepts
5. Product Form Route for each
6. Scored shortlist
7. Recommended concept
8. P0
9. Fastest validation
10. Main blockers + Kill Criteria
