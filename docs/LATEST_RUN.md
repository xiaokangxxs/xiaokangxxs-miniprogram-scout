# Latest Scout Run — 2026-11-07

Skill version: **1.5.0**  
Mode: **GLOBAL_DISCOVERY**  
Rolling state: **ACTIVE — initialized from the 2026-11-06 snapshot + 2026-11-07 fresh signals**

> All Opportunity / Readiness / Confidence values are **Scout estimates**. Popularity is not demand. China keyword volume remains unverified unless explicitly marked Observed.

## Executive summary

The strongest current pattern is not “more AI agents”. It is still **high-intent task utilities** for Mini Programs and **instant-feedback, low-friction mechanics** for Mini Games.

### #1 Mini Program

**整机值不值 / PC 配置估价 — Opportunity 91**

Why:
- close to a real purchase decision;
- clear natural search/task intent;
- easy screenshot/OCR workflow in WeChat;
- strong recent overseas proxy signal;
- biggest blocker is not AI — it is reliable China component-price data.

### #1 Mini Game

**反套路陷阱闯关 — Opportunity 92**

Observed current signal:
- Level Devil remains Poki live Trending #1 on 2026-11-07.

Why:
- immediate 3–10 second hook;
- death → learning → instant retry;
- low prototype cost;
- strong short-session fit.

### Freshest fast bet

**食堂高峰经营 — Opportunity 91**

Observed:
- Canteen Rush last updated 2026-11-06;
- one-hand mobile controls;
- four canteens / upgrade loop / rush hours / staff automation.

China reframe:
- 校园食堂
- 工厂食堂
- 高铁站快餐
- 夜市档口

---

# 1. Top 10 WeChat Mini Program opportunities

| # | Opportunity | Current signal | Opportunity | Readiness | Confidence | Action |
|---:|---|---|---:|---:|---:|---|
| 1 | **整机值不值 / PC 配置估价** | Purchase-intent utility; prior HN momentum remains a strong Proxy | **91** | 58 | 88 | Validate China price data first |
| 2 | **房源照片 AI 美化** | Mature paid category + natural mobile/WeChat workflow | **89** | 82 | 90 | Build P0 after truthfulness guardrails |
| 3 | **网站 / 代码安全快检** | Security-check signal persists; lightweight passive POC | **87** | 74 | 82 | Build passive-only POC |
| 4 | **视频链接转文字 + 字幕 + 摘要** | Any Video to Text: cross-platform transcript + summary + timestamps | **85** | 72 | 84 | Narrow to course/interview/meeting use |
| 5 | **域名 / SSL 到期管家** | Low-frequency, high-loss B2B task; clean monitoring path | **85** | **93** | 89 | Build |
| 6 | **表格 → 经营报告 / Data Story** | Datastripes Data Stories: spreadsheet → narrative/charts | 82 | 80 | 82 | Narrow to daily/weekly business reports |
| 7 | **拍小票 / 聚餐 AA 助手** | WeChat group/offline meal fit; OCR + split is easy to prototype | 81 | 88 | 78 | Validate repeat usage |
| 8 | **AI / SEO 可见性体检** | Rankfender v3.0 remains a strong current Product Hunt signal | 80 | 64 | 79 | Diagnose only; do not build full SEO suite |
| 9 | **诈骗截图核验** | High-loss need but privacy/liability remain material blockers | 80 | 65 | 73 | Validate liability boundary |
| 10 | **AI 额度 / 重置提醒** | Small but clear developer workflow niche | 72 | 82 | 63 | Watch / narrow segment |

## Mini Program Top 3 — Score Explainability

### 1) 整机值不值 — 91/100

