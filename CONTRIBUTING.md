# Contributing

感谢你参与 `xiaokangxxs-miniprogram-scout`。

这个项目最欢迎的贡献不是“再加一个分数”，而是能让 Agent **少做一次错误的产品决策**。

## 适合贡献的内容

- 新的数据源 / 更可靠的官方 API 或 Feed；
- 中国本地关键词、需求、竞品验证方法；
- 微信小程序 / 小游戏官方规则更新；
- Product Form Router 改进；
- Mini Program / Mini Game 评分纠错；
- Agent 安装/兼容适配；
- Evidence 规则改进；
- eval / regression case；
- 文档与翻译。

## 开发前

无需安装依赖。

建议使用 Node.js 18+：

```bash
npm run check
```

其中：

```bash
npm run validate
npm run scan:secrets
```

## 新数据源贡献要求

至少说明：

1. 官方 / 非官方；
2. API / RSS / Public Web / Connector；
3. 是否需要认证；
4. rate limit / pricing / entitlement；
5. 商业使用或条款风险；
6. 能提供哪些字段；
7. 失败时如何 fallback；
8. 它属于 Product、Demand、Game、Keyword 还是 Validation 信号；
9. 这些数据应该被标成 Observed 还是 Proxy。

不要因为“能抓到”就认为“适合加入”。

## 修改评分模型

如果改权重或 Hard Gate，请同时给出：

- 当前会误判的案例；
- 修改后预期行为；
- 至少一个回归测试；
- 为什么不会破坏另一类产品。

Mini Program 和 Mini Game 是两套独立模型，不要用一套规则同时改两边。

## 修改微信规则

涉及：

- 类目；
- 资质；
- 备案；
- 隐私；
- 支付；
- 订阅消息；
- 广告；
- 小游戏出版/资格；
- 包体/性能；

请优先引用当前微信官方文档或公众平台后台事实。

不要把旧博客文章中的固定限制写成永久规则。

## 修改核心 Skill 流程

需要同步检查：

- `SKILL.md`
- `UNIVERSAL_SINGLE_FILE.md`
- `references/`
- `evals/test_cases.md`
- `test-prompts.json`
- `README.md`
- `README.en.md`
- `CHANGELOG.md`

避免目录版、单文件版、README 三套逻辑漂移。

## Pull Request

仓库已经提供 PR Template。

请确保：

- Evidence 类型清晰；
- 不把 votes / stars / reviews 当收入；
- 没有伪造 ASO / 搜索量；
- 没有真实 Secret；
- 行为修改有测试；
- `npm run check` 通过。

## Security

不要把真实 API Key / Token / Cookie / 用户私密数据放进：

- Issue
- PR
- Commit
- Screenshot
- Eval
- Example report

详见 `SECURITY.md`。

## Style

- 优先写清楚“为什么”，再写规则；
- 能拆成可验证条件就不要写模糊形容词；
- 不把当前日期/平台的易变限制当永久事实；
- 不为“显得智能”强行加入 AI；
- 不为“显得完整”强行保留弱机会。
