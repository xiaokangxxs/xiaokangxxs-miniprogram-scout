# Rights & Risk Gate

Version: 1.5.0

This gate evaluates whether the product can legally and responsibly use the content, data, model, API or source material it depends on.

It complements WeChat Readiness; it does not replace it.

## Rights dimensions

For every material external content/data dependency, check:

```yaml
rights:
  source: "..."
  license: "..."
  license_status: VERIFIED|UNKNOWN|CUSTOM
  redistribution: ALLOWED|RESTRICTED|UNKNOWN
  modification: ALLOWED|RESTRICTED|UNKNOWN
  commercial_use: ALLOWED|RESTRICTED|UNKNOWN
  attribution_required: true|false|unknown
  rag_allowed: ALLOWED|RESTRICTED|UNKNOWN
  embedding_allowed: ALLOWED|RESTRICTED|UNKNOWN
  derivative_work: ALLOWED|RESTRICTED|UNKNOWN
  permission_required: true|false|unknown
  evidence: []
```

GitHub-public does not mean commercially reusable.

## Risk dimensions

Separate:

- CONTENT_RIGHTS
- PRIVACY
- HEALTH
- FINANCE
- LEGAL
- MINORS
- UGC
- PAYMENT
- ADVERTISING
- THIRD_PARTY_API
- PLATFORM_REVIEW

For each:

```yaml
risk_item:
  domain: HEALTH
  level: LOW|MEDIUM|HIGH|BLOCKED
  reason: "..."
  mitigation: "..."
  verify_before_build: true|false
```

## Sensitive-domain behavior

### Health
Prefer education / source-backed information.
Do not silently turn research summaries into diagnosis or treatment claims.

### Finance
Distinguish education from personalized investment advice.
No guaranteed returns or unsupported financial claims.

### Legal
Separate general information from jurisdiction-specific legal advice.

### Minors
Raise privacy/content safeguards.

## Gate result

```yaml
rights_risk_gate:
  status: GREEN|YELLOW|RED|BLOCKED
  rights_blockers: []
  regulatory_blockers: []
  mitigation_plan: []
  permission_tasks: []
```

A strong market opportunity can remain high Opportunity while Rights & Risk lowers Readiness or forces VALIDATE BLOCKER.
