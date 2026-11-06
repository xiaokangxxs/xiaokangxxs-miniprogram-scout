# China Feasibility Gate — Readiness Model

Version: 1.2.0

The China Feasibility Gate answers:

> **“这个机会现在能不能可靠地在中国 / 微信小程序环境落地？”**

It no longer changes the core Opportunity Score merely because something needs validation.

A great opportunity can have low Readiness.

---

## Gate A — China data / external dependency

- GREEN — user-provided, public/open, officially licensed, or stable authorized API/data source.
- YELLOW — access/cost/freshness/coverage/licensing still needs proof.
- RED — core value requires prohibited, unavailable, or inherently unstable data access.

Readiness contribution: 0–25.

## Gate B — WeChat capability / architecture

- GREEN — core flow is supported by documented Mini Program + server/cloud architecture.
- YELLOW — current limits/permissions/notification/file/3D/streaming behavior need docs/POC verification.
- RED — core JTBD fundamentally requires an unsupported Mini Program behavior.

Important:

- long-running monitoring/scheduling should normally run server-side;
- Mini Program is the interaction/config/result surface;
- do not assume unlimited proactive notifications or permanent background execution;
- verify current official WeChat documentation when the limit matters.

Readiness contribution: 0–25.

## Gate C — China compliance / privacy

- GREEN — ordinary utility with manageable privacy/security obligations.
- YELLOW — sensitive personal information, face/health/location/minors/industry rules require explicit review.
- RED — planned MVP requires prohibited behavior or unrealistic license/qualification.

Readiness contribution: 0–20.

## Gate D — Third-party dependency stability

- GREEN — product survives one upstream provider changing.
- YELLOW — one major external dependency needs a fallback/contract/API strategy.
- RED — the whole product depends on fragile/undocumented behavior.

Readiness contribution: 0–15.

## Gate E — MVP implementation readiness

Evaluate:

- model/API cost;
- backend complexity;
- operational burden;
- data pipeline;
- performance;
- manual review requirement.

Readiness contribution: 0–15.

---

## Hard blockers

RED does not automatically mean the **opportunity is bad**.

Instead:

- Opportunity remains the market/value judgment.
- Readiness becomes low.
- Recommendation becomes `VALIDATE BLOCKER`, `REDESIGN`, or `BLOCKED`.

Only a compliance/prohibited RED with no realistic alternative should result in direct rejection.

Example:

```text
PC 整机值不值
Opportunity: 90
Readiness: 55
Reason: reliable Chinese real-time component pricing data not yet verified
Action: validate authorized data source before build
```

This is preferable to artificially changing the opportunity to 79.
