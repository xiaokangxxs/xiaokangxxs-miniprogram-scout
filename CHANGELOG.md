# Changelog

## 1.1.0 — 2026-11-06

### Added

- `China Feasibility Gate` with four explicit checks:
  - Chinese data/API availability
  - WeChat Mini Program capability fit
  - China compliance/regulatory feasibility
  - third-party platform concentration risk
- Raw score vs effective score; unresolved material blockers can cap final ranking.
- Public-web fallback mode for Product Hunt when API token injection is unavailable.
- GitHub REST API-first acquisition rule.
- Source `mode`, `type`, fallback completeness notes, and `ok_fallback` status.
- Mini PRD requirements for Chinese data dependencies and WeChat capability validation.
- New eval cases for Product Hunt fallback, GitHub API-first, China data dependency, WeChat capability, compliance, and non-AI tools.

### Changed

- Workflow expanded from 7 to 8 phases.
- Ranking now uses `effective_opportunity_score` rather than raw score.
- Product Hunt token is preferred for API mode but no longer blocks a basic run when a compliant public-browser fallback is available.
- Strong overseas ideas can no longer receive `优先做` while a core China data/API dependency remains unresolved.

### Security

- Real tokens remain forbidden in Skill files, examples and reports.
- Packaging checklist now includes a secret scan.

### Documentation

- Expanded README for public GitHub release documentation.
- Added `docs/EXAMPLE_REPORT.md` as a sanitized output example.
- Added `CONTRIBUTING.md` for public contributions.
