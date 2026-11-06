# Security & Data-Flow Statement

This document describes the expected network destinations, credential boundaries, local scripts and privacy behavior of `xiaokangxxs-miniprogram-scout`.

## TL;DR

- The repository has **no author-operated backend**.
- There is **no telemetry** in this repository.
- `SKILL.md` is an instruction Skill; live network requests are performed by the host Agent/browser/API connector the user chooses.
- The two scripts under `scripts/` are local repository checks and make **zero network calls**.
- No real API key is committed. `.env.example` contains placeholders only.
- Product Hunt / GitHub credentials should be supplied through the host Agent secret store or local environment variables.

## Expected network destinations

The host Agent may access these source families when the corresponding source is enabled.

| Destination / family | Purpose | Credential |
|---|---|---|
| `api.producthunt.com`, `producthunt.com` | launch/product discovery | `PRODUCTHUNT_TOKEN` for API mode; public-web fallback may be used without it |
| `hacker-news.firebaseio.com`, `news.ycombinator.com` | Show HN / Ask HN / demand signals | none |
| `neeed.directory` | micro-SaaS/product discovery | normally none for public read modes |
| `api.github.com`, `github.com` | repository/product discovery | optional `GITHUB_TOKEN` depending on host/rate limits |
| BetaList public/feed endpoints | early product discovery | none unless provider behavior changes |
| configured Indie Hackers third-party feed | auxiliary maker signals | none; source must be labeled unofficial |
| Reddit official API/platform | optional demand validation | only approved/compliant access |
| G2 official API/MCP | optional competitor/review validation | depends on account entitlement |
| `itch.io` | game mechanic/new prototype discovery | none for public pages |
| `poki.com` | browser-game heat/mechanic signal | none for public pages |
| Steam public/store pages | game trend / review / pricing signals | public access where available |
| `crazygames.com` | browser-game trend/mechanic signal | none for public pages |
| `developers.weixin.qq.com` / WeChat public platform | current Mini Program / Mini Game policy verification | normal public docs; account backend may require user's WeChat login outside this repository |
| candidate product/pricing websites | first-party feature/pricing evidence | normally none |

The Skill may also instruct the Agent to open a candidate's official product/pricing page. This is dynamic and is not a call to infrastructure controlled by this repository.

## Credentials

### Product Hunt

Preferred secret name:

```text
PRODUCTHUNT_TOKEN
```

Use only with Product Hunt official API endpoints.

If unavailable, and the host can browse public Product Hunt pages, the Skill may use a **limited public-web fallback**. That fallback must be disclosed and must not be presented as API-complete data.

### GitHub

Optional secret:

```text
GITHUB_TOKEN
```

Use only for GitHub API/connector access. It is mainly useful for higher or repeated query volume.

### Other sources

Do not invent generic username/password flows.

For Reddit, G2 or any future authenticated provider, use the provider's current official access method supported by the host Agent.

## Secret storage

- Prefer the host Agent's Secret Store.
- For local runtimes, copy `.env.example` to `.env`.
- `.env` is gitignored.
- Never paste a real credential into `SKILL.md`, README files, example reports, GitHub Issues, screenshots or test prompts.
- If a real secret was ever committed, **revoke/rotate it**; removing it from the latest file is not sufficient because Git history may retain it.

## Local scripts

### `scripts/validate-skill.mjs`

Reads repository files to verify:

- required paths;
- version consistency;
- SKILL frontmatter;
- referenced core files;
- presence of both scoring engines.

Network calls: **none**.

### `scripts/secret-scan.mjs`

Recursively reads text files in the repository and checks common patterns including:

- GitHub PAT formats;
- OpenAI-style `sk-` secrets;
- AWS access-key format;
- long Bearer credentials;
- non-placeholder `PRODUCTHUNT_TOKEN=` / `GITHUB_TOKEN=` assignments;
- generic long hex token/secret assignments.

Network calls: **none**.

It is a guardrail, not a replacement for a dedicated secret scanner.

## Data sent to sources

The Skill is designed around public discovery and user-authorized credentials.

Typical requests may include:

- date/search filters;
- product/repository/game search terms;
- public page URLs;
- candidate product names;
- user-provided URLs when the user explicitly asks to analyze them.

The repository does not require sending private conversation history, local files or user identity to the project author.

## User-provided files and reports

If the user supplies CSV/JSON/HTML/product exports, the host Agent may process them locally or according to that Agent's own file/tool behavior.

This repository itself does not upload those files anywhere.

Do not commit:

- private reports;
- user product lists intended to stay private;
- API responses containing private account data;
- screenshots containing credentials;
- runtime Champion Boards containing sensitive user-specific information.

## No telemetry

There is no analytics endpoint, tracking pixel, beacon, author-controlled logging service or usage telemetry shipped by this repository.

External badges/images in README (for example shields/star-history) are fetched by the user's GitHub/browser when viewing the README; they are not runtime Skill telemetry.

## Third-party terms

A source being technically reachable does not mean every use is permitted.

The Skill explicitly prefers:

1. official API/MCP;
2. official feed;
3. normal public pages when suitable/permitted;
4. clearly labeled third-party sources;
5. user exports.

Do not implement scrape-around behavior to bypass explicit access controls.

Product Hunt, Reddit, G2 and other providers can have commercial-use or entitlement restrictions; verify current terms before production/commercial automation.

## WeChat policy

WeChat rules change over time.

The repository intentionally avoids freezing easily outdated limits as permanent truth. Launch-critical behavior should be verified against current official documentation/public-platform backend before BUILD/LAUNCH.

## IP and clone safety

For product/game conversion:

- reuse the underlying problem, workflow or game mechanic concept;
- do not copy protected art, characters, names, music, text, branding or proprietary content;
- record IP/content review blockers separately from market opportunity.

## Reporting a security concern

Please open an Issue only for non-sensitive discussion.

**Do not post a real credential or exploitable secret in a public Issue.**

If the concern includes an exposed credential, revoke/rotate it immediately before any public discussion.

A mismatch between this document and repository behavior should be treated as a bug.
