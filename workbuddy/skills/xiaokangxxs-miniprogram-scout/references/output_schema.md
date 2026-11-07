# Canonical Data and Report Schema

Version: 1.3.0

## Opportunity theme

```yaml
opportunity_id: "..."
opportunity_name: "..."
supporting_products: []
first_seen_at: "ISO-8601"
last_seen_at: "ISO-8601"
freshness_status: fresh|rolling|champion
product_form:
  primary: WECHAT_MINIPROGRAM|WECHAT_MINIGAME|WEB_APP|NATIVE_APP|DESKTOP|REJECT
  alternatives: []
  reason: "..."
```

## Common signals

```yaml
signals:
  freshness:
    launch_age_days: null
    china_market_novelty: HIGH|MEDIUM|LOW|UNKNOWN
  heat:
    momentum: HIGH|MEDIUM|LOW|UNKNOWN
    evidence: []
  buildability:
    prototype_effort: "..."
    asset_burden: LOW|MEDIUM|HIGH
    backend_burden: LOW|MEDIUM|HIGH
    ops_burden: LOW|MEDIUM|HIGH
```

## Mini Program assessment

```yaml
mini_program:
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
    wedge: "..."
  distribution_loop:
    primary: SEARCH|SHARE|QR|PRIVATE_DOMAIN|WORKFLOW|OTHER
    first_1000_users_hypothesis: "..."
```

## Mini Game assessment

```yaml
mini_game:
  opportunity_score: 0-100
  hook:
    mechanic: "..."
    seconds_to_understand: null
  retention:
    replay_loop: "..."
    progression_loop: "..."
  social_loop:
    ranking: true|false
    group_play: true|false
    shareable_moment: "..."
  monetization:
    model: IAA|IAP|HYBRID|UNKNOWN
    rewarded_video_fit: HIGH|MEDIUM|LOW
  prototype_test:
    target_session_count: null
    target_replay_rate: null
```

## Platform readiness

```yaml
readiness_score: 0-100
wechat_policy:
  category_status: VERIFIED|VERIFY_OFFICIAL|BLOCKED
  qualification_status: VERIFIED|VERIFY_OFFICIAL|BLOCKED
  privacy_status: GREEN|YELLOW|RED
  payment_status: GREEN|VERIFY_OFFICIAL|BLOCKED|NOT_NEEDED
  notification_status: GREEN|VERIFY_OFFICIAL|NOT_NEEDED
  ads_status: GREEN|VERIFY_OFFICIAL|BLOCKED|NOT_NEEDED
  performance_status: GREEN|VERIFY_POC|BLOCKED
  review_risk: LOW|MEDIUM|HIGH
  blockers: []
confidence_score: 0-100
confidence_label: High|Medium|Low
recommendation: "..."
```

## Default final report

Return separate boards:

### Top 10 Mini Program Opportunities

Fields:

- rank
- opportunity
- supporting products
- core keywords
- search status
- rigid need
- niche segment
- freshness
- heat
- buildability
- Opportunity
- Readiness
- Confidence
- action
- official-policy blocker

### Top 10 Mini Game Opportunities

Fields:

- rank
- opportunity/mechanic
- inspiration sources
- 3–10 second hook
- replay loop
- social loop
- monetization
- freshness
- heat
- buildability
- Opportunity
- Readiness
- Confidence
- action
- official-policy blocker

### Cross-category Top 5 Best Bets

Explain why each belongs to Mini Program or Mini Game and what should be validated first.
