# China Feasibility Gate — 中国落地门槛

Version: 1.1.0

Run this gate **before** assigning the final opportunity grade. It exists to stop attractive overseas products from scoring highly when their China implementation depends on unavailable data, unsupported WeChat behavior, regulated activities, or a fragile third-party platform.

This gate does not replace the 100-point opportunity score. It applies **caps/rejections** after evidence collection and before final ranking.

## Gate A — China data / external dependency availability

Classify the core dependency:

- `GREEN` — required data/input is user-provided, public/open, officially licensed, or available through a stable API/service with acceptable cost.
- `YELLOW` — data probably exists but access, price, coverage, licensing, freshness, or reliability is not yet verified.
- `RED` — the product's core value requires data/API access that is unavailable, prohibited, unstable, or cannot legally/reliably be obtained.

Examples:

- Receipt OCR from a user photo: usually GREEN if OCR/model access is available.
- Real-time e-commerce hardware price comparison across multiple Chinese marketplaces: YELLOW until official/authorized data access and freshness are verified.
- A product whose value depends on scraping a platform that explicitly blocks automated access: RED.

Rules:

- `RED` core dependency: reject, or cap final recommendation below 60 unless a compliant alternative architecture is proven.
- `YELLOW` core dependency: final score may be calculated, but cap recommendation at `值得验证` (max effective score 79) until validated.
- Never hide the dependency inside a generic `technical risk` note.

## Gate B — WeChat Mini Program capability fit

Classify whether the primary JTBD can actually be completed within Mini Program constraints:

- `GREEN` — core flow works with ordinary foreground interactions and documented Mini Program/cloud capabilities.
- `YELLOW` — requires a capability whose current quota, permission, message template, background behavior, file limit, payment eligibility, or device compatibility must be verified.
- `RED` — core value fundamentally requires unsupported long-running background execution, unavailable OS-level permissions, prohibited behavior, or a product form that should clearly be App/Desktop/Web instead.

Important checks when relevant:

- subscription/service notification behavior and user authorization;
- background/timed work should normally happen server-side/cloud-side rather than assuming the Mini Program stays alive;
- camera/album/file upload limits;
- login/phone-number authorization expectations;
- payment eligibility and merchant setup;
- WebGL/3D/model size/performance;
- WebSocket/streaming/long task behavior;
- privacy declarations and user-data deletion obligations;
- whether web-view or external links are allowed/appropriate for the flow.

Rules:

- `RED`: reject Mini Program conversion or recommend another product form.
- `YELLOW`: cap at `值得验证` until the critical capability is verified with current official documentation or a technical POC.

Do not hard-code old WeChat platform limits. Verify current official documentation at runtime when a limit materially affects feasibility.

## Gate C — China compliance / regulated activity

Classify:

- `GREEN` — ordinary productivity/consumer utility with manageable privacy/security obligations.
- `YELLOW` — handles higher-risk personal information, user-generated content, financial/medical/legal/education data, location, biometrics/face images, minors, or industry-specific requirements that need explicit compliance review.
- `RED` — MVP requires a license/regulated activity the proposed operator cannot reasonably obtain, or the planned behavior is prohibited.

Rules:

- `RED`: reject or redesign the JTBD.
- `YELLOW`: disclose the exact compliance unknown and cap `优先做` unless the issue is already resolved.

## Gate D — Third-party platform concentration risk

Classify:

- `GREEN` — product value can survive one upstream provider changing.
- `YELLOW` — a major feature depends on one external platform/API but alternatives or cached/user-provided data can mitigate it.
- `RED` — the entire business exists only while one third-party platform permits an undocumented/fragile behavior.

This gate is about survivability, not generic competition.

## Gate output

For every scored candidate, record:

```yaml
china_feasibility:
  data_dependency: GREEN|YELLOW|RED
  wechat_capability: GREEN|YELLOW|RED
  compliance: GREEN|YELLOW|RED
  platform_dependency: GREEN|YELLOW|RED
  blockers:
    - "..."
  verification_needed:
    - "..."
  effective_score_cap: 100|79|59|0
```

### Effective score cap

Use the strictest applicable rule:

- all GREEN: `100`
- any material YELLOW unresolved: usually `79`
- core-data RED but potentially redesignable: `59`
- WeChat capability RED for the primary JTBD: `59` or recommend another form instead of a Mini Program
- compliance/prohibited RED with no realistic path: `0` / reject

The displayed score may include both:

- `raw_opportunity_score` — the 100-point product score;
- `effective_opportunity_score` — `min(raw_opportunity_score, effective_score_cap)`.

Rank by **effective** score, never raw score.
