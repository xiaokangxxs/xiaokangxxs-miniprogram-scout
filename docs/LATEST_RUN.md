# Latest Scout Run — 2026-11-06

Skill logic: **v1.3.x dual-engine model**  
Repository release: **v1.3.2**

> This is a dated, evidence-aware run snapshot for demonstration and regression comparison. It is not a guarantee that the ranking will remain unchanged tomorrow.

## Source status

| Source | Mode | Status | What mattered in this run |
|---|---|---|---|
| Product Hunt | Public Web fallback | OK | Today's board remained heavily weighted toward AI/agent infrastructure; useful for trend context, weaker for direct WeChat conversion |
| Hacker News | Public / official pages | OK | PC Deal Check reached 106 points / 73 comments on Show HN; Lecture to Book and other fresh launches added signals |
| BetaList | Public Web | OK | FreeDAST appeared as a current trending/new startup |
| GitHub | Official connected search | OK | Fresh repos were mostly developer tooling; limited impact on end-user WeChat ranking |
| itch.io | Public Web | OK | Scritchy Scratchy remained a strong incremental/scratch-mechanic signal and shipped a Nov 5 challenge update |
| Poki | Public Web | OK | Level Devil was #1 in the live Top Trending list; Drive Mad also remained Top 5 |
| CrazyGames | Public Web | OK | Root to Core, Knock It All, Banana Infinity, Break a Wall, Bunker Empire and Endless Gunner supplied fresh mobile/browser-friendly mechanics |
| Steam / SteamDB | Public Web | Supplemental | Used for trend context, not direct Mini Game market-size inference |

## Evidence rule

- **Observed**: directly visible on the source/product page.
- **Proxy**: points, comments, ratings, votes, rank, followers, stars.
- **Estimate**: Scout's market/product judgment.
- **Unknown**: not reliably verified.

No real WeChat/Baidu/ASO keyword tool was queried in this run. Search frequency is therefore **Hypothesis**, not Observed.

---

# Top 10 WeChat Mini Program opportunities

| Rank | Opportunity | Primary wedge | Fresh / Heat / Build | Opportunity | Readiness | Confidence | Action |
|---:|---|---|---|---:|---:|---:|---|
| 1 | **房源照片 AI 美化** | 房产中介拍完即修、直接微信发客户 | M / H / H | **90** | 82 | 90 | 🔥 Build after keyword/user validation |
| 2 | **整机值不值 / PC 配置估价** | 截图识别配置，交易前即时避坑 | H / H / M | **89** | 58 | 84 | 🧪 Validate China price data |
| 3 | **域名 / SSL 到期管家** | 低频但高损失的 B2B 托管提醒 | M / M / H | **86** | 93 | 89 | 🔥 Build |
| 4 | **网站安全体检** | 公开站点快速风险体检 | H / H / H | 83 | 72 | 78 | ✅ Validate scope / abuse controls |
| 5 | **小票 AA 助手** | 拍小票→逐项分配→微信群结算 | M / M / H | 82 | 87 | 82 | ✅ Validate willingness to pay |
| 6 | **诈骗截图核验** | 聊天/短信截图先判断风险信号 | H / H / M | 82 | 66 | 72 | 🧪 Validate liability/privacy |
| 7 | **装修 / 维修报价估算** | 决策前“这个价格合理吗” | H / M / M | 80 | 55 | 67 | 🧪 Validate China pricing dataset |
| 8 | **卡牌价格雷达** | 收藏交易前快速估价 | M / M / M | 79 | 58 | 78 | ✅ Validate licensed price source |
| 9 | **验光档案 + 复购提醒** | 门店扫码沉淀度数/复查周期 | M / M / H | 77 | 75 | 85 | ✅ B2B niche validation |
| 10 | **网页变化雷达** | 关注页面变化后再通知 | H / M / H | 74 | 68 | 79 | 👀 Watch / niche down |

## Why the top three survived the rolling pool

### 1. 房源照片 AI 美化

Observed market validation remains unusually strong:

- Stager AI publicly states **12,000+ real-estate professionals**, **1,842 reviews**, and pricing that can go down to **$0.25/image** at volume.
- The core job maps directly to money: better listing media → faster publishing / stronger listing presentation.
- Mobile capture + WeChat client communication makes the Mini Program form naturally lower-friction.

Reference:
- https://stagerai.com/ai-real-estate-photo-editing
- https://stagerai.com/real-estate-photo-editing-cost

### 2. 整机值不值

Fresh momentum is strong:

- Show HN: **106 points / 73 comments** on 2026-11-06 for “I built a tool that prices a pre-built PC part by part.”
- The task is close to purchase intent: users need a decision before paying.
- Main blocker is not AI recognition; it is reliable China component-price data.

Reference:
- https://news.ycombinator.com/show
- https://pcdealcheck.com/

### 3. 域名 / SSL 到期管家

Observed monetization and data path are clean:

- RenewRoster public plans: Free / **$15 / $39 / $99 per month**.
- Domain expiry uses RDAP/WHOIS; SSL expiry uses direct TLS checks.
- The value is avoiding a costly outage, not daily engagement.

