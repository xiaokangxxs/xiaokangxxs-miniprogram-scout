# xiaokangxxs-miniprogram-scout v1.2.0

## Theme

**值得做 × 高频搜索 × 刚需 × 小众**

V1.2.0 修正了 V1.1 里“容易落地的工具可能被排得过高”的问题。

## Key changes

- 排名核心从 Effective Score 改为三维模型：
  - Opportunity Score：值不值得做
  - Readiness Score：现在能不能做
  - Confidence：证据有多强
- Opportunity 明确把“搜索需求、刚需、小众切口”放到最高权重。
- China Feasibility Gate 不再给普通 YELLOW 机会统一封顶到 79；它成为 Readiness。
- 新增 Search Hard Gates：没有自然中文搜索词、主要依赖推荐发现、低频低价值等会直接降级。
- 新增 Product vs Feature Test，避免“好实现的小功能”挤掉真正的产品机会。
- 新增 14 天 Rolling Candidate Pool + Champion Board；每天新品挑战旧冠军，而不是每天重置榜单。
- 同一赛道的多个海外产品聚合成一个机会主题，避免 Top 10 被同类产品刷屏。
- Top 3 在没有真实关键词工具时，必须附“关键词真实验证”任务，不能把“高频搜索”写成事实。

## Recommendation labels

- 🔥 BUILD NOW
- 🧪 VALIDATE BLOCKER
- ✅ VALIDATE
- 👀 WATCH
- ❌ REJECT
