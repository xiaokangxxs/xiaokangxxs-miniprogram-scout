# xiaokangxxs-miniprogram-scout

> Global Product → China-Feasible WeChat Mini Program Scout

**Version: 1.1.0**

`xiaokangxxs-miniprogram-scout` 是一个面向任意 Agent 的通用 Skill。它不是简单把 Product Hunt 榜单翻译成中文，而是从全球新品与真实需求信号中发现机会，经过多源去重、证据分级、商业验证、中国落地门槛和微信能力校验后，把真正值得做的方向转化为微信小程序需求。

它重点回答一个问题：

> **“这个海外产品为什么值得在中国重新做一次，而且为什么应该做成微信小程序？”**

---

## 为什么需要这个 Skill

单看 Product Hunt、GitHub Stars 或 Hacker News 热度，很容易得到错误结论：

- 热门产品可能只是开发者基础设施，不适合普通微信用户；
- 海外需求成立，不代表中国有可用的数据源；
- 有网页/API 能力，不代表微信小程序端可以直接实现；
- 点赞、Stars、评论数不是收入；
- “加一个 AI”不等于产品成立；
- 国外订阅产品存在，不等于国内用户愿意为同一形态付费；
- 某个方向看起来新，不等于用户会主动搜索它。

因此，本 Skill 把“发现新品”和“判断是否值得做成中国微信小程序”拆成两个独立问题。

---

## 核心工作流

```text
全球产品/需求信号
        │
        ▼
Product Hunt / Hacker News / Neeed / GitHub
BetaList / Indie Hackers / 可选 Reddit / G2
        │
        ▼
标准化 + 跨来源去重
        │
        ▼
证据补全
Observed / Proxy / Estimate / Unknown
        │
        ▼
专业产品机会评分（Raw Score / 100）
        │
        ▼
China Feasibility Gate
中国数据 / 微信能力 / 合规 / 平台依赖
        │
        ▼
Effective Score
        │
        ├── < 60   淘汰/换产品形态
        ├── 60–69 观察
        ├── 70–79 值得验证
        └── 80+   优先做
        │
        ▼
Top 10 微信小程序机会
        │
        ▼
Top 3 Mini PRD
```

---

## 默认数据源

| 数据源 | 用途 | 凭证策略 |
|---|---|---|
| Product Hunt | 当日新品发现 | 官方 API 优先；需要 `PRODUCTHUNT_TOKEN`；无 Token 但有浏览器时允许公开网页降级模式 |
| Hacker News | Show HN 新品、Ask HN 痛点 | 官方 API，无需 Token |
| Neeed Directory | 小型 SaaS / 工具新品 | API/RSS，运行时验证可用性 |
| GitHub | 新项目、开源趋势 | REST Search API 优先；Token 可选，限流时再请求 |
| BetaList | 早期创业产品 | RSS，运行时验证 |
| Indie Hackers | 独立开发者产品信号 | 第三方 RSS，仅作为辅助信号 |
| Reddit | 用户痛点、需求验证 | 可选；仅在合规 API 权限可用时启用 |
| G2 | 竞品、评论、商业验证 | 可选；按账户/订阅权限启用 |

Skill 不会因为某个数据源不可用就伪造数据。不可用的数据源会被明确标记为 `pending_auth`、`blocked`、`rate_limited`、`ok_fallback` 等状态，然后继续处理其他来源。

---

## Token / API Key 怎么处理

Skill **不会要求把真实 Token 写进仓库**。

推荐使用 Agent 的 Secret Store、环境变量或安全凭证注入：

```text
PRODUCTHUNT_TOKEN=<your token>
GITHUB_TOKEN=<optional>
```

如果缺少必须的 Token，Agent 应主动告诉用户：

1. 为什么需要；
2. 去哪里申请；
3. 用什么环境变量名提供；
4. 不要把 Token 写进 `SKILL.md`、README、示例配置或 Git 历史。

仓库内的 `assets/source_credentials.example.yaml` 仅包含占位符。

详见：`references/auth_and_secrets.md`

---

## Product Hunt 的双通道策略

V1.1 增加了 Product Hunt 的双通道：

### 1. API Mode

优先方式。适合支持 HTTP/API 调用并能安全注入 `PRODUCTHUNT_TOKEN` 的 Agent。

### 2. Public Web Fallback

如果没有 Token，但 Agent 有正常浏览能力，可以读取公开 Launch 页面做**有限发现**。

这时必须明确标记：

```text
source_status = ok_fallback
source_mode   = public_web
```

并说明 API 独有字段、完整性和排序一致性可能无法保证。

**禁止把 Public Web 结果伪装成 API 返回。**

---

## GitHub 数据策略

GitHub 不依赖普通搜索引擎来做“今日新仓库榜”。

只要 Agent 具备 HTTP/API 能力，就应优先使用官方 REST Search API，例如按：

- `created:`
- `pushed:`
- `stars:`
- language / topic

筛选新项目。

无 Token 可低配额运行；达到限流后再提示用户配置 `GITHUB_TOKEN`。

---

