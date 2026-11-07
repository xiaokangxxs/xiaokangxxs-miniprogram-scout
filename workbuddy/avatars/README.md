# Avatars

WorkBuddy 成品包需要 512×512 PNG 头像。

为避免仓库长期维护二进制头像副本，本目录中的 PNG 由脚本生成，不直接提交：

```bash
npm run generate:workbuddy-avatars
```

配置来源：

`workbuddy/avatar-specs.json`

正式上传 WorkBuddy 时使用：

```bash
npm run build:workbuddy
```

构建脚本会在临时打包目录自动生成：
- team.png
- team-lead.png
- global-product-scout.png
- game-mechanic-scout.png
- china-demand-analyst.png
- mini-program-strategist.png
- mini-game-designer.png
- wechat-readiness-auditor.png

无需安装图片处理依赖。
