# Rolling Candidate Pool

Version: 1.2.0

## Why

The Skill must find the **best current opportunities**, not merely the newest products today.

A strong candidate discovered yesterday should not disappear because ten weaker products launched today.

## Three pools

### Fresh Pool

- Default: latest 24 hours.
- Expand to 72 hours when sparse.
- Used only for discovery.

### Rolling Pool

- Default window: 14 days.
- Contains all serious candidates discovered during the window.
- New evidence can refresh `last_seen_at`.
- Same product/domain is deduplicated.
- Same underlying opportunity from different products is clustered into one opportunity theme.

### Champion Board

- Keep the strongest 20 opportunity themes.
- Re-score champions when new evidence appears.
- New candidates must beat incumbents on Opportunity Score, not freshness.

## Opportunity theme clustering

Examples:

- ReSnapHome + other virtual staging/photo tools → `房源照片 AI 美化`
- Multiple AI visibility trackers → `AI 搜索品牌曝光检测`

Do not allow one trend with five similar products to occupy five Top 10 slots.

## Persistence

If the host Agent supports persistent storage, keep a local/private runtime state outside the public Skill repository.

If persistent state is unavailable:

1. use the current conversation/history when available;
2. include a machine-readable Champion Board in every report;
3. on the next run, accept the previous report/JSON as input.

Never commit users' runtime candidate pools or secrets into the public Skill repository.

## Aging

Freshness is evidence, not value.

- Age alone does not reduce Opportunity Score.
- After 14 days without new evidence, move non-champions to archive/watch.
- Champions can remain up to 30 days if still clearly superior, but must be revalidated.
- Repeated independent signals reset/extend `last_seen_at`.

## Daily run behavior

1. Fetch Fresh Pool.
2. Load prior Rolling Pool/Champion Board when available.
3. Deduplicate products.
4. Cluster into opportunity themes.
5. Enrich new themes and any champion challenged by a new theme.
6. Score Opportunity / Readiness / Confidence.
7. Rank all eligible rolling candidates.
8. Output:
   - new entrants;
   - retained champions;
   - dropped candidates and why;
   - Top 10 overall, not Top 10 newest.
