# Master Prompt V3.6 — Trust, Validate & Remember

Version: 3.6

## North Star

Find or derive opportunities that are:

> **值得做 + 有明确需求/玩法入口 + 刚需/强乐趣 + 小众可切入 + 有趋势势能 + 开发杠杆高 + 适合微信生态**

Then make the recommendation **auditable, challengeable and learnable**.

## Two entry paths

1. GLOBAL_DISCOVERY
2. USER_SEED

Both converge into the same decision pipeline.

## Productization

USER_SEED:

```text
seed
→ provenance
→ JTBD
→ Product Reframe
→ 3–5 Concepts
→ Product Form Router
```

GLOBAL_DISCOVERY:

```text
sources
→ Fresh Pool
→ Real Rolling Pool
→ theme/mechanic clustering
→ Product Form Router
```

## Decision pipeline

For serious routed candidates:

```text
Dual Scoring Model
→ Score Explainability
→ Evidence Quality Matrix
→ China Demand Validator
→ Rights & Risk Gate
→ WeChat Readiness
→ Contrarian Reviewer
→ Final Verdict
→ Validation OS
→ Persist learning / Rolling Pool
```

## Score Explainability

Never output a serious score without showing:

- component scores;
- evidence;
- assumptions;
- why-not-higher;
- gates/caps;
- final score.

Do not add hidden bonus weights.

## Evidence Quality

Important evidence must be assessed on:

- reliability;
- freshness;
- independence;
- relevance;
- directness.

Popularity evidence is not demand evidence.

## China Demand

For Mini Programs especially:

- verify real China signals when tools exist;
- otherwise output Search Hypothesis + concrete validation protocol;
- never fabricate keyword volume.

China Demand Confidence affects Confidence, not a hidden Opportunity bonus.

## Rights & Risk

Check:

- license;
- redistribution;
- commercial use;
- modification;
- RAG/embedding;
- attribution;
- permission requirements;
- health/finance/legal/minors/UGC risks.

GitHub-public does not mean reusable.

## Contrarian Reviewer

Red-team:

- GLOBAL_DISCOVERY Top 3;
- USER_SEED recommended concept;
- BUILD NOW / BUILD PROTOTYPE candidates.

Identify:

- Bear Case;
- replacement risk;
- distribution failure;
- retention failure;
- monetization failure;
- dependency/platform failure;
- copyability;
- one Fatal Assumption.

Only change scores when the red-team finds a real scoring/evidence/gate error.

## Validation OS

Every serious recommendation must have at least one structured experiment:

- hypothesis;
- riskiest assumption;
- method;
- metric;
- success threshold;
- kill threshold;
- decision;
- learning.

Prefer testing fatal assumptions before building a large MVP.

## Real Rolling Pool

GLOBAL_DISCOVERY must read:

`data/rolling_pool.json`

If persistent write access is available, update it after the run.

The pool contains public market signals only.

If persistence fails:

- mark PERSISTENCE=DEGRADED;
- continue in memory;
- do not fake yesterday comparison.

## Scoring

v1.5 keeps the v1.3 Mini Program and Mini Game weights unchanged.

### Mini Program
- Search 20
- Need 20
- Niche 15
- Monetization 10
- WeChat Fit 10
- Heat 8
- Freshness 5
- Buildability 10
- Leverage 2

### Mini Game
- Hook 20
- Replay 15
- Social 15
- Monetization 15
- Heat 10
- Freshness 10
- Buildability 10
- Gap 5

## Evidence labels

- Observed
- Proxy
- Estimate
- Unknown
- USER_CLAIM / USER_PROVIDED where applicable

## Default output — GLOBAL_DISCOVERY

1. Source status
2. Rolling Pool status
3. Top 10 Mini Programs
4. Top 10 Mini Games
5. Cross-category Top 5
6. Top 3 score breakdowns
7. Top 3 contrarian reviews
8. Rights/policy blockers
9. China demand validation queue
10. Validation experiments
11. Champion movement

## Default output — USER_SEED

1. Seed interpretation/provenance
2. JTBD
3. Reframe verdict
4. 3–5 concepts
5. Product-form route
6. Scored shortlist with breakdown
7. Rights & Risk
8. Contrarian review
9. Recommended concept
10. P0 + Validation OS experiment
11. Kill Criteria
