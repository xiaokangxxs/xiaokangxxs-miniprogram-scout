# Auth and Secrets Guide

Version: 1.1.0

## General rule

Ask for credentials only when the source actually needs them. Prefer the host Agent's secret store or environment variables over chat paste.

Never save real credentials inside this skill folder, generated reports, screenshots, logs, examples, or source files.

## Product Hunt

Official API mode requires a token.

Preferred variable:

```text
PRODUCTHUNT_TOKEN
```

User guidance:

1. Open Product Hunt API documentation / API dashboard.
2. Create/configure an application if needed.
3. For simple personal scripts, use the developer-token flow described in Product Hunt docs.
4. Put the token in the Agent's secret/environment setting as `PRODUCTHUNT_TOKEN`, or provide it only for the current session if the host has no secret store.

When diagnostics are necessary, mask it, e.g. `xxxx...abcd`.

Never send the Product Hunt token to any non-Product-Hunt domain.

### When no Product Hunt token is available

If normal public browsing/search is available, the Agent may use the limited public-web fallback defined in `source_registry.md`. Do not pretend fallback data came from the API, and do not require the user to paste a token merely to continue a basic discovery run.

If the user requests API-exact Product Hunt fields/ranking or a reproducible API pipeline, request/configure the token.

## GitHub

Optional for public search; recommended for recurring/high-volume scanning.

Preferred variable:

```text
GITHUB_TOKEN
```

Ask only if:

- unauthenticated API requests are rate-limited;
- user requests a large/repeated scan;
- host runtime requires auth for the chosen endpoint.

Do not put PATs into repository files.

## Reddit

Do not request random username/password credentials. Use approved developer/API access and current Reddit rules. If not available, disable the source.

## G2

Access may depend on subscription/entitlements. Ask the user to connect/provide the official supported access method used by the current host Agent. If unavailable, mark G2 skipped.

## User pasted a secret into chat

Use it only as necessary for the current task and avoid repeating it in full. Prefer moving it into a secret/environment setting for recurring use.

Before packaging/open-sourcing this Skill, run a secret scan over all text/config files and verify only placeholder environment-variable names remain.
