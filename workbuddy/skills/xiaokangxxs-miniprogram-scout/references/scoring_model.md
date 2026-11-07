# Dual Opportunity Scoring Model

Version: 1.5.0

Mini Programs and Mini Games use different score models.

Never compare a utility and a game using the same behavioral assumptions.

---

# A. WeChat Mini Program Opportunity Score — 100

## 1. Search Demand & Intent — 20

- natural Chinese core query — 4
- market search frequency / recurring demand — 6
- strong action/payment intent — 5
- long-tail keyword cluster — 3
- recurring/seasonal stability — 2

Without a real keyword tool, treat frequency as hypothesis.

## 2. Rigid Need / Pain — 20

- money/revenue impact — 6
- urgency/deadline — 4
- time/manual-work cost — 4
- error/risk reduction — 3
- visible workaround behavior — 3

## 3. Niche Wedge / Competitive Whitespace — 15

- specific target segment — 5
- giant platforms under-serve it — 4
- paid alternatives prove demand — 3
- China/WeChat wedge — 3

## 4. Value & Monetization — 10

- payer explicit — 3
- observed paid alternatives — 3
- value maps to money/time/risk — 3
- repeat/usage/subscription path — 1

## 5. WeChat Native Fit — 10

- search/share/QR/chat entry lowers friction — 4
- use-and-go flow — 3
- private-domain/offline/workflow advantage — 3

## 6. Trend Momentum / Heat — 8

Use Proxy evidence:

- multi-source convergence;
- ranking velocity;
- review/comment/star growth;
- multiple products emerging around the same job;
- sustained attention.

Do not equate heat with revenue.

## 7. Freshness / Novelty — 5

Separate:

- product launch freshness;
- behavior/mechanic freshness;
- China-market freshness.

A mature old category can still score when the China/WeChat wedge is new.

## 8. Buildability / Solo-Dev Leverage — 10

Evaluate:

- POC speed;
- backend/API complexity;
- data dependencies;
- content/asset burden;
- ops/moderation;
- model cost;
- team size.

Easy buildability can break ties; it cannot rescue weak demand.

## 9. Product Leverage — 2

Automation/AI/workflow advantage.

---

## Mini Program hard gates

- no natural Chinese search query → normally max 69
- weak pain / nice-to-have → normally max 69
- broad giant-platform battlefield → normally max 69
- tiny one-off feature with no payer/repeat value → normally max 64
- no plausible WeChat acquisition/distribution loop → normally max 74

---

# B. WeChat Mini Game Opportunity Score — 100

Search is NOT the primary signal.

## 1. Instant Hook / Fun Clarity — 20

Can a player understand why it is fun within roughly 3–10 seconds?

Score:

- mechanic immediately readable — 6
- first interaction feels rewarding — 5
- low instruction burden — 4
- strong visual/physical feedback — 5

## 2. Replayability / Retention Loop — 15

- another-round desire — 5
- mastery/skill/progression — 4
- session variety — 3
- return trigger — 3

## 3. WeChat Social / Viral Loop — 15

- ranking/competition naturally fits — 4
- friend/group comparison — 4
- shareable result/moment — 3
- revival/invite/team loop without abusive inducement — 2
- spectator/clip potential — 2

## 4. Monetization Fit — 15

- rewarded video fits naturally — 5
- interstitial/banner does not destroy play — 3
- IAP/hybrid potential where compliant — 4
- payer/value loop is understandable — 3

## 5. Trend Momentum / Heat — 10

- current browser/mobile/Steam/itch/Poki mechanic momentum;
- player/review growth;
- cross-platform copy/variation activity;
- social clip momentum.

## 6. Freshness / Novel Mechanic — 10

- mechanic novelty — 4
- theme/visual novelty — 2
- China/WeChat freshness — 4

Do not copy protected IP/assets.

## 7. Buildability / Asset Leverage — 10

- 1–3 day playable prototype possible — 3
- 2D/simple 3D asset burden — 2
- low live-service/content burden — 2
- engine/runtime fit — 2
- low backend dependency — 1

## 8. Niche / Competition Gap — 5

Prefer a clear twist over a red-ocean clone.

---

## Mini Game hard gates

- no clear fun mechanic → max 59
- requires long tutorial before fun → normally max 69
- no replay/retention loop → normally max 69
- monetization depends on prohibited/unclear payment with no IAA fallback → no BUILD NOW
- relies on copied brand/IP/assets → REJECT or redesign
- platform/content/policy blocker → readiness blocked

---

# C. Readiness Score — 100

Readiness is separate from market/game opportunity.

## Mini Program readiness

- China data/API — 25
- WeChat capabilities — 25
- compliance/privacy — 20
- platform dependency — 15
- implementation/ops — 15

## Mini Game readiness

- game category/qualification/publication — 20
- ads/payment monetization eligibility — 20
- package/performance/engine fit — 20
- content/IP/review risk — 20
- implementation/assets/live ops — 20

Interpretation:

- 85–100 Ready
- 70–84 Mostly Ready
- 50–69 Validate Blocker
- <50 Blocked / Redesign

---

# D. Confidence — 100

For Mini Programs:

- problem evidence — 25
- search evidence — 25
- monetization evidence — 20
- independent corroboration — 15
- trend evidence — 15

For Mini Games:

- mechanic/fun evidence — 25
- player/retention proxy evidence — 20
- monetization evidence — 20
- trend evidence — 20
- independent cross-platform corroboration — 15

---

# E. Recommendation

## Mini Program

- 🔥 BUILD NOW — Opportunity ≥85, Readiness ≥70, Confidence ≥60, critical search/platform assumptions verified enough
- 🧪 VALIDATE BLOCKER — Opportunity ≥85 but a key blocker remains
- ✅ VALIDATE — Opportunity 75–84
- 👀 WATCH — Opportunity 65–74
- ❌ REJECT — Opportunity <65 / prohibited

## Mini Game

- 🎮 BUILD PROTOTYPE — Opportunity ≥85, Readiness ≥65, Confidence ≥55
- 🧪 TEST MECHANIC — Opportunity ≥75 with low confidence or retention/monetization unknown
- 👀 WATCH TREND — Opportunity 65–74
- ❌ REJECT — Opportunity <65 / prohibited / no fun loop

For games, a 1–3 day prototype retention test is often more valuable than desk analysis.

---

# F. Cross-category Best Bets

Do not merge raw scores mechanically.

When producing Cross-category Top 5, compare:

- size/quality of opportunity;
- confidence;
- speed to validation;
- expected monetization path;
- platform readiness;
- user's team/resources.

Label why each is a Mini Program or Mini Game.


---

# G. Score Explainability

Every serious score must follow `references/score_explainability.md`.

For Top 3 / recommended concepts expose:

- component score;
- supporting evidence;
- assumptions;
- why-not-higher;
- hard gates/caps;
- final score.

Do not introduce hidden bonus/penalty weights.

Evidence Quality, China Demand, Rights & Risk and Contrarian Review may change a published score only when they expose a real scoring mistake, missing gate, blocker or evidence weakness.

Otherwise change Confidence / Readiness / recommended action instead.
