---
name: xiaokangxxs-miniprogram-scout
description: Discover current products from Product Hunt, Hacker News, GitHub, Neeed, BetaList, Indie Hackers and optional Reddit/G2, then identify China-feasible WeChat Mini Program opportunities optimized for high-frequency search intent, rigid need, niche user segments and clear value. Use for daily product scouting, overseas-product-to-China adaptation, mini-program opportunity discovery, or turning product leaderboards into requirements.
---

# xiaokangxxs-miniprogram-scout

Version: **1.2.0**

> Global Product → Searchable Rigid-Niche WeChat Mini Program Scout

## Mission

Find the **best current opportunities**, not merely today's newest products.

Primary preference:

> **值得做 × 高频搜索 × 刚需 × 小众**

The Skill must not confuse:

- easy to build
with
- worth building.

## Required workflow

1. Capability + credential check
2. Current multi-source acquisition
3. Load/construct Rolling Candidate Pool
4. Normalize + deduplicate products
5. Cluster products into opportunity themes
6. Evidence enrichment
7. Opportunity Score
8. Readiness + Confidence
9. Mini Program conversion
10. Top 10 overall + Top 3 Mini PRD + rejected/downranked reasons

Read:

- `references/source_registry.md`
- `references/master_prompt_v3_3.md`
- `references/scoring_model.md`
- `references/rolling_candidate_pool.md`
- `references/evidence_rules.md`
- `references/china_feasibility_gate.md`
- `references/output_schema.md`
- `references/auth_and_secrets.md`

## Phase 1 — capability and credentials

Detect browser/search/API/shell/MCP capabilities.

If no network exists, never pretend to fetch current data. Accept user-provided JSON/CSV/HTML/URLs and continue from normalization.

Product Hunt:

- API mode preferred when `PRODUCTHUNT_TOKEN` is safely available.
- Public-web fallback is allowed for limited discovery when normal browsing exists.
- Fallback must be labeled `ok_fallback / public_web`.
- Never expose/store real tokens.

GitHub:

- official REST/search connector first;
- `GITHUB_TOKEN` only when volume/rate limits require it.

Reddit/G2 remain optional validation sources.

## Phase 2 — fresh discovery

Default sources:

1. Product Hunt
2. Hacker News — Show HN + Ask HN
3. Neeed Directory
4. GitHub official search/API
5. BetaList
6. Indie Hackers unofficial feed when reachable

Default fresh window: 24h; expand to 72h if sparse.

Freshness is a discovery signal only. It must not replace market value.

## Phase 3 — Rolling Candidate Pool

Use `references/rolling_candidate_pool.md`.

Default:

- Fresh Pool: 24–72h
- Rolling Pool: 14 days
- Champion Board: Top 20

New products challenge old champions. Do not reset the opportunity leaderboard every day.

If persistent state is unavailable, use prior conversation/report when available. Otherwise clearly state that this run is bootstrap mode and output reusable Champion Board data.

## Phase 4 — normalize + deduplicate

Deduplicate by normalized domain, product name and strong semantic identity.

Aggregate cross-source signals.

Do not let five nearly identical overseas products occupy five opportunity slots.

## Phase 5 — cluster into opportunity themes

Convert products into underlying opportunity themes.

Examples:

- multiple virtual staging/photo products → `房源照片 AI 美化`
- multiple AI visibility trackers → `AI 搜索品牌曝光检测`

Score opportunity themes, not launch pages.

## Phase 6 — evidence enrichment

For each serious candidate collect evidence for:

- exact user/job
- search moment
- Chinese core keyword
- market search frequency
- user trigger frequency
- cost of inaction
- existing workaround
- paid alternatives
- payer
- narrow target segment
- giant/platform competition
- China data/API dependency
- WeChat-specific advantage
- compliance/platform risk

Votes/stars/comments remain Proxy, never revenue.

## Phase 7 — Opportunity Score

Apply `master_prompt_v3_3.md` and `scoring_model.md`.

Opportunity Score is 100:

- Search Demand & Intent — 25
- Rigid Need / Pain — 25
- Niche Wedge — 20
- Value & Monetization — 15
- WeChat Native Fit — 10
- Product Leverage — 5

### Hard preference

Search + rigid need + niche = 70% of the score.

### Search honesty

If no actual keyword/ASO/WeChat/Baidu/search tool was queried:

- do not call `高频搜索` Observed;
- label it `Search Hypothesis`;
- Top 3 must include real keyword validation as a P0 task.

### Product-vs-feature check

Heavily downgrade a candidate that is:

- one-off low-value;
- easily absorbed by Office/WPS/WeChat/browser;
- unlikely to be searched repeatedly;
- has no independent payer;
- has no meaningful product expansion path.

## Phase 8 — Readiness + Confidence

Readiness answers “现在能不能做”:

- China data/API — 25
- WeChat capability — 25
- compliance/privacy — 20
- platform dependency — 15
- MVP implementation — 15

Do not use Readiness as the primary ranking score.

Confidence answers “我们有多确定”:

- problem evidence — 30
- search evidence — 30
- monetization evidence — 25
- independent corroboration — 15

Rank:

1. Opportunity
2. Confidence
3. Readiness

## Phase 9 — recommendation

- **🔥 BUILD NOW** — Opportunity ≥85, Readiness ≥70, Confidence ≥60, no unresolved critical search claim.
- **🧪 VALIDATE BLOCKER** — Opportunity ≥85 but readiness/search/data/platform blocker remains.
- **✅ VALIDATE** — Opportunity 75–84.
- **👀 WATCH** — Opportunity 65–74.
- **❌ REJECT** — Opportunity <65 or prohibited.

A 90-point opportunity with a data blocker remains a 90-point opportunity. It becomes `VALIDATE BLOCKER`, not an artificial 79.

## Phase 10 — Mini Program conversion

For Top 10 output:

- opportunity theme
- supporting products/sources
- Chinese core search terms
- search frequency status: Observed/Hypothesis/Unknown
- rigid-need reason
- narrow target segment
- cost of inaction
- paid validation
- Opportunity
- Readiness
- Confidence
- recommendation
- main blocker

For Top 3 add Mini PRD:

- target segment
- exact JTBD
- search moment
- keyword hypotheses
- real keyword validation task
- existing workaround
- P0 MVP
- why WeChat is better
- data/API dependencies
- monetization
- AI necessity
- readiness blockers
- cheapest validation
- kill criteria

## Final report

Always report:

1. source status
2. Fresh Pool count
3. Rolling Pool / bootstrap status
4. retained champions vs new entrants
5. Top 10 overall, not Top 10 newest
6. Top 3 Mini PRD
7. notable dropped/rejected candidates
8. evidence gaps
9. keyword validation tasks

## Evidence rules

Every business claim must be:

- Observed
- Proxy
- Estimate
- Unknown

Never fabricate:

- ASO Popularity
- Difficulty
- WeChat Index
- search volume
- revenue
- downloads
- retention
- Chinese data availability
- WeChat capability

## Output language

Default to the user's language. Chinese users receive Simplified Chinese while preserving original product names and source links.
