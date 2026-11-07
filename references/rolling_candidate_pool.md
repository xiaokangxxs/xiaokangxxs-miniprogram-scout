# Rolling Candidate Pool

Version: 1.5.0

## Purpose

The Rolling Pool is now a **real persistent public market-state file**, not only a prompting convention.

Canonical state:

`data/rolling_pool.json`

Schema:

`data/rolling_pool.schema.json`

State engine:

`scripts/rolling-pool.mjs`

## Privacy boundary

The public pool may contain only:

- public opportunity names;
- public source summaries/URLs;
- Opportunity / Readiness / Confidence estimates;
- first/last seen dates;
- heat status;
- score history;
- public change reasons.

Never store:

- user-provided private requirements;
- private files/exports;
- personal data;
- cookies;
- API tokens;
- credentials;
- private interview transcripts.

USER_SEED concepts stay out of the public pool unless the user intentionally makes them public.

## Pools

Maintain two parallel opportunity pools.

### Mini Program Pool
- Fresh: last seen within 72h
- Rolling: last seen within 14 days
- Champion Board: Top 20 from Rolling

### Mini Game Pool
- Fresh: last seen within 72h
- Rolling: last seen within 14 days
- Champion Board: Top 20 from Rolling

## Candidate identity

Use a stable `opportunity_id` based on the underlying JTBD/mechanic, not one source product.

Example:

`pc-build-value-check`

not:

`pc-deal-check-hn-50366929`

This prevents duplicate products from fragmenting one opportunity history.

## History

Each candidate can maintain:

- first_seen_at
- last_seen_at
- Opportunity / Readiness / Confidence
- score_history
- heat_status
- latest_change_reason
- sources

Heat status:

- HEATING
- STABLE
- COOLING
- UNKNOWN

## Daily merge

A daily run should:

1. load `data/rolling_pool.json`;
2. discover today's candidates;
3. normalize stable opportunity IDs;
4. merge current scores/evidence;
5. prune Rolling items not seen for >14 days;
6. recompute Fresh <=72h;
7. recompute Top20 Champion Board;
8. append a history snapshot;
9. write the updated state back only after validation.

Local helper:

```bash
npm run validate:pool
node scripts/rolling-pool.mjs merge path/to/today-candidates.json
```

## Champion movement

Daily reports must explicitly show:

- NEW
- RETAINED
- HEATING
- COOLING
- DROPPED

A new product does not automatically beat an incumbent.

## Scoring relationship

Rolling Pool persists the result. It does not invent scores.

Scores still come from:

- Mini Program / Mini Game model;
- Score Explainability;
- Evidence Quality;
- Readiness;
- Contrarian Review.

## Failure behavior

If state cannot be loaded or written:

- continue the report using an in-memory pool;
- mark persistence as DEGRADED;
- do not pretend comparison-to-yesterday is complete;
- never overwrite a valid pool with malformed data.
