# Product Reframe

Version: 1.4.0

Product Reframe prevents the Skill from blindly accepting the user's original product definition.

## Reframe verdict

Every serious User Seed evaluation should choose one:

- `KEEP` — original definition is already a strong expression of the JTBD.
- `REFRAME` — the underlying need is good, but the product definition is weak.
- `SPLIT` — the seed actually contains multiple distinct jobs/products.
- `REJECT` — the underlying problem/advantage is too weak or the proposed direction is fundamentally unsuitable.

## Compare explicitly

```yaml
product_reframe:
  original_idea: "..."
  latent_jtbd: "..."
  verdict: KEEP|REFRAME|SPLIT|REJECT
  reframed_product: "..."
  reason: "..."
  what_changed:
    - target_user
    - trigger
    - value_proposition
    - product_form
    - scope
```

## Strong reframe triggers

Reframe when the original idea is mainly:

- a content collection with no strong trigger;
- a generic AI wrapper;
- a clone of a hot product;
- a broad "all-in-one" tool;
- a format rather than a job;
- a platform-first idea ("I want a Mini Program") with no WeChat advantage;
- a feature with no repeat value / payer / acquisition loop.

## Do not reframe for show

If the original concept already maps cleanly to:

- a strong user trigger;
- a concrete outcome;
- a narrow user;
- plausible distribution;
- correct product form;

use `KEEP`.

The purpose is not to sound clever. It is to improve the product definition.

## Reframe quality test

A better product definition should make at least two of these clearer:

- who it is for;
- when it is used;
- what outcome it produces;
- why WeChat is useful;
- why the user returns;
- why it beats the current workaround;
- how it can be validated quickly.

If the new wording only changes branding, it is not a real reframe.
