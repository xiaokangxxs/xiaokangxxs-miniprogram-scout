# JTBD Extraction

Version: 1.4.0

Before scoring a user-provided idea, extract the **job/problem** behind the proposed solution.

The Skill must not confuse:

> "用户想做什么产品"

with:

> "目标用户真正要完成什么任务 / 摆脱什么困境 / 获得什么结果"

## Problem model

For serious User Seed inputs, derive:

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
  willingness_to_pay_signal: OBSERVED|PROXY|HYPOTHESIS|UNKNOWN
  constraints: []
```

## JTBD statement

Prefer this shape:

> 当【某类用户】在【触发场景】时，他/她希望【完成某个任务/得到某个结果】，从而【避免代价/获得价值】。

A JTBD should describe the outcome, not the implementation.

Bad:

> 用户需要一个指南集合小程序。

Better:

> 当用户第一次遇到陌生的生活问题时，希望快速获得可信、可执行、带来源的下一步建议，从而降低信息搜索和错误决策成本。

## Solution-anchor check

Flag when the seed is already a solution format:

- "做一个合集"
- "做一个 AI 聊天框"
- "做一个排行榜"
- "做一个小游戏"
- "把某某产品复制到微信"

Then ask internally:

1. What problem makes this format useful?
2. What does the user do today without it?
3. What result matters more than the proposed feature?
4. Would another product form solve the job better?

Do not automatically preserve the user's original format.

## Evidence discipline

Separate:

- directly observed behavior;
- user claims;
- proxy popularity;
- model hypothesis.

Do not derive demand only from GitHub stars, Product Hunt votes or article views.

## Missing information

Do not block the whole analysis on minor unknowns.

Make the smallest explicit assumptions necessary, mark them, and continue.

Only treat a missing fact as a blocker when it can materially change:

- product form;
- legality/compliance;
- target user;
- core monetization;
- core feasibility.
