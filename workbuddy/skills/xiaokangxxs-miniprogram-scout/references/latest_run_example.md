# Latest Scout Run — 2026-11-06

Skill release: **v1.3.2**  
Run date: **2026-11-06**  
Model: **Mini Program + Mini Game dual-engine / 14-day Rolling Pool**

> This is the latest dated Scout snapshot packaged with the Skill. It combines fresh 24–72h signals with the recent Champion Board. Rankings are product-research judgments, not guarantees of market success.

## Evidence rule

- **Observed** — directly verified on a source/product page.
- **Proxy** — rank, points, comments, ratings, votes, reviews, stars, etc.
- **Estimate** — Scout judgment based on evidence.
- **Unknown** — not reliably verified.

No real WeChat/Baidu/ASO keyword tool was queried in this run. Search frequency is therefore **Hypothesis**, not Observed. No Popularity / Difficulty values are fabricated.

---

# 1. Top 10 WeChat Mini Program opportunities

| Rank | Opportunity | Core search hypothesis | Fresh / Heat / Build | Opportunity | Readiness | Confidence | Action |
|---:|---|---|---|---:|---:|---:|---|
| 1 | **房源照片 AI 美化** | 房源照片美化、房产修图、虚拟软装 | M / H / H | **90** | 82 | 90 | 🔥 P0 validation → build |
| 2 | **整机值不值 / PC 配置估价** | 电脑配置估价、整机值不值、组装机报价 | H / H / M | **89** | 58 | 84 | 🧪 Validate China price data |
| 3 | **域名 / SSL 到期管家** | 域名到期提醒、SSL到期、证书提醒 | M / M / H | **86** | **93** | 89 | 🔥 Build |
| 4 | **网站安全体检** | 网站安全检测、SSL检测、网站风险 | H / H / H | 83 | 72 | 78 | ✅ Validate scan boundary |
| 5 | **小票 AA 助手** | 小票分账、聚餐AA、拍照AA | M / M / H | 82 | 87 | 82 | ✅ Validate willingness to pay |
| 6 | **诈骗截图核验** | 是不是诈骗、诈骗短信识别、可疑链接 | H / H / M | 82 | 66 | 74 | ✅ Strong need, validate liability/privacy |
| 7 | **装修 / 维修报价估算** | 装修报价、维修多少钱、装修预算 | H / M / M | 80 | 55 | 68 | 🧪 Validate pricing dataset |
| 8 | **卡牌价格雷达** | 卡牌价格查询、卡牌估价、值多少钱 | M / M / M | 79 | 58 | 78 | ✅ Validate licensed price source |
| 9 | **验光档案 + 复购提醒** | 验光记录、眼镜度数、配镜档案 | M / M / H | 77 | 75 | 85 | ✅ B2B niche validation |
| 10 | **网页变化雷达** | 网页监控、页面变化提醒、价格变化 | H / M / H | 74 | 68 | 79 | 👀 Watch / niche down |

## Why the Top 3 survived the Rolling Pool

### 房源照片 AI 美化

- Mature paid category.
- Strong mobile workflow fit for agents/property staff.
- Direct value path: better listing media → faster publishing / stronger presentation.
- Main product risk is truthfulness: AI must not materially alter structure or conceal real defects.

Fastest validation:
- 30 real-estate agents
- 100 real listing photos
- measure acceptable-result rate, rework rate, trust and willingness to pay

### 整机值不值

Fresh momentum remained strong in current HN signals. The job is close to purchase intent:

> “I already found this PC. Is it worth the asking price?”

The main blocker is not OCR/AI recognition. It is reliable China component-price data.

Fastest validation:
- manually maintain reference prices for 100–200 mainstream CPU/GPU/RAM/SSD models
- recruit 30 users currently considering a PC purchase
- compare usefulness against “ask a knowledgeable friend / generic AI”

### 域名 / SSL 到期管家

The market is smaller, but the value is clean:

- low frequency
- high loss if missed
- easy-to-understand B2B payer
- clean technical path through domain/certificate checks

Monitoring should run server-side; Mini Program is the configuration/result surface.

---

# Mini Program requirement conversion — Top 3

## A. 房源照片 AI 美化

**Positioning**

> 房产中介现场拍完房，微信里快速生成可发布的房源图。

**Target users**

