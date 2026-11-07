---
name: xiaokangxxs-miniprogram-scout
display_name: 微信小程序与小游戏机会侦察
display_name_en: WeChat Opportunity Scout
description: 发现全球产品与游戏机制信号，路由并评分中国可落地的微信小程序、小游戏及其他产品形态机会
description_zh: 从全球新品和游戏机制中筛选值得做、可验证、适合微信生态的小程序与小游戏机会
description_en: Discover global product and game signals and convert the strongest China-feasible opportunities into testable WeChat Mini Program and Mini Game concepts.
version: 1.3.3
author: "xiaokangxxs"
---


# xiaokangxxs-miniprogram-scout

Version: **1.3.3**

> WeChat Mini Program + Mini Game Opportunity Intelligence

## Mission

Find opportunities that are simultaneously:

> **值得做 + 有明确需求/玩法入口 + 刚需/强乐趣 + 小众可切入 + 最新/有热度 + 开发杠杆高 + 适合微信生态**

Do not optimize for only one dimension.

## Workflow

1. Capability / credential check
2. Multi-source fresh discovery
3. Load 14-day Rolling Pools
4. Normalize / deduplicate
5. Route product form
6. Cluster into JTBD themes or game-mechanic themes
7. Enrich evidence
8. Score with the correct model
9. Verify WeChat official constraints
10. Output separate Mini Program and Mini Game boards
11. Output Cross-category Top 5 Best Bets

Read:

- `references/platform_router.md`
- `references/master_prompt_v3_4.md`
- `references/scoring_model.md`
- `references/rolling_candidate_pool.md`
- `references/wechat_official_constraints.md`
- `references/source_registry.md`
- `references/evidence_rules.md`
- `references/output_schema.md`
- `references/auth_and_secrets.md`

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
- CrazyGames when reachable
- public game-jam/prototype signals

Product Hunt is not enough for Mini Game scouting.

## Product Form Router

Before scoring, route to:

- WECHAT_MINIPROGRAM
- WECHAT_MINIGAME
- WEB_APP
- NATIVE_APP
- DESKTOP
- REJECT

Never force every product into WeChat.

Mini Program = task/service first.
Mini Game = play/fun/challenge first.

## Mini Program score

Use the Mini Program model:

- Search Demand & Intent — 20
- Rigid Need / Pain — 20
- Niche Wedge — 15
- Value & Monetization — 10
- WeChat Native Fit — 10
- Trend Momentum / Heat — 8
- Freshness / Novelty — 5
- Buildability / Solo-Dev Leverage — 10
- Product Leverage — 2

Search/need/niche remain primary, but latest/hot/easy-to-build now matter.

Without a real keyword tool, search frequency is a hypothesis, not fact.

## Mini Game score

Use the Mini Game model:

- Instant Hook / Fun Clarity — 20
- Replayability / Retention — 15
- WeChat Social / Viral Loop — 15
- Monetization Fit — 15
- Trend Momentum / Heat — 10
- Freshness / Novel Mechanic — 10
- Buildability / Asset Leverage — 10
- Niche / Competition Gap — 5

Do not penalize a good game because people do not search for it like a utility.

For games, prioritize a fast prototype and actual play data over desk analysis.

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
- multiple products around one job/mechanic
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

Score platform readiness separately.

For Mini Programs:
- China data/API
- WeChat capability
- privacy/compliance
- upstream platform stability
- implementation/ops

For Mini Games:
- category/qualification/publication
- ads/payment eligibility
- package/performance/engine fit
- content/IP/review risk
- implementation/assets/live ops

## WeChat official constraints

Before BUILD NOW / BUILD PROTOTYPE, check current official rules.

At minimum verify when relevant:

- subject and service category
- required qualifications
- filing/record requirements
- privacy declarations/consent
- payment / virtual goods
- subscription/service notifications
- Mini Game category
- game publication/qualification requirements
- advertising eligibility
- virtual payment
- package/subpackage/performance
- social/share compliance
- IP/content review

Do not hard-code stale platform limits. Current official docs/backend win.

## Deeper analysis

Every serious candidate must answer:

### Distribution
How do the first 1,000 users arrive?

### Retention
What is the correct retention shape for this product?

### Monetization-platform fit
Does the business model actually fit WeChat rules and user behavior?

### Defensibility
What remains after competitors copy the feature/mechanic?

### Time-to-signal
What is the fastest experiment that could disprove the opportunity?

### IP risk
Extract the job/mechanic; never copy protected brand/assets/music/characters/content.

## Rolling pools

Maintain two 14-day pools:

- Mini Program Rolling Pool + Champion Board
- Mini Game Rolling Pool + Champion Board

New launches challenge incumbents; freshness does not reset the board.

## Default output

### 1. Source status

### 2. Top 10 WeChat Mini Program Opportunities

For each:
- opportunity
- supporting products
- keywords/search status
- rigid need
- niche
- freshness
- heat
- buildability
- Opportunity
- Readiness
- Confidence
- action
- official-policy blocker

### 3. Top 10 WeChat Mini Game Opportunities

For each:
- core mechanic
- inspiration sources
- 3–10 second hook
- replay loop
- social loop
- monetization
- freshness
- heat
- buildability
- Opportunity
- Readiness
- Confidence
- action
- official-policy blocker

### 4. Cross-category Top 5 Best Bets

Explain:
- why Mini Program or Mini Game
- why now
- why WeChat
- fastest validation
- main blocker

## Evidence

Every claim must be:

- Observed
- Proxy
- Estimate
- Unknown

Never fabricate search volume, ASO metrics, revenue, downloads, retention, platform permissions or qualification status.

