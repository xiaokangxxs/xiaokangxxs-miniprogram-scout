# xiaokangxxs-miniprogram-scout

> **值得做 × 高频搜索 × 刚需 × 小众** 的微信小程序机会侦察 Skill

**Version: 1.2.0**

`xiaokangxxs-miniprogram-scout` 是一个平台无关的 Agent Skill。它从 Product Hunt、Hacker News、GitHub、Neeed、BetaList、Indie Hackers 等全球新品/需求源寻找信号，但目标不是“翻译海外榜单”，而是找到真正适合中国微信小程序的机会。

## 核心目标

优先寻找：

> **用户会主动搜索、需求足够刚、目标人群足够窄、能产生明确价值，而且值得单独做成产品的小程序。**

V1.2 特别修正了一个常见误区：

> **容易做 ≠ 值得做。**

一个很容易开发的小功能，不应该因为数据简单、合规轻、微信能做，就排在一个商业价值明显更高但需要先验证数据源的机会前面。

---

## V1.2 的三维判断

### 1. Opportunity Score — 值不值得做

这是**第一排序依据**。

100 分：

| 维度 | 权重 |
|---|---:|
| 搜索需求与意图 | **25** |
| 刚需 / 痛点 | **25** |
| 小众切口 / 竞争空位 | **20** |
| 商业价值 / 付费 | 15 |
| 微信原生适配 | 10 |
| 产品杠杆 | 5 |

也就是说：

**搜索 + 刚需 + 小众 = 70%**

这就是本 Skill 的核心偏好。

### 2. Readiness Score — 现在能不能做

单独判断：

- 中国数据/API
- 微信能力
- 合规/隐私
- 第三方平台依赖
- MVP 实现复杂度

Readiness 低，不代表机会差。

例如：

```text
PC 整机值不值
Opportunity: 90
Readiness: 55

结论：
高价值机会，但先验证国内实时配件价格数据源。
```

而不是把它粗暴改成 79 分。

### 3. Confidence — 我们有多确定

判断证据强度：

- 真实问题证据
- 搜索证据
- 付费证据
- 多源独立佐证

---

## 为什么“高频搜索”非常重要

这里的“高频”不是要求同一个用户每天使用。

Skill 会区分：

- **Market Search Frequency**：整个目标市场多久有人搜索这个问题；
- **User Trigger Frequency**：单个用户多久遇到一次；
- **Search Intent Strength**：搜的时候是不是马上要解决。

例如：

- “房产照片美化”可能单个中介频繁遇到；
- “域名到期提醒”单个用户频率低，但 B2B 避损价值很高；
- “AI 随机人格测试”可能传播强，但不一定有持续主动搜索需求。

### 关键词数据绝不编造

如果没有真实 ASO / 微信 / 百度 / 关键词工具：

Skill 只能写：

```text
Search Hypothesis: High / Medium / Low
ASO真实数据：未验证
```

不能伪造：

- Popularity
- Difficulty
- 微信指数
- 搜索量

而且 **Top 3 必须附真实关键词验证任务**。

---

## 什么叫“刚需”

优先寻找“不解决就会有明显代价”的问题：

- 损失收入
- 错过成交/机会
- 花更多钱
- 浪费大量时间
- 重复人工操作
- 容易出错
- 有截止时间
- 用户已经在用 Excel、截图、提醒、人工服务、复杂 SaaS 凑合解决

“挺方便”“挺好玩”“AI 很酷”不算刚需。

---

## 什么叫“小众”

小众不是没人用。

理想状态是：

> **人群具体、问题很痛、巨头不愿专门深做。**

例如：

- 房产中介
- 眼镜店
- 项目经理
- 外贸营销代理商
- 老师
- 站长
- 聚餐/旅行分账
- 招投标/审阅流程

避免：

- 所有人都需要的泛工具
- 大型社交
- Marketplace
- 内容平台
- 巨头核心能力平替

---

## Product vs Feature Test

V1.2 新增“这是产品还是功能？”检查。

如果一个方向：

- 一年只用一两次；
- 不解决也没什么损失；
- Office/WPS/微信已经差不多能做；
- 用户不愿单独付钱；
- 几乎没人主动搜索；
- 没有扩展路径；

那么即使它只要一天就能开发出来，也不能排高。

---

## 14 天 Rolling Candidate Pool

旧版本容易出现：

> 昨天的冠军，因为今天来了十个新品，就消失了。

V1.2 改成：

```text
Fresh Pool：24–72h 新品
        ↓
Rolling Pool：最近 14 天候选
        ↓
Champion Board：当前最强 Top 20
        ↓
新产品挑战旧冠军
        ↓
Top 10 Overall
```

所以输出不再是：

**“今天最新的 10 个产品”**

而是：

**“当前最值得做的 10 个机会”。**

同一赛道多个产品会聚合成一个机会主题，例如：

```text
多个虚拟软装/房产修图工具
→ 房源照片 AI 美化
```

不会用 5 个相似海外产品占 5 个 Top 10 名额。

---

## 推荐状态

