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
- [ ] Mini Program score totals 100
- [ ] Mini Game score totals 100
- [ ] Router outputs align with output schema
- [ ] Eval cases cover changed behavior
- [ ] Single-file fallback reflects material logic changes

## WorkBuddy expert team

- [ ] Run `npm run sync:workbuddy`
- [ ] Run `npm run validate:workbuddy`
- [ ] WorkBuddy embedded Skill version matches `VERSION`
- [ ] Root `references/` and WorkBuddy shared references are identical
- [ ] Lead agent / settings / plugin agentName are consistent
- [ ] 1 lead + 6 member Agents remain present
- [ ] Avatar specs remain 512×512 PNG
- [ ] Run `npm run build:workbuddy` and verify ZIP creation

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
