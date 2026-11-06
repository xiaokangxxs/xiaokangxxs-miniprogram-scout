---
name: xiaokangxxs-miniprogram-scout
description: Discover current products from Product Hunt, Hacker News, GitHub, Neeed, BetaList, Indie Hackers and optional Reddit/G2, then validate and convert the strongest overseas product ideas into small, searchable, monetizable and China-feasible WeChat Mini Program opportunities. Use for daily product scouting, overseas-product-to-China adaptation, mini-program idea discovery, or turning product leaderboards into requirements.
---

# xiaokangxxs-miniprogram-scout

Version: **1.1.0**

> Global Product → China-Feasible WeChat Mini Program Scout

## Mission

Find current products and problem signals from multiple global sources, merge duplicate signals, verify evidence, and convert only the strongest **and actually buildable in China/WeChat** opportunities into realistic WeChat Mini Program concepts.

This skill is evidence-first. Never fabricate rankings, ASO scores, revenue, downloads, user counts, pricing, reviews, API results, Chinese data availability, or WeChat platform capabilities.

## Required workflow

Always execute these phases in order:

1. **Capability and credential check**
2. **Current multi-source acquisition**
3. **Normalize + deduplicate**
4. **Evidence enrichment**
5. **China Feasibility Gate**
6. **Professional opportunity screening + scoring**
7. **Mini Program requirement conversion**
8. **Ranking + rejection reasons + evidence disclosure**

Read these supporting files before the relevant phase:

- `references/source_registry.md` — source endpoints, auth rules, source modes and fallbacks.
- `references/master_prompt_v3_2.md` — professional product/market evaluation rules (content version V3.2).
- `references/evidence_rules.md` — evidence grading and anti-hallucination rules.
- `references/china_feasibility_gate.md` — China data, WeChat capability, compliance, platform-dependency gate.
- `references/scoring_model.md` — 100-point base score plus effective-score caps.
- `references/output_schema.md` — normalized data model and final report structure.
- `references/auth_and_secrets.md` — how to request and protect API keys/tokens.

## Phase 1 — Capability and credential check

Detect whether the current Agent has one or more of:

- web search/browser;
- generic HTTP GET/POST;
- shell/curl/PowerShell;
- MCP/API connectors.

If the Agent has no network capability, do not pretend to fetch current data. Ask the user to provide exported JSON/CSV/HTML, URLs, or copied leaderboard data, then continue from Phase 3.

### Product Hunt credential/fallback behavior

Product Hunt's official API requires an access token. Prefer API mode when `PRODUCTHUNT_TOKEN` is safely available.

If the token is not available:

1. Explain that Product Hunt API v2 requires an access token and that a developer token can be created from Product Hunt's API dashboard.
2. Prefer the host Agent's secret store/environment variable `PRODUCTHUNT_TOKEN`; never require committing it to files.
3. **If the Agent has a normal public browser/search capability, it may continue with Product Hunt public-web fallback** for limited launch discovery, following `source_registry.md`.
4. Mark that source `ok_fallback`, `source_mode=public_web`, and disclose that API-only fields/completeness are unavailable.
5. If neither API auth nor public browsing is possible, mark `pending_auth` and continue other sources.

GitHub public data can be fetched without authentication at lower limits. When HTTP/API tools are available, use GitHub REST Search API directly. Ask for `GITHUB_TOKEN` only when volume/rate limits require it.

Optional Reddit/G2 access is requested only when enabled/needed and compliant access exists.

## Phase 2 — Current multi-source acquisition

Default discovery sources:

1. Product Hunt — API mode or disclosed public-web fallback.
2. Hacker News — Show HN + Ask HN; Top/Best supplemental.
3. Neeed Directory — newest listings.
4. GitHub — official REST Search API first; web fallback only when API tools are unavailable.
5. BetaList — RSS when reachable.
6. Indie Hackers — third-party RSS only when reachable; label unofficial.

Optional validation sources:

7. Reddit — pain/problem signal only when approved access/terms permit.
8. G2 — product/review/competitive validation where entitled.
9. Competitor/pricing/product pages — pricing and product evidence, not invented revenue evidence.

### Default time window

Use the requested period. Otherwise use latest **24 hours**. If sparse, widen to **72 hours** and disclose it.

### Default limits

Aim for 15–30 candidate records per primary source before deduplication, subject to source limits. Do not exhaust APIs unnecessarily.

### Source failure behavior

