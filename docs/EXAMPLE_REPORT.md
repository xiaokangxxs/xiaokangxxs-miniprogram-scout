# Example Report — xiaokangxxs-miniprogram-scout

> This is a **sanitized structure example**, not a live leaderboard. Product names and scores are illustrative. Run the Skill to obtain current results.

## 1. Source status

| Source | Status | Mode | Notes |
|---|---|---|---|
| Product Hunt | ok_fallback | public_web | API token not available in host environment |
| Hacker News | ok | official_api | Show HN + Ask HN |
| Neeed | ok | api/rss | newest products |
| GitHub | ok | official_api | unauthenticated, lower quota |
| BetaList | ok | rss | latest launches |
| Reddit | skipped | optional | approved API access not configured |

## 2. Pipeline counts

```text
Raw records:        84
After dedup:        61
Serious candidates: 18
Scored:             12
Top opportunities:  10
Mini PRDs:           3
```

## 3. Example ranking

| Rank | Overseas signal | Mini Program direction | Raw | Gate | Effective | Decision |
|---:|---|---|---:|---|---:|---|
| 1 | AI property photo tool | 房源照片 AI 美化 | 89 | GREEN | 89 | 优先做 |
| 2 | Domain expiry monitor | 域名/SSL 到期管家 | 87 | GREEN | 87 | 优先做 |
| 3 | Receipt splitter | 小票 AA 助手 | 86 | GREEN | 86 | 优先做 |
| 4 | PC price checker | 整机值不值 | 84 | YELLOW | 79 | 值得验证 |

为什么第 4 名被封顶到 79：

- 海外需求成立；
- Raw Score 很高；
- 但中国实时硬件价格数据源尚未验证；
- 因此 `data_dependency = YELLOW`；
- 在数据源验证通过之前，不允许直接标记为“优先做”。

## 4. Example Mini PRD

### 小程序：小票 AA 助手

**JTBD**  
聚餐结束后，我想拍一张小票，快速知道每个人应该付多少钱，而不是手工逐项计算。

**触发场景**  
多人聚餐、旅行、团购、公司聚会。

**搜索意图（Estimate）**  
小票分账 / 聚餐 AA / 拍照 AA。

> 未接入真实关键词工具时，不输出伪造的 ASO Popularity / Difficulty。

**P0 MVP**

1. 拍照/相册上传小票；
2. OCR 提取商品、价格、税费/服务费；
3. 点击商品分配给参与者；
4. 自动计算每个人金额；
5. 生成微信内可分享结果。

**AI necessity**  
OCR / Vision：Required。  
Generative AI：Optional。

**China Feasibility Gate**

- data_dependency: GREEN
- wechat_capability: GREEN
- compliance: GREEN/YELLOW（注意账单图片和隐私）
- platform_dependency: GREEN

**Monetization**

- 免费基础分账；
- 高频 OCR credits；
- 旅行账本 / 报销归档高级功能。

**Kill Criteria**

如果真实小票 OCR 在目标餐饮场景准确率长期不足，且人工修正成本接近手算，则停止继续开发。

## 5. Evidence disclosure

- `Observed`: 官方产品功能、公开价格、公开榜单数据；
- `Proxy`: votes / stars / comments / reviews；
- `Estimate`: 小程序转化评分、中国付费判断；
- `Unknown`: 未接入工具的 ASO、真实收入、真实下载量。