最终不再只有一个混合分数。

### 🔥 BUILD NOW

- Opportunity ≥ 85
- Readiness ≥ 70
- Confidence ≥ 60
- 关键搜索假设已经有足够验证

### 🧪 VALIDATE BLOCKER

Opportunity ≥ 85，但：

- 数据/API 未验证
- 搜索量未验证
- 微信能力未验证
- 平台依赖需要确认

这是：

> **好机会，先解决一个阻塞项。**

### ✅ VALIDATE

Opportunity 75–84。

### 👀 WATCH

Opportunity 65–74。

### ❌ REJECT

Opportunity <65 或存在无法接受的硬红线。

---

## 数据源

| Source | Purpose |
|---|---|
| Product Hunt | 新产品发现 |
| Hacker News / Show HN | 新产品 |
| Ask HN | 用户问题/痛点 |
| GitHub | 新开源产品/工具 |
| Neeed | 小型 SaaS/工具 |
| BetaList | 早期产品 |
| Indie Hackers | 独立开发者信号 |
| Reddit | 可选需求验证 |
| G2 | 可选竞品/付费验证 |

Product Hunt：

- 有 `PRODUCTHUNT_TOKEN` → 官方 API
- 无 Token 但能正常浏览 → Public Web fallback
- fallback 必须明确标记，不冒充 API

GitHub：

- 官方 API / Connector first
- `GITHUB_TOKEN` 只在限流/高频任务需要时请求

---

## Evidence First

所有关键事实必须标记为：

- **Observed**：官方/一手看到
- **Proxy**：Stars、Votes、评论等间接信号
- **Estimate**：模型判断
- **Unknown**：没有可靠数据

禁止：

```text
300 Product Hunt votes = 月收入 3 万
5000 GitHub stars = 5000 付费用户
100 reviews = 100 活跃客户
```

---

## AI 原则

AI 不是默认卖点。

只有 AI 明显改善：

- 图片/音频/文本理解
- 自动化
- 质量
- 个性化
- 人工成本

才进入核心。

判断：

> **去掉 AI 后，核心体验是否明显变差？**

如果否，AI 就是辅助或不需要。

---

## 标准运行流程

```text
多源抓新品
    ↓
Fresh Pool
    ↓
合并上次 Rolling Pool
    ↓
跨源去重
    ↓
按“机会主题”聚类
    ↓
搜索 / 刚需 / 小众 / 付费证据
    ↓
Opportunity Score
    ↓
Readiness Score
    ↓
Confidence
    ↓
Top 10 Overall
    ↓
Top 3 Mini PRD
```

---

## Top 10 输出

每个机会至少包含：

- 机会主题
- 支撑海外产品
- 中文核心搜索词
- 搜索频率状态
- 刚需理由
- 小众目标人群
- 不解决的代价
- 付费验证
- Opportunity Score
- Readiness Score
- Confidence
- Recommendation
- 最大阻塞项

## Top 3 Mini PRD

额外包含：

- 精确 JTBD
- 搜索时刻
- 核心词 + 长尾词
- 真实关键词验证任务
- 当前替代方案
- P0 MVP
- 微信入口优势
- 中国数据/API
- 商业模式
- AI 必要性
- Readiness 阻塞
- 最低成本验证
- Kill Criteria

---

## 快速使用

### 支持 Skill 目录的 Agent

导入整个仓库。

调用：

```text
使用 xiaokangxxs-miniprogram-scout，
结合最近 14 天候选池和今天新产品，
找当前最值得做的微信小程序 Top 10。
重点优先：高频搜索、刚需、小众。
```

### 不支持 Skill 目录

直接导入：

`UNIVERSAL_SINGLE_FILE.md`

---

## 目录

```text
SKILL.md
UNIVERSAL_SINGLE_FILE.md
README.md
VERSION
CHANGELOG.md
LICENSE
ATTRIBUTION.md

references/
  master_prompt_v3_3.md
  scoring_model.md
  rolling_candidate_pool.md
  china_feasibility_gate.md
  evidence_rules.md
  source_registry.md
  output_schema.md
  auth_and_secrets.md

assets/
  report_template.md
  source_credentials.example.yaml

docs/
  EXAMPLE_REPORT.md

evals/
  test_cases.md
```

---

## Security

真实 Token/API Key 永远不要提交进仓库。

推荐：

```text
PRODUCTHUNT_TOKEN
GITHUB_TOKEN
```

通过 Agent Secret Store / 环境变量提供。

---

## License & Attribution

MIT License.

```text
Copyright (c) 2026 xiaokangxxs
```

二次开发/公开分享建议注明：

```text
Based on xiaokangxxs-miniprogram-scout by xiaokangxxs.
Source: github.com/xiaokangxxs/xiaokangxxs-miniprogram-scout
```

---

## Disclaimer

这个 Skill 用来提高产品筛选质量，不保证任何项目一定盈利。

**搜索假设不是搜索量事实；评分不是市场事实；最终上线前仍需真实关键词、用户、数据、合规和付费验证。**