If unavailable, blocked, rate-limited, stale, or missing credentials:

- record `source_status`, `source_mode`, and reason;
- continue other sources;
- never synthesize missing leaderboard entries;
- never scrape around explicit access blocks when an official API/feed exists.

## Phase 3 — Normalize and deduplicate

Map every record to `references/output_schema.md`.

Deduplicate primarily by:

1. normalized product website domain;
2. normalized product name;
3. strong semantic match only as fallback.

When a product appears on multiple sources, aggregate `source_signals[]`; do not double count it.

Keep launch date, directory-listing date, repository date, and fetch date separate.

## Phase 4 — Evidence enrichment

For each candidate worth screening, collect enough evidence to answer:

- exact job/problem and target user;
- recurring/searchable pain vs novelty;
- existing paid alternatives and 2–3 competitor prices where public;
- traction beyond one launch metric;
- Chinese search intent and local wedge;
- Chinese data/API dependencies;
- whether the required WeChat capabilities are realistic;
- compliance/platform-dependency risks;
- monetization path.

When current web access exists, inspect official product/pricing pages for top candidates. Votes/stars are never revenue.

## Phase 5 — China Feasibility Gate

Read `references/china_feasibility_gate.md` and classify every serious candidate:

- China data/external dependency: GREEN/YELLOW/RED
- WeChat capability fit: GREEN/YELLOW/RED
- China compliance/regulation: GREEN/YELLOW/RED
- Third-party platform concentration: GREEN/YELLOW/RED

Do not bury these as generic risks.

Key behavior:

- unresolved material YELLOW normally caps effective score at 79;
- core data or WeChat RED caps at 59 or requires a different product form;
- prohibited/unobtainable compliance RED rejects the opportunity.

When a current WeChat limit materially affects feasibility, verify current official documentation or require a POC instead of relying on remembered limits.

## Phase 6 — Professional opportunity screening + scoring

Apply `references/master_prompt_v3_2.md` and `references/scoring_model.md`.

### Hard rejection / downgrade rules

Reject or heavily downgrade when:

- no clear Chinese search phrase/discoverable intent;
- broad social/network/marketplace/content platform with heavy network effects;
- dominant Chinese platform already owns the core job with no niche wedge;
- MVP requires large proprietary data, expensive hardware, regulated license or large operations;
- required Chinese data/API cannot be legally/reliably obtained;
- core value depends on unsupported Mini Program behavior;
- concept is merely “add AI”;
- no plausible payer/value path;
- evidence is too weak to distinguish real need from launch novelty.

### AI rule

Do not force AI. AI must materially improve quality, speed, cost, personalization, automation, or unstructured-input understanding. If removing AI barely changes value, AI is optional.

## Phase 7 — Convert to WeChat Mini Program requirements

For all candidates with **effective score >=70**, produce a concise conversion card.

For Top 3, produce a mini PRD containing:

- Chinese positioning and target user;
- one JTBD;
- trigger scenario/search intent;
- 3 names and one-line value proposition;
- P0 MVP only;
- core flow/screens;
- data/input/output dependencies and Chinese data source status;
- WeChat capability validations required before build;
- monetization;
- AI required/optional/unnecessary;
- compliance/platform risks;
- cheapest validation and kill criteria.

Keep the MVP narrow.

## Phase 8 — Final ranking and disclosure

Return:

1. source acquisition status summary including `mode`;
2. raw → deduplicated → scored counts;
3. China Feasibility YELLOW/RED counts;
4. ranked Top 10 by **effective score**;
5. Top 3 mini PRDs;
6. notable rejected/downranked products and reasons;
7. evidence gaps and manual/technical validations required next.

Every quantitative/business claim must be one of:

- **Observed** — directly fetched/officially published;
- **Proxy** — indirect signal such as votes/stars/reviews/comments/rank;
- **Estimate** — model judgment with assumptions;
- **Unknown** — no reliable evidence.

Never present Proxy/Estimate as Observed.

## Output language

Default to the user's language. For Chinese users, use Simplified Chinese while preserving original product names/source links.

## Important constraints

- Respect terms, rate limits, robots/access rules, API licensing and commercial-use restrictions.
- Do not expose/store full API keys/tokens.
- Do not store secrets in this skill directory.
- Do not call unavailable tools by invented names; adapt to the host Agent.
- Do not claim a source, data dependency, or WeChat capability was verified unless it actually was in the current run.