| Component | Score | Max | Evidence / assumption | Why not higher |
|---|---:|---:|---|---|
| Search Demand | 19 | 20 | Natural “值不值/配置估价/整机报价” intent | China volume not directly measured |
| Rigid Need | 18 | 20 | High-cost purchase decision | Not every buyer needs a second opinion |
| Niche Wedge | 13 | 15 | DIY/整机/二手 PC buyers | Competition from generic AI + communities |
| Monetization | 8 | 10 | Lead-gen / paid report / affiliate possible | Direct willingness-to-pay unverified |
| WeChat Native Fit | 9 | 10 | Screenshot upload + share card | Price database is server-side, not uniquely WeChat |
| Heat | 8 | 8 | Strong recent overseas proxy | — |
| Freshness | 5 | 5 | Current signal | — |
| Buildability | 9 | 10 | OCR/LLM is straightforward | Price dataset upkeep is hard |
| Product Leverage | 2 | 2 | Data engine reusable | — |

**Raw = Final Opportunity: 91**  
Hard gate: none, but **China price data is the fatal readiness blocker**.

Contrarian:
- Bear case: generic AI + PC forums may already solve 80% of the job.
- Fatal assumption: a maintainable China price library can stay accurate enough to earn trust.
- Verdict after Red Team: **VALIDATE_FIRST**.

China Demand validation:
- 电脑配置值不值
- 整机值不值
- 组装机报价
- 二手电脑估价
- 电脑配置单避坑

Suggested channels: WeChat Search, Baidu, Xiaohongshu, Douyin, Xianyu service listings.  
Current search-frequency status: **HYPOTHESIS**.

Validation OS:
- Hypothesis: buyers prefer a structured value verdict over generic AI/community answers.
- Sample: 30 active PC buyers.
- Success: >=60% rate it more useful than their current workaround; >=10 request a second evaluation/share.
- Kill: <30% prefer it, or reliable price maintenance is operationally uneconomic.

### 2) 房源照片 AI 美化 — 89/100

Breakdown:
- Search 17/20
- Need 19/20
- Niche 13/15
- Monetization 9/10
- WeChat Fit 9/10
- Heat 7/8
- Freshness 4/5
- Buildability 9/10
- Leverage 2/2

Contrarian:
- Bear case: image-generation quality is commoditizing rapidly.
- Fatal assumption: agents trust the output and buyers do not perceive it as misleading.
- Verdict: **KEEP / build guarded P0**.

Rights & Risk:
- No third-party content license blocker by default.
- Main risk: misleading structural changes / defect concealment.
- Product must visibly label AI-generated or AI-enhanced output where appropriate.

Validation:
- 30 agents / 100 real listing photos.
- Success: >=70% acceptable output, <=20% rework, >=8/30 clear willingness to pay.
- Kill: frequent structural hallucination or trust rejection.

### 3) 网站 / 代码安全快检 — 87/100

Breakdown:
- Search 18/20
- Need 17/20
- Niche 13/15
- Monetization 8/10
- WeChat Fit 9/10
- Heat 7/8
- Freshness 5/5
- Buildability 8/10
- Leverage 2/2

Contrarian:
- Bear case: a shallow scanner is easy to copy and users may not pay.
- Fatal assumption: passive-only checks can produce enough actionable value.
- Verdict: **VALIDATE_FIRST**.

Rights & Risk:
- Do not scan targets without permission.
- P0 should stay passive/read-only: TLS, headers, public exposure, dependency/config checks.

---

# 2. Top 10 WeChat Mini Game opportunities

