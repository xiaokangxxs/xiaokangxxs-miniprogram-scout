# User Seed Mode

Version: 1.4.0

User Seed Mode lets the Skill start from **user-provided material** instead of forcing every task through global discovery.

## Accepted seed types

Examples:

- a raw product idea;
- a paragraph describing a user problem;
- one or more GitHub repositories;
- competitor/product URLs;
- app/store screenshots;
- user feedback/interview notes;
- exported CSV/JSON/HTML;
- a list of features;
- a workflow that feels painful;
- an existing Mini Program / Mini Game concept.

## Core rule

When the user already supplied meaningful seed material, do **not** waste time pretending the task is a fresh global scan.

Use the seed as the initial evidence pool, then optionally enrich only the facts that materially affect the decision.

## Input classification

```yaml
input_mode: GLOBAL_DISCOVERY|USER_SEED
seed_type:
  - IDEA
  - PROBLEM_DESCRIPTION
  - REPOSITORIES
  - PRODUCT_LINKS
  - USER_FEEDBACK
  - FILES_OR_EXPORTS
  - EXISTING_PRODUCT
  - MIXED
```

## Provenance

Keep user-provided claims separate from independently verified fields.

Examples:

- "这个仓库 10 万 Star" from the user → `USER_CLAIM`
- current GitHub star count returned by GitHub → `OBSERVED`
- "很多人会需要" → `HYPOTHESIS`

Do not silently upgrade a user claim into Observed evidence.

## User Seed workflow

1. Normalize seed items.
2. Extract the underlying problem / JTBD.
3. Identify solution anchoring in the user's wording.
4. Reframe the product when necessary.
5. Generate 3–5 materially different product concepts.
6. Run Product Form Router on the concepts.
7. Score the routed concepts with the existing Mini Program / Mini Game model.
8. Check Readiness / Confidence / WeChat policy.
9. Recommend the strongest concept and fastest falsification test.

## Enrichment policy

Use external research only when it improves one of these materially:

- demand confidence;
- trend / freshness;
- competitor landscape;
- content / IP / data dependency;
- WeChat readiness.

User Seed Mode is not "no research". It is **seed-first research**.

## Output

At minimum:

- input interpretation;
- seed evidence status;
- latent JTBD;
- original idea verdict;
- 3–5 concepts;
- product-form route for each;
- Opportunity / Readiness / Confidence for serious candidates;
- recommended concept;
- P0;
- fastest validation;
- Kill Criteria.
