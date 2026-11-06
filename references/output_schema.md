# Canonical Data and Report Schema

Version: 1.2.0

## Canonical product record

Keep normalized product identity, source signals, timestamps, pricing model, domain and evidence provenance as in previous versions.

## Opportunity theme

Multiple similar products may support one opportunity theme.

```yaml
opportunity_id: "property-photo-ai"
opportunity_name: "房源照片 AI 美化"
supporting_products:
  - name: "..."
    source: "..."
first_seen_at: "ISO-8601"
last_seen_at: "ISO-8601"
freshness_status: "fresh|rolling|champion"
```

## Core assessment

```yaml
opportunity_score: 0-100
search:
  core_keywords: []
  market_search_frequency: HIGH|MEDIUM|LOW|UNKNOWN
  user_trigger_frequency: HIGH|MEDIUM|LOW
  search_intent_strength: HIGH|MEDIUM|LOW
  keyword_data_status: OBSERVED|HYPOTHESIS|UNKNOWN
rigid_need:
  severity: HIGH|MEDIUM|LOW
  cost_of_inaction: "..."
niche:
  target_segment: "..."
  giant_competition: HIGH|MEDIUM|LOW
  wedge: "..."
readiness_score: 0-100
china_feasibility:
  data_dependency: GREEN|YELLOW|RED
  wechat_capability: GREEN|YELLOW|RED
  compliance: GREEN|YELLOW|RED
  platform_dependency: GREEN|YELLOW|RED
  implementation: GREEN|YELLOW|RED
  blockers: []
  verification_needed: []
confidence_score: 0-100
confidence_label: High|Medium|Low
recommendation: BUILD_NOW|VALIDATE_BLOCKER|VALIDATE|WATCH|REJECT
```

## Ranking rule

Rank by:

1. Opportunity Score
2. Confidence
3. Readiness

Do not rank by readiness alone.

## Opportunity card

For Top 10 output:

- 排名
- 机会主题
- 支撑海外产品/来源
- 核心中文搜索词
- 搜索频率：Observed / Hypothesis / Unknown
- 刚需理由
- 小众人群
- 不解决的代价
- 付费验证
- Opportunity Score
- Readiness Score
- Confidence
- Recommendation
- 最大阻塞项

## Top 3 Mini PRD

Must include:

1. Target segment
2. Exact JTBD
3. Search moment
4. Core/long-tail Chinese keyword hypotheses
5. Real keyword validation task when no search tool was used
6. Cost of inaction
7. Existing workaround
8. P0 MVP
9. WeChat-specific advantage
10. Data/API dependencies
11. Monetization
12. AI necessity
13. Readiness blockers
14. Cheapest validation
15. Kill criteria

## Rolling pool output

Every run should report:

- Fresh Pool entrants
- retained champions
- dropped candidates
- 14-day Rolling Pool count
- Top 10 overall (not merely today's Top 10)

When state persistence is unavailable, include enough structured data for the previous report to be reused on the next run.
