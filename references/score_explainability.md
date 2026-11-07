# Score Explainability

Version: 1.5.0

A numeric score without an auditable rationale is not sufficient.

## Goal

Every serious Opportunity / Readiness / Confidence score must explain:

- how each component was scored;
- what evidence supports it;
- what assumptions remain;
- why the score is not higher;
- which hard gate or cap was applied;
- what new evidence could materially change the result.

## Mini Program score breakdown

Use the existing v1.3 weights unchanged:

```yaml
score_breakdown:
  model: MINI_PROGRAM
  components:
    search_demand:
      score: 0-20
      evidence: []
      assumptions: []
      why_not_higher: "..."
    rigid_need:
      score: 0-20
      evidence: []
      assumptions: []
      why_not_higher: "..."
    niche_wedge:
      score: 0-15
      evidence: []
      assumptions: []
      why_not_higher: "..."
    value_monetization:
      score: 0-10
    wechat_native_fit:
      score: 0-10
    trend_heat:
      score: 0-8
    freshness:
      score: 0-5
    buildability:
      score: 0-10
    product_leverage:
      score: 0-2
  raw_score: 0-100
  gates_applied: []
  final_opportunity_score: 0-100
```

## Mini Game score breakdown

Use the existing v1.3 weights unchanged:

- Instant Hook — 20
- Replayability — 15
- WeChat Social/Viral — 15
- Monetization Fit — 15
- Trend Heat — 10
- Freshness — 10
- Buildability — 10
- Competition Gap — 5

Use the same evidence / assumption / why-not-higher pattern.

## Readiness explainability

For each readiness component include:

- current status;
- verified fact;
- unresolved blocker;
- effect on score.

Do not hide a severe blocker inside a single total.

## Confidence explainability

Confidence should explain the **quality and independence of evidence**, not the analyst's confidence in their own reasoning.

## Score discipline

- Do not add arbitrary "evidence bonus" or "AI adjustment" outside the published model.
- Hard gates may cap scores exactly as documented in `scoring_model.md`.
- If evidence is missing, lower the relevant component or confidence rather than inventing a precise fact.
- Prefer ranges when the evidence supports only a range.

## Compact output

For a Top 10 table, show only component highlights and the final score.

For Top 3 / recommended concepts, show the full breakdown.
