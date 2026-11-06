# Changelog

## 1.3.1 — 2026-11-06

### Open-source usability

- Rebuilt the repository landing experience inspired by strong public Agent Skill repositories.
- Added bilingual README (Chinese / English).
- Added one-line Skills CLI installation guidance plus git-clone/single-file fallbacks.
- Added a clearer capability table, architecture explanation, documentation index and Star History section.

### Tooling

- Added `package.json` metadata.
- Added dependency-free local checks:
  - `npm run validate`
  - `npm run scan:secrets`
  - `npm run check`
- Added portable `test-prompts.json` smoke tests.
- Added `.env.example` with placeholders only.

### Contributor experience

- Added installation/compatibility guide.
- Added architecture doc.
- Added FAQ.
- Added release checklist.
- Added Bug / Feature / Data Source GitHub Issue templates.
- Added Pull Request template.
- Added `CITATION.cff`.

### Security

- Expanded `SECURITY.md` into a data-flow and credential-boundary statement.
- Documented expected network-source families and confirmed repository maintenance scripts make no network calls.

### Behavior

- Core v1.3 opportunity scoring/routing logic is unchanged.

## 1.3.0 — 2026-11-06

### Major

- Added WeChat Mini Game opportunity scouting.
- Added Product Form Router: Mini Program / Mini Game / Web / App / Desktop / Reject.
- Added separate scoring models for Mini Programs and Mini Games.
- Added explicit Freshness, Trend Momentum and Buildability factors.
- Added WeChat official-policy runtime verification registry.
- Added game discovery sources and game-mechanic clustering.

### Deeper analysis

Added:

- distribution-channel fit / first 1,000 user hypothesis;
- retention-shape analysis;
- monetization-platform fit;
- IP/clone risk;
- time-to-signal;
- platform review risk.

### Mini Program model

Search + rigid need + niche remain dominant, while latest/hot/buildability now contribute meaningful secondary weight.

### Mini Game model

Search is no longer misused as the primary signal. Games are scored on:

- instant hook;
- replayability;
- social/viral loop;
- monetization;
- heat;
- freshness;
- buildability;
- competition gap.

### WeChat rules

Top opportunities must check current official category/qualification/privacy/payment/notification/ads/performance constraints before BUILD NOW / BUILD PROTOTYPE.

## 1.2.0 — 2026-11-06

- Search-first / rigid-need / niche model.
- Opportunity vs Readiness vs Confidence.
- 14-day rolling pool and champion board.
- Master Prompt V3.3.

## 1.1.0 — 2026-11-06

- Product Hunt API + public-web fallback.
- GitHub REST/API first.
- China Feasibility Gate.