Reference:
- https://renewroster.com/pricing
- https://renewroster.com/tools/domain-ssl-expiry-checker

---

# Mini Program requirement conversion — Top 3

## A. 房源照片 AI 美化

**Positioning**

> 房产中介现场拍完房，微信里 30 秒生成可发布的房源图。

**Target user**

- 房产中介
- 房产摄影师
- 小型经纪门店
- 物业/租赁运营

**P0**

1. 相册/相机导入。
2. 三个动作：自动提亮、去杂物、空房软装。
3. 原图 / AI 图滑动对比。
4. “AI 效果示意”水印/标签策略。
5. 保存 + 微信转发。
6. 图片历史与删除。

**Monetization**

- 3 张体验
- 图片积分包
- 单房源包
- 门店团队包

**Key blocker**

AI 不能改变真实结构、隐藏缺陷或制造误导性展示。

**Fastest validation**

30 个真实中介 + 100 张真实房源图；同时测：
- 结果可接受率
- 返工率
- 付费意愿
- “原图 vs AI图”信任

---

## B. 整机值不值

**Positioning**

> 把准备购买的电脑配置截图丢进来，告诉你整机到底值不值。

**P0**

1. 上传电商/聊天/配置截图。
2. OCR/AI 识别 CPU/GPU/RAM/SSD/主板/电源。
3. 用户确认识别结果。
4. 参考价格库计算。
5. 输出：
   - 组件合理价
   - 整机合理价区间
   - 品牌溢价
   - 明显短板
   - 值 / 一般 / 不建议
6. 生成可分享的“避坑卡”。

**Do not do first**

- 不先抓淘宝/京东全站。
- 不先做所有型号。
- 不先做自动购买跳转。

**Fastest validation**

人工维护 100–200 个主流型号价格，找 30 个近期准备买电脑的人。

**Kill criteria**

如果用户普遍认为结果不如“直接问懂电脑的朋友/现成 AI”，停止继续自动化。

---

## C. 域名 / SSL 到期管家

**Positioning**

> 帮站长和外包公司盯住所有客户域名和证书，别等网站挂了才想起来续费。

**P0**

1. 输入域名。
2. 自动检测域名到期 / SSL 到期。
3. 7/14/30/60 天提醒规则。
4. 客户/项目标签。
5. 到期风险列表。
6. 邮件兜底。
7. 微信通知能力按当前官方规则接入。

**Architecture**

Monitoring must run server-side; the Mini Program is the configuration/result surface.

**Monetization**

- 5 个免费
- 个人 / 工作室 / Agency 分级
- 白标客户提醒作为高阶功能

---

# Top 10 WeChat Mini Game opportunities

| Rank | Mechanic opportunity | Current signal | Hook / Replay / Build | Opportunity | Readiness | Confidence | Action |
|---:|---|---|---|---:|---:|---:|---|
| 1 | **反套路陷阱闯关** | Level Devil #1 on Poki live trending | VH / H / VH | **91** | 86 | 91 | 🎮 Build prototype |
| 2 | **指尖扎根成长** | Root to Core: 8.7, mobile+portrait/landscape | VH / H / VH | **88** | 88 | 80 | 🎮 Build prototype |
| 3 | **刮擦收集增量（去博彩主题）** | Scritchy Scratchy 4.7/5, 897 ratings, Nov 5 challenge update | VH / VH / H | **87** | 72 | 92 | 🎮 Redesign theme then prototype |
| 4 | **物理拆塔炮击** | Knock It All: Nov 2026, portrait/mobile, 9.3 rating | VH / H / H | 86 | 84 | 70 | 🎮 Prototype |
| 5 | **荒诞无限成长** | Banana Infinity: Nov 2026, mobile/browser | VH / H / VH | 84 | 90 | 74 | 🧪 Prototype |
| 6 | **物理平衡驾驶** | Drive Mad remains Poki Top 5 trending | VH / H / H | 83 | 86 | 88 | 🧪 Differentiate |
| 7 | **无限挖矿增量** | Break a Wall: Nov 2026, mobile/browser | H / H / M | 81 | 74 | 67 | 🧪 Simplify to Mini Game |
| 8 | **自动射击 + 装备合成** | Endless Gunner: Nov 2026, mobile/browser | H / H / H | 80 | 82 | 64 | 🧪 Test retention |
| 9 | **地下工厂 Idle** | Bunker Empire: updated Nov 2026 | H / H / M | 79 | 76 | 72 | 👀 Watch |
| 10 | **轻竞技卡丁车** | Smash Karts #2 on Poki live trending | VH / VH / L | 78 | 55 | 90 | 🧪 Multiplayer cost first |

## Fresh game evidence

### Level Devil

Poki currently lists it as **#1 Top Trending**. The mechanic is extremely portable:

> looks like a simple platformer → the level lies to you → instant death → immediate retry.

Reference:
- https://poki.com/

### Root to Core

Observed on CrazyGames:

