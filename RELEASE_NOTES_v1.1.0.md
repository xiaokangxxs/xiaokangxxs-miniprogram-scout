# xiaokangxxs-miniprogram-scout v1.1.0

首个适合公开发布的稳定版本。

## Highlights

- 多源产品发现：Product Hunt、Hacker News、Neeed、GitHub、BetaList、Indie Hackers；可选 Reddit / G2。
- Product Hunt 支持官方 API 与公开网页 fallback，并明确区分数据模式。
- GitHub 默认优先官方 REST Search API。
- 新增 China Feasibility Gate：
  - 中国数据/API 可获得性
  - 微信小程序能力适配
  - 中国合规风险
  - 第三方平台依赖
- 引入 Raw Score → Effective Score，避免“海外好产品”被直接误判为“中国微信小程序好机会”。
- 证据统一分为 Observed / Proxy / Estimate / Unknown。
- Top 10 机会榜 + Top 3 Mini PRD。
- AI 不作为默认卖点；仅在显著改善体验时判为必要。
- 新增 12 组 eval 场景、公开安全规范、贡献说明与脱敏示例报告。

## Security

- 仓库不包含真实 Product Hunt Token、GitHub Token 或其他用户密钥。
- `.gitignore` 默认忽略常见本地 Secret/环境变量文件。
- 示例配置仅使用占位符。

## Upgrade notes

从早期版本升级时，建议重点阅读：

- `references/china_feasibility_gate.md`
- `references/scoring_model.md`
- `references/source_registry.md`
- `references/master_prompt_v3_2.md`

完整变更见 `CHANGELOG.md`。
