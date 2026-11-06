# Contributing

感谢你参与 `xiaokangxxs-miniprogram-scout`。

## 适合贡献的内容

- 新数据源或更稳定的数据获取方式；
- 中国本地数据源验证规则；
- 微信小程序平台能力更新；
- Product Hunt / GitHub / HN 等数据源规则修正；
- 评分模型与 China Feasibility Gate 改进；
- Agent 平台适配；
- eval / regression test；
- 文档、示例和翻译。

## 基本原则

1. 不提交真实 API Key / Token；
2. 不把估计写成事实；
3. 新数据源必须说明是否官方、是否需要凭证、失败时如何降级；
4. 涉及第三方网站时，应优先官方 API/RSS，不鼓励绕过访问限制；
5. 新的评分规则必须解释它解决什么误判；
6. 新的微信能力判断应说明需要官方文档确认还是 POC 验证。

## 修改 Skill 主流程

如果修改 `SKILL.md` 的执行规则，请同步检查：

- `UNIVERSAL_SINGLE_FILE.md`
- `references/`
- `evals/test_cases.md`
- `CHANGELOG.md`

避免目录版和单文件版出现逻辑漂移。

## 安全

不要在 Issue、PR、Commit、截图或示例配置中提交真实 Secret。发现安全问题请先参考 `SECURITY.md`。