- rating around **8.7**
- mobile + tablet + desktop
- portrait and landscape
- draw roots with finger, automate resource gathering, descend into new layers

Reference:
- https://www.crazygames.com/game/root-to-core

### Scritchy Scratchy

Observed on itch.io:

- **4.7 / 5**
- **897 ratings**
- **$6.99**
- WebGL demo
- Nov 5, 2026 Challenge Update with nine rule-changing challenge runs

Reference:
- https://funday-games.itch.io/scritchy-scratchy
- https://funday-games.itch.io/scritchy-scratchy/devlog/1754319/

### Knock It All

Observed on CrazyGames:

- released Nov 2026
- portrait orientation
- browser/mobile/tablet
- physics knock-down puzzle
- rating around **9.3** at the time of this run

Reference:
- https://www.crazygames.com/game/knock-it-all

---

# Mini Game requirement conversion — Top 3

## A. 反套路陷阱闯关

**Core loop**

```text
看到终点
→ 以为很简单
→ 规则突然反转
→ 死亡
→ “原来如此”
→ 立即重试
→ 下一关换一种骗法
```

**P0**

- 左右 + 跳跃
- 10–15 个基础机关
- 20 个短关卡
- 每关 10–30 秒
- 死亡次数榜
- 每日同一挑战关

**Monetization**

Rewarded video for:
- optional hint
- optional checkpoint

Avoid forced sharing/revival.

**Prototype success signal**

- 100 players
- second-run rate
- average retries per level
- voluntary share/save intent

---

## B. 指尖扎根成长

**Core idea**

> 手指拖动根系一路向地下长，边长边收集水、矿物、化石和遗迹。

**Why it fits WeChat**

- one-finger input
- portrait-friendly
- immediate visual growth
- idle/return loop
- no heavy tutorial

**P0**

1. 1 棵树。
2. 5 个地下层。
3. 水资源。
4. 8–12 个可发现物。
5. 根系升级。
6. 离线收益。
7. 轻量收藏博物馆。

**Monetization**

- rewarded video: double offline reward / temporary growth boost
- cosmetics later
- avoid pay-to-win complexity in P0

---

## C. 刮擦收集增量

Do **not** clone scratch-off lottery visuals.

Keep only the interaction:

> 刮掉覆盖层 → 发现物品 → 收集 → 升级工具 → 更快发现更稀有东西。

Safer themes:

- 刮土寻宝
- 修复旧画
- 考古清理
- 除锈修复
- 冰层挖掘

**P0**

- one scratch interaction
- rarity loop
- collection album
- 5 tool upgrades
- prestige/rebirth only after the base loop proves fun

**Policy note**

Avoid gambling/luck-for-money framing. Validate current Mini Game review/monetization rules before launch.

---

# Cross-category Top 5 Best Bets

| Rank | Form | Opportunity | Why now | First validation |
|---:|---|---|---|---|
| 1 | Mini Program | 房源照片 AI 美化 | Mature paid validation + natural mobile/WeChat workflow | 30 agents / 100 photos |
| 2 | Mini Game | 反套路陷阱闯关 | Current live browser-game heat + extremely cheap prototype | 20 levels / 100 players |
| 3 | Mini Program | 整机值不值 | Strong fresh HN momentum + high purchase intent | manual 100–200 SKU price library |
| 4 | Mini Game | 指尖扎根成长 | Fresh mobile-friendly one-finger mechanic + strong visual progression | 1 tree / 5 layers |
| 5 | Mini Program | 域名 / SSL 到期管家 | Clean B2B data path + observed paid SaaS benchmark | 20 monitored domains |

---

# Source snapshot

Fetched/checked for this report on **2026-11-06**:

- Hacker News Show: https://news.ycombinator.com/show
- Hacker News Show New: https://news.ycombinator.com/shownew
- Product Hunt: https://www.producthunt.com/
- BetaList: https://betalist.com/
- itch.io New & Popular: https://itch.io/games/new-and-popular
- Poki: https://poki.com/
- CrazyGames Root to Core: https://www.crazygames.com/game/root-to-core
- CrazyGames Knock It All: https://www.crazygames.com/game/knock-it-all
- CrazyGames Banana Infinity: https://www.crazygames.com/game/banana-infinity-grow-a-banana
- CrazyGames Break a Wall: https://www.crazygames.com/game/break-a-wall-mining-tycoon-lkg
- CrazyGames Bunker Empire: https://www.crazygames.com/game/bunker-empire
- CrazyGames Endless Gunner: https://www.crazygames.com/game/endless-gunner
- Scritchy Scratchy: https://funday-games.itch.io/scritchy-scratchy
- Stager AI: https://stagerai.com/ai-real-estate-photo-editing
- RenewRoster: https://renewroster.com/pricing

## Important limitation

This report is a **Scout output**, not audited market research.

Before real development:

1. validate actual Chinese keywords/search volumes;
2. interview target users;
3. verify data/API licensing;
4. verify current WeChat category/qualification/payment/privacy/ads rules;
5. run the smallest falsification test first.