- 房产中介
- 房产摄影师
- 小型经纪门店
- 物业/租赁运营

**P0**

1. 相册/相机导入。
2. 三个动作：自动提亮、去杂物、空房软装。
3. 原图 / AI 图滑动对比。
4. “AI 效果示意”标识。
5. 保存 + 微信转发。
6. 图片历史与删除。

**Monetization hypothesis**

- 3 张体验
- 图片积分包
- 单房源包
- 门店团队包

**Main blocker**

AI 不能改变真实结构、隐藏缺陷或制造误导性展示。

---

## B. 整机值不值

**Positioning**

> 把准备购买的电脑配置截图丢进来，告诉你整机到底值不值。

**P0**

1. 上传电商/聊天/配置截图。
2. OCR/AI 识别 CPU/GPU/RAM/SSD/主板/电源。
3. 用户确认识别结果。
4. 参考价格库计算。
5. 输出组件合理价、整机合理价区间、品牌溢价、明显短板。
6. 输出“值 / 一般 / 不建议”。
7. 生成可分享的避坑卡。

**Do not do first**

- 不先抓淘宝/京东全站。
- 不先覆盖所有型号。
- 不先做自动购买跳转。

**Kill criterion**

If users consistently find the result less useful than asking an experienced friend or a generic AI, stop further automation.

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

**Monetization hypothesis**

- 5 个免费
- 个人 / 工作室 / Agency 分级
- 白标客户提醒作为高阶功能

---

# 2. Top 10 WeChat Mini Game opportunities

| Rank | Mechanic opportunity | Current signal | Fresh / Heat / Build | Opportunity | Readiness | Confidence | Action |
|---:|---|---|---|---:|---:|---:|---|
| 1 | **反套路陷阱闯关** | Level Devil remains Poki Top Trending #1 | H / VH / VH | **91** | 86 | 91 | 🎮 Build prototype |
| 2 | **指尖扎根成长** | Root to Core — mobile-friendly, one-finger growth loop | H / H / VH | **88** | **88** | 82 | 🎮 Strong prototype candidate |
| 3 | **刮擦收集增量（去博彩化）** | Scritchy Scratchy — strong rating + recent challenge update | H / H / H | **87** | 72 | **92** | 🎮 Redesign theme, then prototype |
| 4 | **物理拆塔炮击** | Knock It All — fresh portrait/mobile physics loop | VH / MH / H | **86** | 84 | 72 | 🎮 Prototype |
| 5 | **网吧经营模拟** | Internet Cafe Tycoon — fresh update + strong player feedback | H / H / M | **84** | 78 | 83 | 🧪 Strong China-theme fit |
| 6 | **磁吸废品收集** | Magnetic Scrap Rush — one-stick collection/upgrades | H / M / VH | **84** | 88 | 72 | 🎮 Fast prototype |
| 7 | **荒诞无限成长** | Banana Infinity — fresh mobile/browser incremental | VH / M / VH | 83 | 90 | 76 | 🧪 Test satisfaction loop |
| 8 | **物理平衡驾驶** | Drive Mad remains Poki Top 5 trending | M / VH / H | 83 | 86 | 88 | 🧪 Must differentiate |
| 9 | **地下工厂 Idle** | Bunker Empire — strong rating but larger system burden | M / H / M | 81 | 78 | 86 | 🧪 Compress systems |
| 10 | **无限挖矿增量** | Break a Wall — fresh mobile/browser mining loop | H / M / M | 80 | 74 | 68 | 🧪 Simplify |

## New movers in this run

### 网吧经营模拟

Strong China-localization potential:

> 破旧网吧 → 升级电脑/显卡 → 卖泡面饮料 → 防小偷/故障 → 请主播 → 扩店

The downside is system/content burden: it is less prototype-friendly than the top four.

### 磁吸废品收集

Very compact Mini Game loop:

> 开磁力车 → 周围废品被吸过来 → 运回回收站 → 卖钱 → 升级磁力/容量/速度 → 解锁新区域

Advantages:

- one-stick control
- obvious visual feedback
- easy upgrade loop
- low backend burden
- realistic 1–3 day POC

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
- 每日挑战关

**Prototype success signals**

- second-run rate
- average retries per level
- voluntary share/save intent

---

## B. 指尖扎根成长

