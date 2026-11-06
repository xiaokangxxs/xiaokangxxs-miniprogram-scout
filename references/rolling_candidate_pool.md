# Rolling Candidate Pool

Version: 1.3.0

## Pools

Maintain two parallel opportunity pools:

### Mini Program Pool

- Fresh: 24–72h
- Rolling: 14 days
- Champion Board: Top 20

### Mini Game Pool

- Fresh: 24–72h
- Rolling: 14 days
- Champion Board: Top 20

Do not compare utilities and games as if they were the same product type.

## Freshness

Freshness is a score factor, not the ranking itself.

Track:

- product/game launch date;
- first-seen date;
- last-seen date;
- trend acceleration;
- China-market novelty.

## Heat refresh

When a candidate remains in the Rolling Pool, refresh heat evidence when possible:

- ranking movement;
- star/review/player/comment growth;
- cross-source mentions;
- new competing products;
- sustained vs one-day spike.

## Theme/mechanic clustering

Mini Program:
cluster by underlying JTBD.

Mini Game:
cluster by core mechanic + loop, not only theme/art style.

Example:

- several scratch-card incrementals → one `scratch/incremental` mechanic opportunity;
- several obstacle prank platformers → one `trap platformer` opportunity.

## Champion behavior

New candidates challenge old champions.

Do not drop an incumbent just because it is not new.

Output:

- new entrants;
- retained champions;
- heat-up candidates;
- cooling candidates;
- dropped candidates;
- reason for movement.

## Persistence

Use host storage/private runtime state when available.

Do not commit runtime candidate pools, user data or secrets into the public repository.
