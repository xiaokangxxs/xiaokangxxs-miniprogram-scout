# xiaokangxxs-miniprogram-scout — Universal Instruction

Version: **1.5.0**

## Goal

Discover or derive WeChat Mini Program / Mini Game opportunities and make the decision:

**auditable + challengeable + testable + persistent**.

Entry modes:

- GLOBAL_DISCOVERY
- USER_SEED

## USER_SEED

1. normalize provenance;
2. extract JTBD;
3. KEEP / REFRAME / SPLIT / REJECT;
4. generate 3–5 materially different concepts;
5. route each serious concept;
6. score the strongest;
7. run explainability, evidence quality, demand, rights/risk and red-team checks;
8. recommend one;
9. define P0 + validation + Kill Criteria.

## GLOBAL_DISCOVERY

1. load `data/rolling_pool.json`;
2. discover fresh sources;
3. merge stable opportunity IDs;
4. maintain Fresh <=72h, Rolling <=14d, Top20 Champions;
5. route/score;
6. explain scores;
7. red-team Top 3;
8. output movement;
9. persist updated public pool when possible.

## Scoring weights

Mini Program:
20 Search + 20 Need + 15 Niche + 10 Monetization + 10 WeChat Fit + 8 Heat + 5 Freshness + 10 Buildability + 2 Leverage.

Mini Game:
20 Hook + 15 Replay + 15 Social + 15 Monetization + 10 Heat + 10 Freshness + 10 Buildability + 5 Gap.

Weights remain unchanged.

## Score Explainability

For serious candidates expose:

- component breakdown;
- evidence;
- assumptions;
- why-not-higher;
- gates/caps;
- final score.

No hidden bonus.

## Evidence

Labels:

- Observed
- Proxy
- Estimate
- Unknown
- USER_CLAIM / USER_PROVIDED where relevant.

Assess important evidence on:

- reliability
- freshness
- independence
- relevance
- directness

Popularity ≠ demand.

## China Demand

If real China keyword/platform data is unavailable:

- Search Frequency = HYPOTHESIS;
- generate specific validation queries/channels;
- define what would raise/lower Confidence;
- never fabricate volume.

## Rights & Risk

Check:

- license
- redistribution
- modification
- commercial use
- RAG / embedding
- attribution
- permission

Also classify health / finance / legal / minors / UGC / privacy / third-party API / platform risks.

## Contrarian Review

For Top 3 / recommended / BUILD candidates:

- Bear Case
- generic AI replacement risk
- giant-platform replacement
- distribution failure
- retention failure
- monetization failure
- dependency/platform failure
- copyability
- one Fatal Assumption

Only change scores for a real scoring/evidence/gate correction.

## Validation OS

Every serious recommendation includes:

- hypothesis
- riskiest assumption
- method
- metric
- success threshold
- kill threshold
- result status
- decision
- learning

## Persistent Rolling Pool

Canonical state:

`data/rolling_pool.json`

Public market signals only. Never store user data or secrets.

If persistence fails, mark DEGRADED and do not fabricate historical comparisons.

## Output — GLOBAL_DISCOVERY

- source status
- rolling-pool status
- Top10 Mini Programs
- Top10 Mini Games
- Cross-category Top5
- Top3 score breakdowns
- Top3 red-team
- China demand / Rights / WeChat blockers
- validation experiments
- champion movement

## Output — USER_SEED

- provenance
- JTBD
- Reframe
- 3–5 concepts
- route
- scored shortlist + explainability
- China demand
- Rights & Risk
- red-team
- recommendation
- P0
- validation experiment
- Kill Criteria
