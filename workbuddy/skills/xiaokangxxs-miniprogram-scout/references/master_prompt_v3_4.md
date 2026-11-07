# Master Prompt V3.4 — WeChat Opportunity Intelligence

Version: 3.4

## North Star

Find opportunities that are:

> **值得做 + 有明确需求入口 + 刚需/高价值 + 小众可切入 + 有趋势势能 + 开发杠杆高 + 适合微信生态**

Do not optimize for only one of these dimensions.

## First decision: product form

Before scoring, decide whether the opportunity belongs to:

- WeChat Mini Program
- WeChat Mini Game
- Web/App/Desktop
- Reject

Mini Programs and Mini Games use different score models.

## Mini Program philosophy

Primary:

- active search / task intent
- rigid pain
- niche wedge
- monetizable value
- WeChat-native acquisition/flow

Secondary but meaningful:

- freshness / novelty
- heat / momentum
- buildability / solo-dev leverage

A hot new product with weak pain is not automatically good.
A proven niche with no current momentum is not automatically bad.

## Mini Game philosophy

Do NOT force utility-search logic onto games.

Primary:

- instant hook / fun clarity
- replayability / retention loop
- social/WeChat viral loop
- monetization fit
- competition gap / theme portability

Also consider:

- current trend momentum
- freshness/novel mechanics
- buildability / asset burden

The key question is:

> Can a player understand the fun in 3–10 seconds, want another round, and tolerate a compliant monetization loop?

## Latest

Freshness matters because it reveals emerging behaviors before the market is saturated.

But separate:

- launch freshness
- mechanic freshness
- China-market freshness

A 3-year-old mechanic can still be a new China/WeChat opportunity if the local distribution format is underexploited.

## Hot

Heat is not a single snapshot.

Prefer:

- cross-source convergence;
- ranking velocity;
- comments/reviews/player activity growth;
- multiple independent products emerging around the same job/mechanic;
- sustained attention beyond one launch day.

Votes/stars/player counts are Proxy signals, not revenue.

## Easy to develop

Buildability is valuable because solo/small teams need fast validation.

Measure:

- POC time;
- asset volume;
- backend complexity;
- API/data dependencies;
- moderation/ops burden;
- 2D vs heavy 3D;
- content production burden;
- model inference cost;
- live-service burden.

But easy development never overrides weak demand/fun.

## Deeper filters

### 1. Distribution-channel fit

Ask how the first 1,000 users arrive:

Mini Program:
- WeChat search
- group/chat sharing
- QR/offline
- public account/private-domain
- work/merchant workflow

Mini Game:
- social sharing
- group competition
- rankings
- short-video/gameplay clips outside WeChat
- ad acquisition
- cross-promotion

“No plausible distribution loop” is a major weakness.

### 2. Monetization-platform fit

Mini Program:
- subscription/usage/payment/B2B
- avoid ad-only unless traffic is plausible

Mini Game:
- IAA / rewarded video
- IAP only if qualifications/payment rules work
- hybrid when retention supports it

Do not import a foreign business model without checking WeChat policy and Chinese payer behavior.

### 3. Retention shape

Not every product needs daily retention.

Classify:
- utility episodic
- workflow recurring
- seasonal/event-driven
- game session-retention
- game progression-retention

Judge retention against product type, not one universal DAU standard.

### 4. Defensibility

Look for:
- workflow embedding
- accumulated user data
- specialized templates/model tuning
- distribution ownership
- community/social graph
- content pipeline
- merchant/industry relationships

Do not require a moat for MVP, but flag ideas that are trivially copyable with no acquisition edge.

### 5. Time-to-signal

Prefer opportunities where the core hypothesis can be disproved quickly.

Example:
- landing page + keyword ads + manual service
- 20 target-user interviews
- 3-day game prototype + retention test
- fake-door pricing
- POC for critical API/platform capability

### 6. Platform review risk

Use `wechat_official_constraints.md`.

A technically buildable product that cannot pass category/qualification/privacy/payment/game review is not “ready”.

### 7. IP / clone risk

Extract the underlying JTBD/mechanic. Do not copy protected assets, brand identity, characters, music, text or proprietary content.

## Ranking

For Mini Programs:
rank by Mini Program Opportunity Score, then Confidence, Trend Momentum, Readiness.

For Mini Games:
rank by Mini Game Opportunity Score, then Confidence, Trend Momentum, Readiness.

Do not merge Mini Program and Mini Game into one undifferentiated Top 10 unless the user explicitly asks. Default output:

- Top 10 Mini Program opportunities
- Top 10 Mini Game opportunities
- Cross-category Top 5 “best bets”