**Core idea**

> 手指拖动根系一路向地下生长，边长边收集水、矿物、化石和遗迹。

**P0**

1. 1 棵树。
2. 5 个地下层。
3. 水资源。
4. 8–12 个发现物。
5. 根系升级。
6. 轻量离线收益。
7. 收藏博物馆。

**Why it fits WeChat**

- one-finger
- portrait-friendly
- immediate visual progression
- no heavy tutorial
- low backend dependency

---

## C. 刮擦收集增量

Do **not** clone lottery/scratch-off visual language.

Keep the interaction:

> 刮掉覆盖层 → 发现物品 → 收集 → 升级工具 → 更快发现更稀有东西。

Safer themes:

- 考古清理
- 除锈修复
- 刮土寻宝
- 冰层挖掘
- 旧画修复

**P0**

- one scratch interaction
- rarity loop
- collection album
- 5 tool upgrades
- prestige/rebirth only after the base loop is proven fun

---

# 3. Cross-category Top 5 Best Bets

| Rank | Form | Best Bet | Opportunity | Readiness | Why now | Fastest validation |
|---:|---|---|---:|---:|---|---|
| 1 | Mini Program | **房源照片 AI 美化** | 90 | 82 | Mature paid category + natural mobile/WeChat workflow | 30 agents / 100 photos |
| 2 | Mini Game | **反套路陷阱闯关** | 91 | 86 | Current live browser-game heat + extremely cheap prototype | 20 levels / 100 players |
| 3 | Mini Program | **整机值不值** | 89 | 58 | Fresh momentum + high purchase intent | manual 100–200 SKU price library |
| 4 | Mini Game | **指尖扎根成长** | 88 | 88 | Fresh one-finger mechanic + strong visual progression | 1 tree / 5 layers / 100 players |
| 5 | Mini Program | **域名 / SSL 到期管家** | 86 | 93 | Clean B2B value + clean technical path | 20 monitored domains |

---

# Notable Watch / Downrank decisions

## Uncracked City

Fresh HN attention is strong, but it did not enter the Top 10 Mini Games because:

- content/LLM production burden is relatively high
- prototype is not as cheap as the top mechanics
- user feedback suggests interaction quality must improve beyond “click and talk”
- inference/content costs can become a real live-ops burden

Conclusion: **Watch**, do not promote on heat alone.

## Product Hunt agent infrastructure

Today's Product Hunt leaderboard remains highly concentrated in Agent/AI infrastructure.

Conclusion:

> Good technology/business does not automatically mean good WeChat Mini Program/Mini Game conversion.

---

# WeChat readiness note

Launch-critical WeChat fields must remain `VERIFY_OFFICIAL` until verified against current official docs/public-platform backend.

Key checks:

## Mini Program

- subject / service category
- category qualifications
- filing
- privacy declarations/consent
- payment / virtual content
- subscription/service messages

## Mini Game

- game category / qualifications / publication requirements
- ads eligibility
- virtual payment
- content/IP review
- package/subpackage/performance
- low-end Android performance
- social/share compliance

Reminder/monitoring products should use **server-side monitoring + compliant notification + fallback channels**, not assume unlimited proactive push.

---

# Source snapshot

Checked for this run on **2026-11-06**:

- Product Hunt — https://www.producthunt.com/
- Hacker News Show — https://news.ycombinator.com/show
- BetaList — https://betalist.com/
- Neeed — https://neeed.directory/products
- itch.io New & Popular — https://itch.io/games/new-and-popular
- Poki — https://poki.com/
- CrazyGames Root to Core — https://www.crazygames.com/game/root-to-core
- CrazyGames Internet Cafe Tycoon — https://www.crazygames.com/game/internet-cafe-tycoon-vjb
- CrazyGames Magnetic Scrap Rush — https://www.crazygames.com/game/magnetic-scrap-rush
- Scritchy Scratchy — https://funday-games.itch.io/scritchy-scratchy
- Stager AI — https://stagerai.com/ai-real-estate-photo-editing
- RenewRoster — https://renewroster.com/pricing

## Important limitation

Before real development:

1. validate actual Chinese keyword/search volume;
2. interview target users;
3. verify data/API licensing;
4. verify current WeChat category/qualification/payment/privacy/ads rules;
5. run the smallest falsification test first.
