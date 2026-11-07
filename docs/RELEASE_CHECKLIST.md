# Release Checklist

Use this before publishing a new version.

## Version consistency

- [ ] Update `VERSION`
- [ ] Update `package.json`
- [ ] Update version in `README.md`
- [ ] Update version in `README.en.md`
- [ ] Update version in `SKILL.md`
- [ ] Update version in `UNIVERSAL_SINGLE_FILE.md`
- [ ] Add `CHANGELOG.md` entry
- [ ] Add release notes for material releases

## Skill consistency

- [ ] Main workflow still matches referenced files
- [ ] User Seed Mode is documented and tested
- [ ] JTBD Extraction is documented and tested
- [ ] Product Reframe KEEP/REFRAME/SPLIT/REJECT is documented and tested
- [ ] Multi-concept generation produces materially different concepts
- [ ] Mini Program score totals 100
- [ ] Mini Game score totals 100
- [ ] Router outputs align with output schema
- [ ] Eval cases cover changed behavior
- [ ] Single-file fallback reflects material logic changes
- [ ] README hero/social-preview source reflects the current productization flow

## WorkBuddy expert team

- [ ] Run `npm run sync:workbuddy`
- [ ] Run `npm run validate:workbuddy`
- [ ] WorkBuddy embedded Skill version matches `VERSION`
- [ ] Root `references/` and WorkBuddy shared references are identical
- [ ] Lead agent / settings / plugin agentName are consistent
- [ ] 1 lead + 6 member Agents remain present
- [ ] Avatar specs remain 512×512 PNG
- [ ] Run `npm run build:workbuddy` and verify ZIP creation

## v1.5 trust / validation / memory

- [ ] Score Explainability is present for serious candidates
- [ ] Evidence Quality does not confuse popularity with demand
- [ ] China Demand Validator never fabricates search volume
- [ ] Rights & Risk checks content/data licenses and RAG rights
- [ ] Contrarian Reviewer identifies a Fatal Assumption
- [ ] Validation OS includes success + kill thresholds
- [ ] `npm run validate:pool` passes
- [ ] Rolling Pool contains public market signals only
- [ ] WorkBuddy has 1 lead + 7 members including Contrarian Reviewer
- [ ] WorkBuddy shared data/references match root Skill

## Source & policy checks

- [ ] Verify Product Hunt API/fallback guidance
- [ ] Verify GitHub API guidance
- [ ] Review unofficial/optional sources
- [ ] Re-check WeChat official policy links and material requirements
- [ ] Remove stale fixed platform limits

## Security

```bash
npm run scan:secrets
```

- [ ] No real API token/key
- [ ] No session cookie / auth header
- [ ] `.env` not tracked
- [ ] Examples contain placeholders only
- [ ] No user-specific private data in reports/examples

## Repository validation

```bash
npm run check
```

## Documentation

- [ ] Chinese README still matches current behavior
- [ ] English README still matches current behavior
- [ ] Example report is explicitly marked as illustrative/sanitized
- [ ] Installation command works for intended Skill CLI
- [ ] Links to renamed/moved files are updated

## Attribution

- [ ] LICENSE remains present
- [ ] ATTRIBUTION.md remains present
- [ ] CITATION.cff version is current
