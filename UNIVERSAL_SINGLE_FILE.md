# xiaokangxxs-miniprogram-scout — Universal Single-File Instruction

Version: **1.2.0**

## North Star

Find WeChat Mini Program opportunities optimized for:

> **值得做 × 高频搜索 × 刚需 × 小众**

Do not rank “easy to build” above “worth building”.

## Sources

Discover from:

- Product Hunt — API preferred, public-web fallback disclosed
- Hacker News — Show HN / Ask HN
- Neeed
- GitHub official search/API
- BetaList
- Indie Hackers feed when available
- optional Reddit/G2 for validation

Do not fabricate missing source data.

## Rolling discovery

Do not return only today's products.

Maintain conceptually:

- Fresh Pool: 24–72h
- Rolling Pool: 14 days
- Champion Board: Top 20

New candidates challenge old champions.

Cluster similar products into one opportunity theme.

## Opportunity Score — 100

Primary ranking:

- Search Demand & Intent — 25
- Rigid Need / Pain — 25
- Niche Wedge — 20
- Value & Monetization — 15
- WeChat Native Fit — 10
- Product Leverage — 5

Search + rigid need + niche = 70%.

### Search rules

Separate:

- market search frequency
- user trigger frequency
- search intent strength

If no real keyword/ASO/WeChat/Baidu/search tool is queried:

- never claim high-frequency search as Observed;
- use Search Hypothesis;
- Top 3 must include a real keyword validation task.

Hard downgrades:

- no natural Chinese core query → normally max 69
- mainly recommendation/feed discovery → normally max 74
- weak pain / nice-to-have → normally max 69
- mass-market giant battlefield → normally max 69
- tiny one-off feature with no payer/repeat value → normally max 64

## Product-vs-feature test

Ask:

1. Would users search for this independently?
2. Is there meaningful cost if unsolved?
3. Is there a clear payer?
4. Is it more than a small feature of Office/WPS/WeChat/browser?
5. Is there repeated value or a defensible workflow?

If mostly “no”, downgrade.

## Rigid need

High-value needs usually:

- make money
- save money
- avoid loss
- save substantial time
- reduce repeated errors
- replace expensive/manual work

Novelty alone is not enough.

## Niche

Prefer specific groups/scenarios:

- profession
- lifecycle event
- repeated workflow
- specialist tool

Avoid generic “for everyone” products, social networks, marketplaces and giant-platform clones.

## Readiness Score — 100

Separate from Opportunity:

- China data/API — 25
- WeChat capability — 25
- compliance/privacy — 20
- platform dependency — 15
- MVP implementation — 15

Low readiness means “validate blocker”, not “bad opportunity”.

## Confidence — 100

- problem evidence — 30
- search evidence — 30
- monetization evidence — 25
- independent corroboration — 15

Labels:

- High: 80+
- Medium: 60–79
- Low: <60

## Ranking

Rank by:

1. Opportunity
2. Confidence
3. Readiness

Never rank by readiness alone.

## Recommendation

- 🔥 BUILD NOW — Opportunity ≥85, Readiness ≥70, Confidence ≥60 and critical search evidence sufficiently validated
- 🧪 VALIDATE BLOCKER — Opportunity ≥85 but blocker/search/data uncertainty remains
- ✅ VALIDATE — Opportunity 75–84
- 👀 WATCH — Opportunity 65–74
- ❌ REJECT — Opportunity <65 or prohibited

## Evidence

Every claim is:

- Observed
- Proxy
- Estimate
- Unknown

Never invent search volume, Popularity, Difficulty, revenue, downloads or retention.

## Output

Always return:

1. source status
2. Fresh Pool
3. Rolling Pool/bootstrap status
4. retained champions/new entrants
5. Top 10 overall
6. Top 3 Mini PRD
7. rejected/dropped candidates
8. keyword/data/WeChat validation tasks

Top 10 fields:

- opportunity theme
- supporting products
- Chinese search terms
- search status
- rigid-need reason
- niche segment
- cost of inaction
- paid validation
- Opportunity / Readiness / Confidence
- recommendation
- blocker

Top 3 Mini PRD additionally includes:

- exact JTBD
- search moment
- keyword hypotheses
- real keyword validation task
- current workaround
- P0 MVP
- WeChat-specific advantage
- data/API dependencies
- monetization
- AI necessity
- cheapest validation
- kill criteria

## AI

Do not force AI.

AI is core only when removal materially worsens the experience.

## Credentials

Prefer secret store/environment variables:

- `PRODUCTHUNT_TOKEN`
- `GITHUB_TOKEN`

Never write real secrets to repository files or reports.
