# Multi-Concept Generation

Version: 1.4.0

After JTBD extraction and Product Reframe, generate **3–5 materially different concepts** from the same seed.

The goal is not brainstorming volume. The goal is to avoid prematurely locking onto the first solution.

## Diversity rule

Concepts must differ in at least one meaningful dimension:

- target segment;
- trigger / use moment;
- interaction model;
- workflow depth;
- monetization;
- distribution loop;
- product form;
- AI/data leverage;
- game mechanic.

Renaming the same product is not a new concept.

## Recommended portfolio

When applicable, generate a mix such as:

1. **Direct task utility** — shortest path to solving the JTBD.
2. **Workflow product** — embeds into a repeated process.
3. **AI-assisted product** — uses model capability where it creates real leverage.
4. **Niche vertical** — narrower user with stronger pain/payment.
5. **Play/game concept** — only when fun/challenge is intrinsic, not because gamification sounds attractive.

Do not force all five categories.

## Original idea as control

When useful, keep the user's original concept as one candidate.

This makes the reframe test explicit:

> Does the reframed concept actually score better than the original?

## Concept schema

```yaml
concepts:
  - concept_id: C1
    name: "..."
    target_user: "..."
    trigger: "..."
    core_value: "..."
    interaction: "..."
    monetization_hypothesis: "..."
    distribution_hypothesis: "..."
    product_form_candidate: "..."
    why_distinct: "..."
```

## Screening

Before deep scoring, remove concepts that clearly fail:

- no real problem/fun loop;
- wrong platform form;
- pure clone/IP dependency;
- impossible key dependency;
- no plausible WeChat advantage when WeChat is required.

Then route and fully score the strongest concepts.

## Output behavior

For User Seed tasks, default to:

- 3–5 generated concepts;
- route for every concept;
- full Opportunity / Readiness / Confidence for the strongest 2–3;
- concise reject/downrank reason for the rest;
- one recommended concept.

Do not output five long PRDs.
