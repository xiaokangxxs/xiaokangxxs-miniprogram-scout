# WorkBuddy 上传前检查

## 必须一致

- `.codebuddy-plugin/plugin.json.agentName`
- `.codebuddy-plugin/plugin.json.teamInfo.leadAgent`
- `settings.json.agent`
- 团长 Agent frontmatter 的 `name`

当前统一为：

`wechat-opportunity-scout-team-lead`

## 当前结构

- Expert Type：`team`
- 团长：1
- 成员：7
- 共享 Skill：1
- Quick Prompts：3
- Tags：3
- 头像：512×512 PNG

## 上传前

1. 运行 `npm run sync:workbuddy`
2. 运行 `npm run validate:workbuddy`
3. 运行 `npm run scan:secrets`
4. 运行 `npm run build:workbuddy`
5. 使用 `dist/` 下生成的 ZIP 上传 WorkBuddy

## author.email

仓库默认：

`xiaokangxxs@users.noreply.github.com`

如果 WorkBuddy 审核要求真实可收件邮箱，请在正式上传/发布前改为你自己的联系邮箱。

## 不要提交

- API Token / Cookie
- 私有候选池
- 用户隐私数据
- 带真实凭证的截图


## v1.2 / v1.5 checks

- WorkBuddy Expert Team version: 1.2.0
- 1 lead + 7 specialist members
- Contrarian Reviewer present
- Shared Skill version follows root VERSION
- Shared references have no drift
- Shared Rolling Pool data/schema have no drift
- Public Rolling Pool must not contain user-private data or secrets