| # | Mechanic | Current signal | Opportunity | Readiness | Confidence | Action |
|---:|---|---|---:|---:|---:|---|
| 1 | **反套路陷阱闯关** | Level Devil remains Poki live Trending #1 | **92** | 86 | 93 | Build prototype |
| 2 | **食堂高峰经营** | Canteen Rush updated 11/06; one-hand mobile loop | **91** | 84 | 90 | Build China-theme prototype |
| 3 | **一键换道极限跑酷** | Tap Road 2: one-tap + challenges + leaderboard | **90** | **92** | 80 | Fastest 1–3 day POC |
| 4 | **一条路 Roguelite 自动战斗** | One-Path Dungeon updated 11/06; 9.1, 252 likes / 25 dislikes | 89 | 87 | 88 | Strong prototype |
| 5 | **削皮 / 清理爽感 Idle** | Potato Peeler Tycoon: satisfying one-finger upgrade loop | 88 | 85 | 84 | Re-theme then POC |
| 6 | **刮擦收集增量（去博彩化）** | Scritchy Scratchy remains strong, recent challenge update | 87 | 72 | 93 | Re-theme before prototype |
| 7 | **物理拆塔炮击** | Portrait/mobile-friendly physics destruction loop | 87 | 83 | 77 | Prototype |
| 8 | **磁吸废品收集** | One-stick collect → sell → upgrade loop | 85 | 90 | 75 | Fast prototype |
| 9 | **网吧经营模拟** | Strong China-theme fit, but larger system burden | 84 | 78 | 86 | Compress systems |
| 10 | **物理平衡驾驶** | Drive Mad remains Poki Top 5 trending | 83 | 86 | 88 | Must strongly differentiate |

## Mini Game Top 3 — Score Explainability

### 1) 反套路陷阱闯关 — 92/100

- Hook 20/20
- Replay 15/15
- Social 13/15
- Monetization 14/15
- Heat 10/10
- Freshness 9/10
- Buildability 8/10
- Competition Gap 3/5

Why not higher:
- crowded “rage/trap” space;
- content/level design becomes the ongoing burden;
- social loop needs an original twist.

Contrarian:
- Fatal assumption: surprise remains fun after users learn the format.
- Test: 20 original levels, 100 players.
- Success: second-run >=65%, median retries >=3, >=20% voluntarily challenge/share.
- Kill: second-run <35% or most feedback says “only frustrating”.

### 2) 食堂高峰经营 — 91/100

- Hook 18/20
- Replay 15/15
- Social 13/15
- Monetization 15/15
- Heat 9/10
- Freshness 10/10
- Buildability 7/10
- Competition Gap 4/5

Observed:
- Canteen Rush last updated 2026-11-06.
- One-hand mobile controls.
- Rush-hour + staff + upgrade loop.

Contrarian:
- Fatal assumption: the serving/cleaning loop stays satisfying instead of becoming repetitive.
- Test: one campus canteen, 8 dishes, 10-minute loop, 100 players.
- Success: >=55% reach 10 minutes; >=50% voluntarily continue after first expansion.
- Kill: <30% reach first meaningful upgrade.

### 3) 一键换道极限跑酷 — 90/100

- Hook 20/20
- Replay 14/15
- Social 14/15
- Monetization 14/15
- Heat 9/10
- Freshness 9/10
- Buildability 9/10
- Competition Gap 1/5

Contrarian:
- Bear case: endless-runner competition is extremely high.
- Fatal assumption: one original modifier set is enough to create identity.
- Test: 2 lanes + 15 obstacles + 3 mutators + leaderboard.
- Success: second-run >=70%, avg >=4 sessions in test.
- Kill: second-run <40%.

---

# 3. Cross-category Top 5 Best Bets

| # | Form | Best Bet | Opportunity | Readiness | Why now |
|---:|---|---|---:|---:|---|
| 1 | Mini Game | **反套路陷阱闯关** | 92 | 86 | Sustained live heat + cheap prototype |
| 2 | Mini Program | **整机值不值** | 91 | 58 | Strong purchase intent; biggest upside if price-data blocker clears |
| 3 | Mini Game | **食堂高峰经营** | 91 | 84 | Fresh, mobile-first and easy to localize |
| 4 | Mini Game | **一键换道极限跑酷** | 90 | **92** | Fastest path to real behavior data |
| 5 | Mini Program | **房源照片 AI 美化** | 89 | 82 | Strongest paid-category proof among utilities |

---

# 4. Evidence Quality

Strongest current evidence:
- Poki live trending list for Level Devil / Drive Mad — **Observed, direct for heat**.
- CrazyGames current product pages for Canteen Rush / One-Path Dungeon — **Observed for update/features, Proxy for demand**.
- Product Hunt current daily/monthly pages — **Observed for launch/rank signal, Proxy for China demand**.
- Paid/real workflow evidence for real-estate photo enhancement — **strong category-level Proxy**.

