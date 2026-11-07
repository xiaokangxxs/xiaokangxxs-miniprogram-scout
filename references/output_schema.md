# Canonical Data and Report Schema

Version: 1.5.0

## Input context

```yaml
input_context:
  mode: GLOBAL_DISCOVERY|USER_SEED
  seed_types: []
  seed_items:
    - value: "..."
      provenance: OBSERVED|USER_CLAIM|USER_PROVIDED|PROXY|UNKNOWN
      verified: true|false
```

## User Seed productization

```yaml
problem:
  target_user: "..."
  trigger: "..."
  struggling_moment: "..."
  desired_outcome: "..."
  current_workaround: "..."
  cost_of_inaction: "..."
  frequency: HIGH|MEDIUM|LOW|UNKNOWN
  urgency: HIGH|MEDIUM|LOW|UNKNOWN
  constraints: []

jtbd:
  statement: "..."
  confidence: HIGH|MEDIUM|LOW

product_reframe:
  original_idea: "..."
  verdict: KEEP|REFRAME|SPLIT|REJECT
  reframed_product: "..."
  reason: "..."

concepts:
  - concept_id: C1
    name: "..."
    target_user: "..."
    trigger: "..."
    core_value: "..."
    interaction: "..."
    monetization_hypothesis: "..."
    distribution_hypothesis: "..."
    product_form_candidate: "..."
    why_distinct: "..."
```

## Opportunity

```yaml
opportunity:
  opportunity_id: "stable-id"
  name: "..."
  product_form: WECHAT_MINIPROGRAM|WECHAT_MINIGAME|WEB_APP|NATIVE_APP|DESKTOP|REJECT
  first_seen_at: "ISO-8601"
  last_seen_at: "ISO-8601"
  freshness_status: fresh|rolling|champion|user_seed
```

## Score explainability

```yaml
score_breakdown:
  model: MINI_PROGRAM|MINI_GAME
  components:
    - key: "..."
      score: 0
      max_score: 0
      evidence: []
      assumptions: []
      why_not_higher: "..."
  raw_score: 0-100
  gates_applied: []
  final_opportunity_score: 0-100
```

## Evidence quality

```yaml
evidence_summary:
  strongest_evidence: []
  weakest_assumptions: []
  conflicts: []
  missing_evidence: []
  overall_quality: HIGH|MEDIUM|LOW

evidence_item:
  claim: "..."
  source: "..."
  type: OBSERVED|PROXY|ESTIMATE|UNKNOWN|USER_CLAIM|USER_PROVIDED
  quality:
    reliability: HIGH|MEDIUM|LOW|UNKNOWN
    freshness: HIGH|MEDIUM|LOW|UNKNOWN
    independence: HIGH|MEDIUM|LOW|UNKNOWN
    relevance: HIGH|MEDIUM|LOW|UNKNOWN
    directness: HIGH|MEDIUM|LOW|UNKNOWN
```

## China demand

```yaml
china_demand:
  search_demand:
    status: OBSERVED|HYPOTHESIS|UNKNOWN
    queries: []
    evidence: []
  content_demand:
    status: OBSERVED|PROXY|UNKNOWN
    evidence: []
  paid_service_demand:
    status: OBSERVED|PROXY|UNKNOWN
    evidence: []
  workaround_demand:
    status: OBSERVED|PROXY|UNKNOWN
    evidence: []
  community_demand:
    status: OBSERVED|PROXY|UNKNOWN
    evidence: []
  confidence: HIGH|MEDIUM|LOW|UNKNOWN
  next_validation_actions: []
```

## Rights & Risk

```yaml
rights_risk_gate:
  status: GREEN|YELLOW|RED|BLOCKED
  dependencies:
    - source: "..."
      license: "..."
      commercial_use: ALLOWED|RESTRICTED|UNKNOWN
      redistribution: ALLOWED|RESTRICTED|UNKNOWN
      modification: ALLOWED|RESTRICTED|UNKNOWN
      rag_allowed: ALLOWED|RESTRICTED|UNKNOWN
      embedding_allowed: ALLOWED|RESTRICTED|UNKNOWN
      attribution_required: true|false|unknown
      permission_required: true|false|unknown
  risk_items:
    - domain: HEALTH|FINANCE|LEGAL|MINORS|UGC|PRIVACY|PAYMENT|ADVERTISING|THIRD_PARTY_API|PLATFORM_REVIEW|CONTENT_RIGHTS
      level: LOW|MEDIUM|HIGH|BLOCKED
      reason: "..."
      mitigation: "..."
```

## Readiness / Confidence

```yaml
readiness:
  score: 0-100
  blockers: []
  component_notes: []

confidence:
  score: 0-100
  label: High|Medium|Low
  strongest_support: []
  weakest_assumptions: []
```

## Contrarian review

```yaml
contrarian_review:
  bull_case: "..."
  bear_case: []
  replacement_risk: HIGH|MEDIUM|LOW
  fatal_assumption: "..."
  fatal_assumption_test: "..."
  verdict_after_red_team: KEEP|DOWNRANK|VALIDATE_FIRST|REJECT
  score_change:
    opportunity_delta: 0
    readiness_delta: 0
    confidence_delta: 0
    reason: "..."
```

## Validation OS

```yaml
validation_experiment:
  experiment_id: "..."
  opportunity_id: "..."
  hypothesis: "..."
  riskiest_assumption: "..."
  method: "..."
  target_segment: "..."
  sample_target: "..."
  metric: "..."
  success_threshold: "..."
  kill_threshold: "..."
  result:
    status: NOT_RUN|RUNNING|PASS|FAIL|MIXED
    observed_value: null
    notes: ""
  decision: CONTINUE|PIVOT|STOP|UNKNOWN
  learning: ""
```

## Rolling Pool

Canonical persistent state:

`data/rolling_pool.json`

```yaml
rolling_state:
  persistence: ACTIVE|DEGRADED
  mini_program:
    fresh: []
    rolling: []
    champions: []
  mini_game:
    fresh: []
    rolling: []
    champions: []
  champion_movement:
    new: []
    retained: []
    heating: []
    cooling: []
    dropped: []
```

## Default report — GLOBAL_DISCOVERY

- Source Status
- Rolling Pool Status
- Top 10 Mini Program
- Top 10 Mini Game
- Cross-category Top 5
- Top 3 Score Breakdown
- Top 3 Contrarian Review
- China Demand Queue
- Rights / WeChat blockers
- Validation experiments
- Champion movement

## Default report — USER_SEED

- Seed interpretation/provenance
- JTBD
- Reframe
- 3–5 concepts
- Route
- Scored shortlist with breakdown
- China Demand
- Rights & Risk
- Contrarian Review
- Recommended concept
- P0
- Validation experiment
- Kill Criteria
