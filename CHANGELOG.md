# Changelog

## 1.2.0 — 2026-11-06

### Changed — ranking philosophy

The Skill now optimizes primarily for:

**值得做 × 高频搜索 × 刚需 × 小众**

V1.1 could unintentionally favor ideas that were easy and safe to implement. V1.2 separates market opportunity from execution readiness.

### Added

- Three independent outputs:
  - Opportunity Score
  - Readiness Score
  - Confidence
- Search Demand & Intent becomes the largest score component (25/100).
- Rigid Need/Pain becomes 25/100.
- Niche Wedge becomes 20/100.
- Search hard gates.
- Product-vs-Feature test.
- 14-day Rolling Candidate Pool.
- Champion Board.
- Opportunity-theme clustering across similar overseas products.
- Master Prompt V3.3.
- New recommendation state: `VALIDATE BLOCKER`.

### Removed / corrected

- Removed the rule that ordinary unresolved YELLOW automatically caps good opportunities at 79.
- Ranking is no longer primarily based on Effective Score.
- “Easy to build” no longer boosts an otherwise weak opportunity into the Top 3.

### Search evidence discipline

Without a real ASO / WeChat / keyword tool:

- never claim `高频搜索` as Observed;
- use a Search Hypothesis;
- Top 3 must include real keyword validation as a P0 task.

## 1.1.0 — 2026-11-06

- Product Hunt API + public-web fallback.
- GitHub REST API first.
- China Feasibility Gate.
- Evidence grading and security improvements.
