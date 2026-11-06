# Source Registry

Version: 1.1.0  
Last verified: 2026-11-06

Use official APIs/feeds first. If a source changes, prefer its current documentation over this registry.

## 1. Product Hunt — PRIMARY / TWO MODES

Purpose: daily product leaderboard and launch discovery.

### Mode A — Official API (preferred when a token is available)

- API: `https://api.producthunt.com/v2/api/graphql`
- Docs: `https://www.producthunt.com/v2/docs`
- Auth: access token required.
- Suggested secret name: `PRODUCTHUNT_TOKEN`
- Developer token is available for simple scripts according to Product Hunt docs.
- Typical query arguments: `first`, `order`, `postedAfter`, `postedBefore`, `featured`.
- Useful fields: `id`, `name`, `tagline`, `description`, `url`, `website`, `votesCount`, `commentsCount`, `dailyRank`, `featuredAt`, `createdAt`, `topics`.
- Default order: `RANKING` for a date window; use `VOTES` only when explicitly analyzing votes.

Example GraphQL shape (adapt field availability to current docs):

```graphql
query DailyProducts($after: DateTime!, $before: DateTime!) {
  posts(first: 30, order: RANKING, postedAfter: $after, postedBefore: $before) {
    nodes {
      id
      name
      tagline
      description
      url
      website
      votesCount
      commentsCount
      dailyRank
      createdAt
      featuredAt
      topics(first: 10) { nodes { name } }
    }
  }
}
```

HTTP header:

```text
Authorization: Bearer <PRODUCTHUNT_TOKEN>
Content-Type: application/json
```

Product Hunt currently states that its API must not be used for commercial purposes by default; business/commercial use requires contacting Product Hunt. Product Hunt also asks for attribution.

### Mode B — Public-web fallback (when token injection is unavailable)

If the host Agent has a normal browser/search capability but cannot safely inject `PRODUCTHUNT_TOKEN`, it may read the publicly visible Product Hunt Today/Launch pages as a **limited discovery fallback**.

Rules:

- use normal public browsing/search, not bulk crawling or access-control bypass;
- mark `source_type=public_web_fallback` and `source_mode=public_web`;
- only record fields actually visible/verified on the public page;
- metrics not visible are `Unknown`, not guessed;
- do not claim API coverage/completeness;
- if the user specifically requires API-exact ranking/fields, request `PRODUCTHUNT_TOKEN` and use Mode A;
- respect Product Hunt's current terms/robots/access restrictions at runtime.

With a successful public fallback, status is `ok_fallback`, not `pending_auth`. Record `api_auth_available=false` separately.

## 2. Hacker News — PRIMARY / NO KEY

- Official API docs: `https://github.com/HackerNews/API`
- Base: `https://hacker-news.firebaseio.com/v0/`
- Auth: none.
- Product discovery endpoints:
  - `/showstories.json` — newest Show HN IDs, up to documented source limits.
  - `/askstories.json` — Ask HN pain/problem signals.
  - `/topstories.json`, `/beststories.json`, `/newstories.json` — supplemental signals.
  - `/item/<id>.json` — details.

Use Show HN mainly for products. Use Ask HN mainly for pain/problem signals.

Useful fields: `id`, `title`, `url`, `score`, `descendants`, `time`, `text`, `by`.

## 3. Neeed Directory — PRIMARY / NO KEY

- Docs: `https://neeed.directory/docs/api`
- Base: `https://neeed.directory/api/v1`
- Auth: no key/sign-in for read APIs when currently available.
- Useful endpoints may include:
  - `/products?limit=50`
  - `/search?q=<term>&limit=50`
  - `/categories`
  - `/products/{slug}`
- RSS: `https://neeed.directory/feed.xml`
- MCP: `https://neeed.directory/api/mcp`

Useful fields include name, punchline, description, website, category, tags, pricing_model, product_type, featured, listed_at.

Verify endpoint availability at runtime.

## 4. GitHub — PRIMARY / REST API FIRST

