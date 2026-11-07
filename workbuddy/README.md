# 微信机会侦察专家团 / WeChat Opportunity Scout Team

这是 `xiaokangxxs-miniprogram-scout` 的 **WorkBuddy 专家团版本**。

它不是把一个 Skill 简单复制成多个“人设”，而是把机会侦察与产品化流程拆成 **1 个团长 + 6 个专业成员 + 1 个共享 Skill**。既能跑全球日报，也能接收用户自己的需求/GitHub/竞品素材，先做 JTBD、Reframe 和多方案生成，再协作评估。

## 团队结构

| Agent | 中文角色 | 主要职责 |
|---|---|---|
| `wechat-opportunity-scout-team-lead` | 凌策 · 微信机会侦察总策划 | 拆任务、调度、冲突裁决、最终榜单 |
| `global-product-scout` | 闻新 · 全球新品侦察员 | Product Hunt、HN、GitHub、BetaList 等产品信号 |
| `game-mechanic-scout` | 弈野 · 游戏机制侦察员 | itch.io、Poki、CrazyGames、Steam 等玩法信号 |
| `china-demand-analyst` | 知需 · 中国需求分析师 | 搜索假设、刚需、小众、商业化、第一批用户 |
| `mini-program-strategist` | 程策 · 微信小程序策略师 | 小程序评分、P0、渠道、验证 |
| `mini-game-designer` | 游策 · 微信小游戏玩法设计师 | Hook、复玩、社交、变现、原型 |
| `wechat-readiness-auditor` | 守界 · 微信合规与证据审计师 | 类目/资质/隐私/支付/广告/IP/性能/证据 |

## v1.1 专家团新增 User Seed 产品化

除了全量日报，团长现在会识别：

```text
用户需求 / GitHub / 竞品 / 反馈
        ↓
JTBD
        ↓
KEEP / REFRAME / SPLIT / REJECT
        ↓
3–5 个 Product Concepts
        ↓
按形态分发给小程序策略师 / 小游戏设计师
        ↓
合规与证据审计
        ↓
团长推荐一个最值得验证的方向
```

这种任务不会无意义地召唤全球新品和游戏侦察员，除非需要额外市场证据。


## 默认协作流程

```text
全球新品侦察 ───┐
                ├─ Phase 1：并行发现
游戏机制侦察 ───┘
        ↓
中国需求分析
        ↓
小程序策略 ─────┐
                ├─ Phase 3：双引擎评分
小游戏设计 ─────┘
        ↓
微信合规 + Evidence 审计
        ↓
团长裁决
        ↓
Top 10 小程序
Top 10 小游戏
Cross-category Top 5
Top 3 需求/玩法转化
```

## 节省专家团消耗

不是每个问题都召唤全员：

- 单个 SaaS / 工具：产品侦察 + 中国需求 + 小程序策略 + 合规
- 单个游戏：游戏侦察 + 小游戏设计 + 合规
- 只问微信审核：仅合规审计
- 只问搜索/刚需：需求分析 + 小程序策略
- 只要 3 天原型：对应策略成员 + 合规

## 目录

```text
workbuddy/
├── .codebuddy-plugin/
│   └── plugin.json
├── agents/
├── avatars/
├── skills/
│   └── xiaokangxxs-miniprogram-scout/
├── settings.json
├── UPLOAD_CHECKLIST.md
└── README.md
```

## 使用

### 方式 A：直接从本目录创建专家团

在 WorkBuddy 中进入：

`专家·技能·连接器 → 专家 → 我的专家 → 创建专家团`

按平台当前导入能力，上传/选择本目录构建出的专家团 ZIP。

### 方式 B：构建独立 ZIP

仓库提供：

```bash
npm run build:workbuddy
```

输出：

```text
dist/wechat-opportunity-scout-team-workbuddy.zip
```

构建过程会从仓库根目录同步当前最新版 Skill 到专家团包，避免 WorkBuddy 副本与主 Skill 漂移。

## 版本关系

- WorkBuddy Expert Team：`1.1.0`
- Repository / Embedded Scout Skill：跟随根目录 `VERSION`

核心评分逻辑仍由根目录 Skill 维护。WorkBuddy 目录负责**多 Agent 编排**，不重新定义第二套评分体系。

## 维护

主 Skill 更新后执行：

```bash
npm run sync:workbuddy
npm run validate:workbuddy
```

提交 PR 前建议运行：

```bash
npm run check
```