## Evidence First：证据分级

任何关键结论都必须归为以下四种之一：

| 类型 | 含义 | 示例 |
|---|---|---|
| **Observed** | 官方页面/API/公开数据直接看到 | 官方价格、Product Hunt 排名、GitHub Stars |
| **Proxy** | 间接信号 | 评论数、Votes、Stars、Review 数量 |
| **Estimate** | 模型基于证据做的判断 | 中国付费意愿可能中等、MVP 约 2–4 周 |
| **Unknown** | 无可靠证据 | 未获得真实收入、未接入 ASO 工具 |

尤其禁止：

```text
Product Hunt 300 votes ≠ 月收入 3 万
GitHub 5k stars       ≠ 5k 付费用户
G2 100 reviews        ≠ 100 个活跃客户
```

ASO Popularity / Difficulty、微信指数、下载量、收入等如果没有真实数据工具，就必须写 `Unknown`，不能生成“看起来像真的”数字。

详见：`references/evidence_rules.md`

---

## 100 分机会评分

Raw Opportunity Score 仍保持 100 分制，用于判断“产品本身是不是好机会”。

核心维度包括：

- 搜索/发现意图
- 用户痛点强度
- 已有付费验证
- 微信小程序形态匹配度
- 商业化能力
- 中国市场竞争空位
- MVP 可行性
- AI / 自动化杠杆

具体权重以 `references/scoring_model.md` 为准。

### 为什么 Raw Score 还不够

一个海外产品可能 Raw Score = 88，但如果它必须依赖一个中国无法合法、稳定获得的数据源，就不应该被直接判定为“优先做”。

因此 V1.1 增加了 `Effective Score`。

---

## China Feasibility Gate

每个进入正式筛选的候选都必须额外经过四个门槛：

### 1. Data Dependency

中国环境需要的数据/API 是否可获得？

例如：

- 公开数据：GREEN
- 需要进一步确认平台接口：YELLOW
- 必须违规爬取或没有可持续数据源：RED

### 2. WeChat Capability

核心体验是否适合微信小程序？

例如：

- 拍照、上传、OCR、轻量表单：通常 GREEN
- 后台持续运行、系统级能力：需要服务端拆分或 POC
- 小程序能力无法承担核心价值：RED

### 3. Compliance

是否涉及中国法律、行业许可、隐私、生物信息、医疗、金融等额外要求？

### 4. Platform Dependency

产品是否过度依赖淘宝、京东、抖音、小红书、微信外部平台的非稳定接口或平台政策？

### Score Cap

V1.1 默认规则：

- 存在关键未解决 `YELLOW`：通常最高只能到 **79**；
- 核心数据源或微信能力为 `RED`：通常最高 **59**，或建议改成 Web/App/Desktop；
- 合规不可行：直接淘汰。

详见：`references/china_feasibility_gate.md`

---

## AI 原则

Skill 不会强行给所有产品加 AI。

只有 AI 能显著改善以下至少一项时，才认为 AI 有必要：

- 质量
- 速度
- 成本
- 个性化
- 自动化
- 对图片、文本、语音等非结构化输入的理解

判断方式很简单：

> **去掉 AI 后，这个产品的核心体验是否明显变差？**

如果答案是否定的，就把 AI 标记为 `optional` 或 `unnecessary`。

---

## 什么产品会被优先筛出来

更偏好：

- 单一任务明确；
- 用户会主动搜索；
- 小而美；
- 能明显省时间、省钱、提高收入或降低损失；
- 已经存在付费替代品；
- 在微信里“用完即走”比独立 App 更自然；
- 1–3 个核心页面就可以验证价值；
- 不需要先拥有百万用户才能成立。

例如：

```text
“帮房产中介 30 秒处理一张房源照片”
```

通常比：

```text
“做一个 AI 驱动的房地产超级平台”
```

更符合本 Skill 的目标。

---

## 什么产品会被降级或淘汰

典型包括：

- 大型社交网络；
- 双边 marketplace；
- 依赖强网络效应；
- 巨头已经完全覆盖且没有细分切口；
- 必须拥有大量专有数据才能启动；
- 依赖违规/不稳定爬虫；
- 微信端无法实现核心能力；
- 只是“XX + AI”概念包装；
- 没有明确付费对象或价值闭环；
- 只有榜单热度，没有真实问题证据。

---

## 最终输出

一次标准运行至少返回：

1. 数据源状态表；
2. 抓取数量 → 去重数量 → 正式评分数量；
3. China Feasibility Gate 统计；
4. Top 10 微信小程序机会；
5. Top 3 Mini PRD；
6. 被淘汰/降级项目及原因；
7. 尚未验证的数据、微信能力和合规项。

### Top 3 Mini PRD 包含

- 中国用户定位
- 单一 JTBD
- 触发场景 / 用户搜索词
- 3 个小程序名称候选
- 一句话卖点
- P0 MVP
- 页面与核心流程
- 输入 / 输出 / 数据依赖
- 中国数据源状态
- 微信能力验证项
- 商业模式
- AI 必要性
- 合规与平台风险
- 最便宜验证方法
- Kill Criteria