Weakest assumptions:
- actual China search volume;
- actual Chinese willingness to pay;
- WeChat-specific conversion rate;
- price-data licensing/coverage for PC valuation.

Important rule:
> GitHub Stars / Product Hunt votes / browser-game rank are **popularity/heat evidence**, not direct China demand proof.

---

# 5. Rights & Risk

## Green / low risk
- original game mechanics when implemented with original art/levels/branding;
- generic passive website checks;
- self-owned data/report generation.

## Yellow / validate
- PC price datasets: source license, scraping terms, update cadence.
- AI photo enhancement: truthfulness / property representation.
- transcript tools: platform terms, copyrighted media, user rights to process content.
- SEO/GEO diagnostics: third-party search/data terms.

## Rule
Public GitHub / public webpages do **not** automatically grant:
- commercial reuse;
- redistribution;
- RAG rights;
- embedding rights;
- derivative-work rights.

---

# 6. China Demand validation queue

Priority validation:

1. **整机值不值**
   - 电脑配置值不值
   - 整机值不值
   - 二手电脑估价
   - 电脑配置单避坑

2. **房源照片 AI 美化**
   - 房源照片美化
   - 房产修图
   - 中介房源图
   - 空房软装 AI

3. **网站 / 代码安全快检**
   - 网站安全检测
   - SSL 检测
   - 网站风险扫描
   - 代码安全检查

Suggested China channels:
- WeChat Search / WeChat Index when available
- Baidu
- Xiaohongshu
- Douyin
- Zhihu
- Taobao / Xianyu paid-service listings

Current real keyword-volume status: **UNKNOWN / HYPOTHESIS**.

---

# 7. Champion movement vs 2026-11-06

## Mini Program

**HEATING**
- 整机值不值: #2 → #1
- 网站 / 代码安全快检: #4 → #3

**RETAINED**
- 房源照片 AI 美化
- 域名 / SSL 到期管家
- 小票 AA 助手
- 诈骗截图核验

**NEW / ENTERED TOP10**
- 视频链接转文字 + 字幕 + 摘要
- 表格 → 经营报告 / Data Story
- AI / SEO 可见性体检
- AI 额度 / 重置提醒

**COOLING / OUT OF CURRENT TOP10**
- 装修 / 维修报价估算
- 卡牌价格雷达
- 验光档案 + 复购提醒
- 网页变化雷达

## Mini Game

**RETAINED**
- 反套路陷阱闯关
- 刮擦收集增量
- 物理拆塔炮击
- 磁吸废品收集
- 网吧经营模拟
- 物理平衡驾驶

**HEATING / NEW**
- 食堂高峰经营
- 一键换道极限跑酷
- 一条路 Roguelite 自动战斗
- 削皮 / 清理爽感 Idle

**COOLING**
- 指尖扎根成长: still valid in the 14-day pool, but recent freshness weakened
- 荒诞无限成长
- 地下工厂 Idle
- 无限挖矿增量

---

# 8. Source snapshot — 2026-11-07

Observed / checked:
- Product Hunt daily — https://www.producthunt.com/leaderboard/daily/2026/11/7
- Product Hunt current launches — https://www.producthunt.com/
- Hacker News / Show HN — https://news.ycombinator.com/show
- Poki — https://poki.com/
- CrazyGames Canteen Rush — https://www.crazygames.com/game/canteen-rush
- CrazyGames One-Path Dungeon — https://www.crazygames.com/game/one-path-dungeon
- Any Video to Text — https://www.producthunt.com/products/any-video-to-text
- Datastripes Data Stories — https://www.producthunt.com/products/datastripes

## Current limitation

Product Hunt official authenticated GraphQL data was not available to this execution path; public Product Hunt pages were used as fallback. The report does not contain any token.

Before building:
1. validate China demand with real tools/interviews;
2. verify content/data/API rights;
3. verify current WeChat category/payment/privacy/ads/game rules;
4. run the smallest falsification experiment first.
