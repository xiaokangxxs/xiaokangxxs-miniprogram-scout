# xiaokangxxs-miniprogram-scout v1.3.1

## Theme

**Open-source usability & repository hardening**

This patch release keeps the v1.3 opportunity logic and focuses on making the repository easier to discover, install, audit, test and contribute to.

## Added

- Chinese/English repository landing experience.
- One-line Skills CLI installation guidance.
- `.env.example` with placeholders only.
- `package.json` metadata and local repository checks.
- `npm run validate`, `npm run scan:secrets`, `npm run check`.
- Portable `test-prompts.json` smoke tests.
- Installation/compatibility guide.
- Architecture document.
- FAQ.
- Maintainer release checklist.
- GitHub issue templates and PR template.
- `CITATION.cff` for source attribution.

## Security

- Expanded security/data-flow documentation.
- Secret scanner checks common GitHub/OpenAI/AWS/Bearer/env-assignment patterns.
- Local maintenance scripts make no network calls.

## Behavior

The Mini Program / Mini Game opportunity scoring logic remains v1.3.0-compatible; this release does not intentionally change ranking weights.
