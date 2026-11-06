# Source Registry

Version: 1.3.0  
Last reviewed: 2026-11-06

Use official APIs/feeds first. Public-web/third-party sources must be labeled honestly.

# A. Product / Mini Program discovery

## Product Hunt

Primary product-launch source.

- API: https://api.producthunt.com/v2/api/graphql
- Docs: https://www.producthunt.com/v2/docs
- Secret: `PRODUCTHUNT_TOKEN`
- API mode preferred.
- Public-web fallback allowed for limited discovery when safe token injection is unavailable.
- Mark fallback `ok_fallback / public_web`.
- Never fabricate API-only fields.
- Verify current commercial-use terms before production/business use.

## Hacker News

- Official API: https://hacker-news.firebaseio.com/v0/
- Show HN: product discovery.
- Ask HN: pain/problem signals.
- No key.

## Neeed

- Read API/RSS when available.
- Verify endpoint availability at runtime.
- Good for micro-SaaS and narrow tools.

## GitHub

Use official repository search/API/connected GitHub tool first.

Useful discovery concepts:

- `created:`
- `pushed:`
- `stars:`
- topics/language

Stars/forks/activity are Proxy signals, never revenue.

## BetaList

Use current public/RSS launch data when reachable.

## Indie Hackers

Third-party RSS may be used as auxiliary evidence only when current/reachable. Label unofficial.

## Reddit

Optional demand validation only with approved/compliant access.

## G2

Optional competitor/review validation according to available entitlement.

# B. Mini Game discovery

Mini Game scouting needs different sources because Product Hunt alone is not representative of game mechanics.

## itch.io — Primary game-mechanic discovery

Public pages:

- https://itch.io/games/new-and-popular
- https://itch.io/games/new-and-popular/released

Use for:

- new mechanics;
- browser-playable prototypes;
- game-jam/indie experimentation;
- paid-price signals where visible.

Fields such as price/rank are Observed when visible. Popularity is a platform Proxy.

## Poki — Primary browser-game heat reference

- https://poki.com/

Use visible trending/top lists and game pages as Proxy evidence for:

- instantly understandable mechanics;
- mobile/browser suitability;
- replayable casual loops.

Do not treat Poki rank as WeChat Mini Game market size.

## Steam — Trend and monetization reference

Use current Steam public store/search pages and reliable current player/trend sources where accessible.

Useful for:

- newly popular mechanics;
- pricing;
- user-review evidence;
- simulator/idle/roguelike/puzzle trend discovery.

A PC game is not automatically Mini-Game-suitable. Extract only portable core mechanics.

## CrazyGames — Optional browser-game signal

Use public New/Popular/Trending pages when accessible.

Purpose:

- browser-friendly mechanic;
- session length;
- mobile control simplicity;
- casual trend.

## Game jams / public prototypes — Optional novelty signal

itch.io jams and public prototypes can reveal novel mechanics before commercial saturation.

Novelty alone is Low Confidence until corroborated by play/traction evidence.

# C. Cross-source trend momentum

`heat` should prefer multiple signals:

- ranking growth;
- player/review/comment velocity;
- cross-source convergence;
- repeated independent products using the same job/mechanic;
- persistence beyond launch day.

Do not use one-day launch rank as the only evidence.

# D. WeChat-specific validation sources

Before final recommendation, verify current WeChat platform requirements through official documentation/backend:

- https://developers.weixin.qq.com/miniprogram/product/
- https://developers.weixin.qq.com/miniprogram/product/material/
- https://developers.weixin.qq.com/miniprogram/product/record/record_guidelines.html
- https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/
- https://developers.weixin.qq.com/minigame/dev/guide/

Do not use old blog posts as the final authority for current platform limits.

# E. Source fallback policy

Prefer:

1. Official API/MCP
2. Official feed
3. Public page via normal browser where permitted
4. Clearly labeled third-party source
5. User export

Never bypass access controls.

Every fallback must record:

- `source_type`
- `source_mode`
- `source_status`
- completeness limitations
- fetch timestamp
