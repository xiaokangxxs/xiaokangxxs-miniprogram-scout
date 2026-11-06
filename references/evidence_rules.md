# Evidence Rules

Version: 1.1.0

## Four evidence labels

### Observed

Directly retrieved in the current run from an official/primary source or the product's own public page.

Examples:

- Product Hunt daily rank returned by the API.
- A product name/tagline visibly confirmed on a Product Hunt public page fallback.
- GitHub star count returned by GitHub REST API.
- price shown on the product's official pricing page.

Observed describes the **field**, not completeness of the source. A public-web fallback may provide Observed product names while still having incomplete/Unknown API-only metrics.

### Proxy

Indirect signal that can support but not prove business value.

Examples:

- Product Hunt votes/comments.
- GitHub stars/forks.
- number of reviews.
- directory ranking.
- HN score/comments.

Proxy is not revenue, downloads, conversion, retention, or market size.

### Estimate

A model judgment or derived score based on explicit assumptions.

Examples:

- search intent = high.
- raw Mini Program fit score.
- MVP complexity = medium.

Always make assumptions visible.

### Unknown

No reliable evidence found.

Examples:

- monthly revenue not disclosed.
- actual Chinese keyword search volume unavailable.
- retention unknown.
- a required Chinese marketplace API has not been verified.
- a critical WeChat capability/limit has not been checked against current official docs.

Use `Unknown`; do not fill the blank with a plausible-looking number.

## Evidence hierarchy

Prefer:

1. official API / official site / official pricing page;
2. first-party founder/company disclosure;
3. reputable third-party database/review source;
4. community discussion;
5. model inference.

## Fallback provenance

Always preserve source provenance:

- `official_api`
- `official_feed`
- `public_web_fallback`
- `unofficial_feed`
- `user_export`

Do not describe a fallback as API data. Record missing fields/completeness limitations.

## China feasibility evidence

The China Feasibility Gate must also follow evidence discipline.

- `data_dependency=GREEN` requires a concrete plausible source/architecture, not “应该能拿到”.
- `wechat_capability=GREEN` should not be based on remembered platform limits when that capability is critical; verify current official documentation or a POC.
- `compliance=GREEN` must not be used to dismiss obvious sensitive/regulated domains without review.
- `platform_dependency=GREEN` requires a credible fallback or non-fragile dependency.

If evidence is not sufficient, use YELLOW/Unknown rather than optimistic GREEN.

## Cross-source confidence

A product appearing independently across multiple sources increases confidence that it is not a one-off listing artifact, but it still does not prove revenue or retention.

Suggested confidence labels:

- High: first-party product evidence + at least one independent traction/market signal.
- Medium: clear first-party product evidence + one weak proxy signal.
- Low: directory listing only, sparse description, or unverifiable claims.

## No fabricated ASO

Never invent Popularity, Difficulty, WeChat Index, Baidu Index, App Store search volume, keyword competition, download volume, or revenue.

If no real keyword tool was queried, say `ASO真实数据：未验证`.

## No fake competitor income

Do not derive monthly recurring revenue from:

- public price × review count;
- stars × arbitrary conversion rate;
- PH votes × arbitrary ARPU;
- traffic guesses unless the actual tool/data is available and clearly labeled.

## Date discipline

Always keep separate:

- source publication/listing date;
- product launch date when known;
- repository creation/update date;
- fetch date.

A directory's `listed_at` is not automatically the original product launch date.
