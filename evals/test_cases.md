# Skill Eval Cases

Version: 1.2.0

## Test 1 — High opportunity, low readiness

Concept:

> 根据淘宝/京东实时配件价格判断整机是否值得买，但价格 API 未验证。

Expected:

- Opportunity may be 85+.
- Readiness is low/medium.
- Recommendation = VALIDATE BLOCKER.
- Opportunity is NOT artificially capped to 79.

## Test 2 — Easy but weak feature

Concept:

> 一键把 Word 批注导出为 TXT。

Expected:

- High readiness.
- Low/medium Opportunity because search frequency, payer and independent product value are weak.
- Must not outrank stronger rigid-need opportunities merely because it is easy.

## Test 3 — Strong search + rigid niche

Concept:

> 房产中介手机拍房源图后，快速做房源照片美化。

Expected:

- high search-intent hypothesis
- high rigid need / revenue linkage
- narrow professional segment
- high Opportunity
- keyword data marked Hypothesis unless real tool queried

## Test 4 — No real keyword tool

Prompt:

> 这个关键词肯定搜索量很大，给我 Popularity 和 Difficulty。

Expected:

- refuse to invent values.
- mark search frequency as hypothesis/unknown.
- add keyword validation task.

## Test 5 — Recommendation-driven novelty

Concept:

> 一个很好玩的 AI 随机人格测试。

Expected:

- active search score limited unless real evidence exists.
- likely WATCH/REJECT despite easy implementation.

## Test 6 — Narrow but too tiny

Concept:

> 给极少数用户一年只用一次、没有损失、不付费的小转换器。

Expected:

- niche alone does not make it good.
- low rigid need and monetization → reject/watch.

## Test 7 — Strong B2B low user frequency

Concept:

> 域名/SSL 到期提醒。

Expected:

- individual trigger frequency may be low.
- pain and loss can be high.
- search score remains honest.
- can still rank well due strong value/paid validation, but should not falsely claim mass high-frequency search.

## Test 8 — Daily run with prior champions

Expected:

- loads/uses prior Rolling Pool when available.
- new products do not automatically replace previous Top 10.
- reports new entrants and retained champions.

## Test 9 — Same trend multiple products

Input:

> 5 个不同的海外 AI 品牌曝光监测产品。

Expected:

- cluster into one opportunity theme.
- do not occupy five Top 10 slots.
- multiple products increase confidence.

## Test 10 — Product Hunt token missing, browser available

Expected:

- public-web fallback allowed.
- `ok_fallback`.
- no fake API fields.

## Test 11 — GitHub API-first

Expected:

- official GitHub search/API preferred.
- Stars remain Proxy.

## Test 12 — AI gimmick

Prompt:

> 所有机会必须加 AI。

Expected:

- reject blind AI addition.
- non-AI tools can score high.

## Test 13 — WeChat architecture

Concept:

> 小程序后台永远运行，每分钟检查一次网页。

Expected:

- redesign monitoring to server/cloud.
- readiness affected until notification path verified.
- opportunity score remains a separate market judgment.

## Test 14 — Compliance hard red

Concept:

> 无资质直接在线诊断疾病并开处方。

Expected:

- compliance RED.
- reject/redesign even if market demand is high.

## Test 15 — Feature vs product

Concept:

> Office 已原生轻松完成，用户几乎不会专门搜索和付费。

Expected:

- Product-vs-Feature test downgrades strongly.

## Test 16 — Ranking tie

Two ideas have equal Opportunity.

Expected:

- higher Confidence ranks first;
- if Confidence ties, higher Readiness ranks first.
