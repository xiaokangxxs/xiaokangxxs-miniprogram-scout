# Canonical Data and Report Schema

Version: 1.1.0

## Canonical product record

```json
{
  "canonical_id": "domain-or-generated-id",
  "name": "Original Product Name",
  "tagline": "Original tagline",
  "description": "Normalized factual description",
  "website": "https://example.com",
  "normalized_domain": "example.com",
  "product_category": ["..."],
  "pricing_model": "free|freemium|paid|open_source|unknown",
  "published_at": null,
  "fetched_at": "ISO-8601",
  "source_signals": [
    {
      "source": "producthunt",
      "source_type": "official_api|official_feed|public_web_fallback|unofficial_feed|user_export",
      "source_mode": "api|feed|public_web|connector|export",
      "source_id": "...",
      "source_url": "...",
      "rank": null,
      "metrics": {
        "votes": null,
        "comments": null,
        "stars": null,
        "reviews": null
      },
      "source_status": "ok|ok_fallback|...",
      "completeness_notes": []
    }
  ],
  "evidence_confidence": "high|medium|low",
  "notes": []
}
```

## Source status values

Use one of:

- `ok`
- `ok_fallback`
- `no_results`
- `pending_auth`
- `missing_access`
- `rate_limited`
- `unavailable`
- `blocked_by_terms`
- `parse_error`

`ok_fallback` means a compliant but less complete mode was used, such as normal public-web discovery instead of an authenticated API. Never treat fallback completeness as API completeness.

## Opportunity assessment fields

Every scored candidate should include:

```yaml
raw_opportunity_score: 0-100
china_feasibility:
  data_dependency: GREEN|YELLOW|RED
  wechat_capability: GREEN|YELLOW|RED
  compliance: GREEN|YELLOW|RED
  platform_dependency: GREEN|YELLOW|RED
  blockers: []
  verification_needed: []
  effective_score_cap: 100|79|59|0
effective_opportunity_score: 0-100
final_grade: 优先做|值得验证|观察|淘汰
```

Rank by `effective_opportunity_score`.

## Opportunity card

For every candidate with effective score >= 70:

```markdown
### <Rank>. <建议小程序名> — <Effective Score>/100 — <优先做/值得验证>

- 原产品：<name>（<sources>）
- 原产品一句话：...
- 核心 JTBD：...
- 中国本地化场景：...
- 目标用户：...
- 触发场景：...
- 中文搜索词：...
- ASO真实数据：已验证 <actual data + source> / 未验证
- 竞品/替代方案：...
- 付费验证：Observed/Proxy/Unknown — ...
- 收入证据：Observed/Unknown — ...
- 小程序名称候选：A / B / C
- 一句话卖点：...
- P0 MVP：...
- 商业模式：...
- AI：核心 / 辅助 / 不需要；理由：...
- 中国数据依赖：GREEN/YELLOW/RED — ...
- 微信能力适配：GREEN/YELLOW/RED — ...
- 合规：GREEN/YELLOW/RED — ...
- 平台依赖：GREEN/YELLOW/RED — ...
- 原始机会分：...
- 有效机会分：...
- 最大风险：...
- 最低成本验证：...
- 证据置信度：High/Medium/Low
```

## Top 3 mini PRD

For the top three, add:

### 1. Positioning
- Product statement
- Target user
- JTBD

### 2. Core flow
`入口 → 输入/授权 → 核心处理 → 结果 → 保存/分享/付费`

### 3. P0 screens
Keep only screens necessary to complete the JTBD.

### 4. P0 functions
Each feature must map to the main JTBD. Move nice-to-have functions to P1/P2.

### 5. Data/AI dependencies
State external APIs, Chinese data sources, model/API needs, cost-sensitive calls, freshness requirements, licensing/access status, and fallback behavior.

### 6. WeChat capability validation
State any Mini Program capability that must be verified before build, including notification/permission/background/server-side tasks/payment/file/media/3D/streaming constraints where relevant.

### 7. Monetization
State payer, free boundary, paid trigger, pricing hypothesis, and evidence level.

### 8. Validation plan
List the smallest tests that can disprove the idea quickly.

### 9. Kill criteria
Explicit conditions under which development should stop or product form should change.

## Final source summary

Always start the report with a status table:

| Source | Status | Mode | Records fetched | Auth | Notes |
|---|---|---|---:|---|---|

Then report:

- Raw records fetched
- Deduplicated products
- Candidates scored
- effective score >=70 opportunities
- Top 3 selected
- China Feasibility Gate YELLOW/RED counts
