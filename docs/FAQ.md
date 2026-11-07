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


## Can I give the Skill my own product idea, GitHub repositories or requirements?

Yes. v1.4 adds **User Seed Mode**.

The Skill can start from your material, extract the JTBD, challenge the original product definition, generate 3–5 product concepts, then route and score them.

It does not require a global Product Hunt-style scan first.

## Will the Skill always rewrite my idea?

No.

Product Reframe returns one of:
- KEEP
- REFRAME
- SPLIT
- REJECT

If the original concept already expresses the JTBD well, it should use KEEP.

## Does v1.4 change the Mini Program / Mini Game scoring weights?

No.

v1.4 adds a productization layer **before** the existing Product Form Router and dual scoring engines.


## Why did an Opportunity score get this exact number?

v1.5 requires Score Explainability for serious candidates.

The answer should expose:
- component score;
- evidence;
- assumptions;
- why-not-higher;
- gates/caps;
- final score.

There is no hidden evidence bonus.

## Does a public GitHub repository mean I can use its content commercially or for RAG?

No.

v1.5 adds Rights & Risk checks for license, redistribution, modification, commercial use, attribution, RAG/embedding and explicit permission.

## What happens when the Skill loves an idea too much?

Top recommendations go through Contrarian Review.

The reviewer must produce a Bear Case and one Fatal Assumption with a fastest falsification test.

## Is the Rolling Pool real now?

Yes.

Public GLOBAL_DISCOVERY state lives in `data/rolling_pool.json` and is validated by `scripts/rolling-pool.mjs`.

Only public market signals belong there. USER_SEED private material must not be persisted.
