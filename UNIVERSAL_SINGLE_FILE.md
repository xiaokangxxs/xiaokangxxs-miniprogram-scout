# xiaokangxxs-miniprogram-scout — Universal Instruction

Version: **1.4.0**

## Goal

Discover **or derive**:

- WeChat Mini Program opportunities
- WeChat Mini Game opportunities

Two entry modes:

- GLOBAL_DISCOVERY
- USER_SEED

Do not use one score model for Mini Programs and Mini Games.

## USER_SEED productization

When the user supplies an idea, requirement, repositories, links, feedback or files:

1. normalize the seed and provenance;
2. extract the underlying JTBD/problem;
3. compare the original solution against the JTBD;
4. return KEEP / REFRAME / SPLIT / REJECT;
5. generate 3–5 materially different concepts;
6. route each serious concept;
7. score the strongest 2–3;
8. recommend one concept with P0, validation and Kill Criteria.

Do not force a global scan before understanding a useful seed.

Do not create cosmetic concept variants.

## JTBD

Extract:

- target user
- trigger
- struggling moment
- desired outcome
- current workaround
- cost of inaction
- frequency / urgency
- constraints

Describe the outcome, not the implementation.

## Product Reframe

The Skill may explicitly say:

> This problem is worth solving, but the current product definition is weak.

Verdict:

- KEEP
- REFRAME
- SPLIT
- REJECT

## Product Form Router

Route to:

- WECHAT_MINIPROGRAM
- WECHAT_MINIGAME
- WEB_APP
- NATIVE_APP
- DESKTOP
- REJECT

Mini Program = task/service.
Mini Game = play/fun/challenge.

## Mini Program model

Score 100:

- Search demand 20
- Rigid need 20
- Niche wedge 15
- Monetization 10
- WeChat native fit 10
- Trend heat 8
- Freshness 5
- Buildability 10
- Product leverage 2

## Mini Game model

Score 100:

- Instant hook 20
- Replayability 15
- WeChat social/viral loop 15
- Monetization fit 15
- Trend heat 10
- Freshness/novel mechanic 10
- Buildability 10
- Competition gap 5

## Evidence

Use:

- Observed
- Proxy
- Estimate
- Unknown

User claims are not automatically Observed.

Never fabricate search volume, ASO, revenue, downloads, retention, player counts, platform eligibility.

## Trend

Heat is momentum, not one snapshot.

Prefer:
- rank velocity
- player/review/comment growth
- cross-source convergence
- multiple similar products/mechanics
- sustained attention

## Buildability

Track:
- POC time
- asset burden
- backend/data/API burden
- moderation/live-ops burden
- model cost
- engine fit

Easy does not override weak demand/fun.

## Discovery sources

Products:
Product Hunt, HN, Neeed, GitHub, BetaList, Indie Hackers, optional Reddit/G2.

Games:
itch.io, Poki, Steam, CrazyGames, game jams/prototypes.

## WeChat policy gate

Before BUILD NOW / BUILD PROTOTYPE verify current official requirements:

Mini Program:
- subject/category/qualifications
- filing
- privacy
- payment/virtual goods
- subscription/service messages
- declared category vs actual service

Mini Game:
- game category
- qualification/publication requirements
- ads eligibility
- virtual payment
- content/IP
- package/performance/engine
- social/share compliance

Do not hard-code stale limits.

## Readiness

Separate from Opportunity.

## Rolling pools

GLOBAL_DISCOVERY maintains separate rolling pools:

- Mini Program Champion Board
- Mini Game Champion Board

Freshness does not reset champions.

## Deeper questions

For each serious candidate ask:

1. First 1,000 users from where?
2. Correct retention shape?
3. Monetization-platform fit?
4. What is defensible?
5. Fastest falsification test?
6. IP/clone risk?
7. Current WeChat review blocker?

## Default output — GLOBAL_DISCOVERY

1. Source status
2. Top 10 Mini Programs
3. Top 10 Mini Games
4. Cross-category Top 5 Best Bets
5. Policy blockers
6. Validation queue

## Default output — USER_SEED

1. Seed interpretation
2. JTBD
3. Original idea verdict
4. 3–5 concepts
5. Route for each
6. Scored shortlist
7. Recommended concept
8. P0
9. Fastest validation
10. Blockers / Kill Criteria