- Search docs: `https://docs.github.com/en/rest/search/search`
- Rate-limit docs: `https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api`
- Auth: public data can work without auth; token recommended for repeat/high-volume runs.
- Suggested secret name: `GITHUB_TOKEN`

### Required acquisition preference

When the Agent has HTTP/curl/API capability, use the **official GitHub REST Search API directly** instead of a generic web search engine.

Use generic web search only as a last-resort discovery fallback and label it `public_web_fallback`, because search engines are not reliable for complete `created:` / `pushed:` repository windows.

Example repository query ideas:

```text
created:YYYY-MM-DD..YYYY-MM-DD stars:>=5 archived:false
pushed:>=YYYY-MM-DD stars:>=20 archived:false
```

Recommended REST pattern:

```text
GET https://api.github.com/search/repositories?q=<encoded-query>&sort=stars&order=desc&per_page=30
Accept: application/vnd.github+json
X-GitHub-Api-Version: <current supported version if host uses one>
Authorization: Bearer <GITHUB_TOKEN>   # only when configured
```

Rate-limit behavior:

- unauthenticated general REST requests are currently documented at 60/hour, while authenticated user requests are generally higher;
- search endpoints have their own more restrictive/custom limits;
- inspect `x-ratelimit-*`, `retry-after`, and 403/429 responses;
- back off rather than hammering/retrying;
- request `GITHUB_TOKEN` only when needed for volume or rate limits.

Use stars/forks/activity only as discovery/traction proxies. Inspect README/homepage/product site for product purpose. Exclude libraries/framework internals when looking for end-user products unless a clearly productizable workflow exists.

## 5. BetaList — PRIMARY-OPTIONAL / RSS

- Purpose: early startup/product launches.
- A third-party-monitored RSS feed has previously been observed at:
  `http://feeds.feedburner.com/BetaList`
- Auth: none for RSS.
- Reliability: feed availability/provenance may change; verify at runtime.

Do not claim the feed is an official API. If unavailable, mark the source unavailable rather than scraping around blocks.

## 6. Indie Hackers — PRIMARY-OPTIONAL / UNOFFICIAL FEED

- Purpose: indie product launches and maker discussions.
- Third-party RSS service previously observed: `https://ihrss.io/`
  with feeds such as `/newest`, `/featured`, and top-period feeds.
- Auth: generally none.
- Reliability: unofficial/third-party; verify at runtime and label all results `unofficial_feed`.

If unavailable or stale, skip it. Never represent it as an official Indie Hackers API.

## 7. Reddit — OPTIONAL DEMAND SIGNAL / ACCESS SENSITIVE

- Purpose: user pain, recurring questions, workaround behavior, willingness-to-pay language.
- Official policy: `https://support.reddithelp.com/hc/en-us/articles/14945211791892-Developer-Platform-Accessing-Reddit-Data`
- API/data access may require application/review/approval.
- Commercial use requires the permissions/contract required by current Reddit policy.

Do not bypass API restrictions with scraping. If approved access is unavailable, skip Reddit and disclose the gap.

## 8. G2 — OPTIONAL VALIDATION / SUBSCRIPTION OR ACCESS MAY BE REQUIRED

- Docs: `https://documentation.g2.com/docs/g2-api`
- MCP docs: `https://documentation.g2.com/docs/g2-mcp-server`
- Purpose: product catalog, reviews, competitive intelligence, buyer-intent data where entitled.
- Access: may require an active G2 subscription and specific entitlements.

Use review/market data as validation evidence. Never infer competitor revenue simply from review counts.

## Fallback policy

For each source, prefer:

1. Official API/MCP
2. Official RSS/feed
3. Public page via normal browser/search **when permitted and suitable for limited discovery**
4. Clearly labeled third-party feed when terms/provenance permit
5. User-provided export

Never silently replace a blocked official source with unauthorized scraping.

Every fallback must record `source_mode`, `source_type`, data completeness limitations, and any missing fields.