---

## 快速开始

### Agent 支持 Skill 目录

把整个目录放到 Agent 的 Skill / Rules / Knowledge 目录，然后让 Agent 加载：

```text
xiaokangxxs-miniprogram-scout/
```

运行示例：

```text
使用 xiaokangxxs-miniprogram-scout，获取今天全球新品和需求信号，
筛选最适合中国微信小程序的 Top 10，给 Top 3 生成 Mini PRD。
严格区分 Observed / Proxy / Estimate / Unknown。
```

### Agent 不支持 Skill 目录

直接导入：

```text
UNIVERSAL_SINGLE_FILE.md
```

作为 System Prompt / Project Instruction / Knowledge File 使用。

---

## 常用调用方式

### 今日机会榜

```text
使用 xiaokangxxs-miniprogram-scout 跑今天的数据，给我 Top 10。
```

### 只找高付费方向

```text
只保留明确存在付费竞品，而且用户可以通过它赚钱、省钱或降低损失的方向。
```

### 只找个人开发者 MVP

```text
只保留一个开发者 2–4 周可以做出 MVP 的方向，排除重运营和强网络效应。
```

### 分析指定海外产品

```text
用 xiaokangxxs-miniprogram-scout 分析这个产品是否值得转成中国微信小程序：<URL>
```

### 批量分析现有榜单

```text
读取我提供的 JSON/CSV/HTML 产品榜单，跳过数据抓取，从去重和机会评分开始。
```

---

## 目录结构

```text
xiaokangxxs-miniprogram-scout/
├── SKILL.md
├── README.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── SECURITY.md
├── VERSION
├── .gitignore
├── UNIVERSAL_SINGLE_FILE.md
├── docs/
│   └── EXAMPLE_REPORT.md
├── references/
│   ├── auth_and_secrets.md
│   ├── source_registry.md
│   ├── evidence_rules.md
│   ├── china_feasibility_gate.md
│   ├── scoring_model.md
│   ├── output_schema.md
│   └── master_prompt_v3_2.md
├── assets/
│   ├── source_credentials.example.yaml
│   └── report_template.md
└── evals/
    └── test_cases.md
```

---

## Agent 兼容设计

这个仓库故意不绑定单一 Agent 产品。

核心规则全部是 Markdown：

- 支持标准 Skill 目录的 Agent：读取 `SKILL.md` + `references/`；
- 只支持单文件 Instruction 的 Agent：使用 `UNIVERSAL_SINGLE_FILE.md`；
- 支持工具调用的 Agent：按 source registry 调 API；
- 只能联网浏览的 Agent：允许有限 fallback，并强制披露数据模式；
- 完全离线的 Agent：用户提供 JSON/CSV/HTML 后从 Phase 3 开始。

---

## 安全原则

- 不提交真实 Token/API Key；
- 不回显 Secret；
- 不把用户 Token 写进生成的报告；
- 不绕过明确的访问限制；
- 不使用“能爬到”替代“允许使用”；
- 第三方服务条款在正式运行前应再次确认；
- 不把模型估计伪装成真实商业数据。

详见 `SECURITY.md`。

---

## 示例

仓库提供一份**脱敏示例报告**：

`docs/EXAMPLE_REPORT.md`

它用于说明报告结构与判断方式，**不是固定榜单，也不代表运行当天的实时数据**。

---

## 版本

当前版本：**v1.1.0**

主要变化：

- Product Hunt API + public-web fallback；
- GitHub REST Search API first；
- 新增 China Feasibility Gate；
- 新增 Raw Score → Effective Score；
- 增加中国数据源、微信能力、合规和平台依赖判断；
- Master Prompt 升级到 V3.2；
- evals 扩展至 12 个测试场景。

完整记录见 `CHANGELOG.md`。

---

## Contributing

欢迎提交：

- 新的数据源适配；
- 更可靠的中国数据源验证方法；
- 微信小程序能力约束更新；
- 评分模型改进；
- Agent 兼容性适配；
- eval 测试案例。

提交前请阅读 `CONTRIBUTING.md`。

---

## License & Attribution

本项目采用 **MIT License** 开源。你可以自由使用、修改、分发和商用。

按照 MIT License，复制或分发本项目或其重要部分时，需要保留版权声明与许可证文本：

```text
Copyright (c) 2026 xiaokangxxs
```

如果你基于本项目进行二次开发、打包、分发或公开分享，推荐同时在 README、文档或 Credits 中注明来源：

```text
Based on xiaokangxxs-miniprogram-scout by xiaokangxxs.
Source: github.com/xiaokangxxs/xiaokangxxs-miniprogram-scout
```

详见 `LICENSE` 与 `ATTRIBUTION.md`。

---

## Disclaimer

本项目用于产品研究、机会筛选和需求分析，不保证任何方向一定盈利，也不替代法律、平台政策、数据授权、市场调研或真实用户验证。

**榜单热度不是商业结果；模型评分不是市场事实；最终上线前必须完成真实验证。**
