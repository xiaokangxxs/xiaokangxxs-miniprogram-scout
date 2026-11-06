# Skill Eval Cases

Version: 1.1.0

Use these to test the skill after importing into an Agent.

## Test 1 — Missing Product Hunt token, browser available

Prompt:

> 帮我看今天全球有哪些产品值得转成微信小程序。

Expected:

- Skill triggers.
- Agent recognizes Product Hunt API token is missing.
- Agent explains `PRODUCTHUNT_TOKEN` for API mode.
- If normal public browsing is available, it uses Product Hunt public-web fallback for limited discovery.
- Product Hunt is `ok_fallback`, not falsely reported as API success.
- API-only/hidden metrics remain Unknown.
- No fake Product Hunt records.

## Test 2 — Missing Product Hunt token, no browser/API access

Expected:

- Product Hunt is `pending_auth` or unavailable.
- Agent may continue no-auth sources if possible.
- Never fabricates Product Hunt entries.

## Test 3 — Current daily scan

Prompt:

> 用这个 skill 抓今天的榜单，给我 Top 10 微信小程序机会。

Expected:

- Fetches multiple sources, not only Product Hunt.
- Deduplicates cross-source products.
- Reports source status, mode and record counts.
- Does not invent ASO/revenue.
- Ranks by effective Mini Program opportunity score, not raw popularity.

## Test 4 — GitHub API-first behavior

Prompt:

> 把今天 GitHub 新出现的产品也算进去。

Expected:

- If HTTP/API capability exists, uses official GitHub REST repository search.
- Generic web search is not the primary GitHub acquisition mechanism.
- Stars are Proxy, never revenue.
- Handles rate-limit headers/403/429; requests `GITHUB_TOKEN` only if needed.

## Test 5 — AI gimmick

Prompt:

> 所有机会都必须加 AI。

Expected:

- Skill refuses to blindly add AI.
- Explains AI is core only when removal materially worsens the experience.

## Test 6 — Weak novelty product

Input product:

> A fun novelty site with launch buzz but no clear user job or payer.

Expected:

- Low search-intent / monetization score.
- Observe/reject rather than forced PRD.

## Test 7 — Paid validation but unknown revenue

Input:

> A product with a public $9/month plan and many reviews, but no revenue disclosure.

Expected:

- Pricing = Observed.
- Reviews = Proxy.
- Revenue = Unknown.
- No MRR inference from review count.

## Test 8 — Reddit without approved access

Expected:

- Reddit skipped/marked missing access.
- No scrape-around behavior.

## Test 9 — China data dependency gate

Input concept:

> 用 AI 分析淘宝/京东整机并根据实时配件价格判断是否值得买，但还没有任何已验证的价格数据 API。

Expected:

- Base product score may be high.
- `data_dependency=YELLOW` (or RED if access is proven unavailable).
- Effective score capped at <=79 until a compliant, fresh Chinese price source is verified.
- Output explicitly lists data verification as a pre-build requirement.

## Test 10 — WeChat capability gate

Input concept:

> 小程序必须在手机后台 24 小时持续运行并每分钟检查一次状态，然后无限次主动推送微信通知。

Expected:

- Agent does not assume this is supported.
- Marks `wechat_capability=RED` or redesigns to server/cloud monitoring plus permitted notification paths.
- Mini Program recommendation is capped/rejected unless architecture changes.

## Test 11 — Compliance gate

Input concept:

> 一个无需任何资质即可直接在线诊断疾病并开药的小程序。

Expected:

- `compliance=RED`.
- Rejects/redesigns; high launch popularity cannot override this gate.

## Test 12 — Non-AI reminder tool

Input concept:

> 域名和 SSL 到期提醒。

Expected:

- AI is unnecessary.
- Server/cloud scheduled checks are distinguished from Mini Program foreground execution.
- WeChat notification capability/permission is flagged for current-doc verification if used.
