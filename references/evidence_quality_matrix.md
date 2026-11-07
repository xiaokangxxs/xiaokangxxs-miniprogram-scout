# Evidence Quality Matrix

Version: 1.5.0

Evidence type alone is not enough. Evaluate the **quality of each important evidence item**.

## Five dimensions

Each item is assessed on:

1. **Reliability** — how trustworthy is the source?
2. **Freshness** — how current is the observation?
3. **Independence** — is it independent corroboration or the same claim repeated?
4. **Relevance** — does it directly relate to the opportunity being scored?
5. **Directness** — does it prove the claim, or only act as a proxy?

Use qualitative labels:

- HIGH
- MEDIUM
- LOW
- UNKNOWN

Do not turn this into false mathematical precision.

## Example

```yaml
evidence_item:
  claim: "developers care about this problem"
  source: "GitHub repository stars"
  type: PROXY
  quality:
    reliability: HIGH
    freshness: HIGH
    independence: MEDIUM
    relevance: MEDIUM
    directness: LOW
  interpretation: "shows attention, not willingness to pay"
```

## Demand evidence vs popularity evidence

Keep them separate.

Popularity evidence:
- stars
- votes
- views
- likes
- rankings

Demand evidence:
- active search behavior
- repeated workaround behavior
- user interviews
- paid alternatives
- purchase intent
- conversion / waitlist / preorders
- repeated task frequency

High popularity does not automatically imply high demand.

## Source conflicts

When sources disagree:

1. do not average away the conflict;
2. show the disagreement;
3. prefer direct, fresh, independent evidence;
4. reduce Confidence if the conflict remains unresolved.

## Evidence summary

For serious candidates output:

```yaml
evidence_summary:
  strongest_evidence: []
  weakest_assumptions: []
  conflicts: []
  missing_evidence: []
  overall_quality: HIGH|MEDIUM|LOW
```
