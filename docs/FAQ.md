# FAQ

## Is this just a Product Hunt scraper?

No. Product Hunt is one discovery source. The Skill also uses HN, GitHub, Neeed, BetaList and other sources, and Mini Game discovery uses game-specific platforms.

## Does the Skill automatically copy foreign products?

No. It extracts the underlying JTBD/mechanic, then re-evaluates China demand, WeChat fit, policy constraints, monetization and IP risk.

## Why are Mini Programs and Mini Games scored separately?

Their success loops differ. Utilities depend more on active intent and problem value; games depend more on hook, replayability, social loops and monetization.

## Does “high search frequency” mean one user searches every day?

No. The Skill distinguishes:

- market search frequency
- individual trigger frequency
- search intent strength

A low-frequency but high-loss B2B problem can still be valuable.

## Are ASO Popularity / Difficulty values generated?

No. If no real keyword tool is queried, search frequency remains a hypothesis. The Skill must not invent numbers.

## Does Product Hunt require a token?

The official API mode does. When a host Agent can browse public pages but cannot safely inject a token, limited public-web discovery may be used and must be labeled as fallback.

## Will my API keys be stored?

They should not be. Use the host Agent secret store or local environment variables. This repository ships placeholders only.

## Why do some high-scoring ideas say VALIDATE BLOCKER?

Opportunity quality and readiness are separate. An idea can be excellent while a China data source, category, qualification or payment path still needs validation.

## Does BUILD NOW mean WeChat approval is guaranteed?

No. Any launch-critical category, qualification, privacy, payment, notification or game rule still needs current official verification.

## Can I use this Skill for Web/App ideas?

Yes. The Product Form Router can explicitly decide that WeChat is not the correct form.

## Can I use my own product list instead of live sources?

Yes. Give the Agent CSV, JSON, HTML, URLs or a previous report and start from normalization/scoring.

## Does the Skill require Node.js?

The Skill itself is Markdown/instructions. Node.js is only used for optional repository self-check scripts.

## How do I contribute a new source?

Read `CONTRIBUTING.md`. A source contribution should state:

- official vs unofficial
- auth requirement
- access/terms considerations
- fields used
- fallback behavior
- how it affects evidence confidence
