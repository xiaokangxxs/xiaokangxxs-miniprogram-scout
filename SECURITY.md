# Security Policy

## Secrets

This repository must never contain real API tokens, keys, passwords, cookies, session IDs, OAuth client secrets, or other credentials.

Use host Agent secret stores or environment variables such as:

- `PRODUCTHUNT_TOKEN`
- `GITHUB_TOKEN`

Examples in this repository must contain placeholders only.

## Before publishing a release

1. Search the full repository for known tokens/keys.
2. Review `.env`, YAML, JSON, Markdown, logs, screenshots and generated reports.
3. Confirm examples contain only environment-variable names/placeholders.
4. If a credential was ever committed, revoke/rotate it; deleting the current file is not enough because Git history may still contain it.

## Data-source safety

Respect each source's current API terms, access controls, rate limits and commercial-use restrictions. Do not add scrape-around behavior to bypass a source that explicitly blocks access.

## Reporting a vulnerability

When this repository is published, configure a private GitHub security-reporting channel if desired and update this section with the preferred contact method.
