# China / WeChat Readiness Gate

Version: 1.5.0

This gate answers:

> **“这个机会现在能不能可靠地在中国 + 微信生态上线？”**

It never replaces Opportunity Score.

## Mini Program Readiness

Score:

- China data/API — 25
- WeChat capability — 25
- privacy/compliance — 20
- third-party dependency — 15
- implementation/ops — 15

Check current official WeChat requirements for category, qualifications, filing, privacy, payment and notification when relevant.

## Mini Game Readiness

Score:

- category/qualification/publication — 20
- ads/payment eligibility — 20
- package/performance/engine fit — 20
- content/IP/review risk — 20
- implementation/assets/live ops — 20

Check current official WeChat requirements before BUILD PROTOTYPE becomes BUILD/LAUNCH.

## Status

- 85–100: Ready
- 70–84: Mostly Ready
- 50–69: Validate Blocker
- <50: Blocked / Redesign

## Important principle

A high-value idea can have low Readiness.

Example:

```text
Opportunity: 90
Readiness: 55
Action: VALIDATE BLOCKER
```

Do not rewrite a 90-point market opportunity into 79 just because one data/API or platform condition is unresolved.

## Hard blockers

- prohibited/illegal activity
- no viable platform category
- impossible qualification path
- copied/protected IP that cannot be licensed/redesigned
- core experience fundamentally unsupported on WeChat
- monetization model with no compliant route and no fallback

Hard blockers prevent BUILD NOW / launch, but should be documented separately from demand/game-quality analysis.

For detailed current platform checks, read:

`references/wechat_official_constraints.md`


## Rights & Risk integration

Before BUILD NOW / BUILD PROTOTYPE, also run:

`references/rights_and_risk_gate.md`

Separate:

- market Opportunity;
- WeChat platform Readiness;
- content/data Rights;
- sensitive-domain regulatory risk.

A rights blocker should normally reduce Readiness or force VALIDATE BLOCKER / REDESIGN, not erase proven demand.

## China Demand integration

For Mini Program demand claims, use:

`references/china_demand_validator.md`

If China demand is only inferred from overseas popularity, Confidence should reflect that weakness.
