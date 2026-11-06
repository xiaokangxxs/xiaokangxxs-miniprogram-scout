# Opportunity / Readiness / Confidence Model

Version: 1.2.0

V1.2 separates **“值不值得做”** from **“现在能不能做”**.

Do not combine them into one effective score.

---

## A. Opportunity Score — 0–100

This is the primary ranking score.

### 1. Search Demand & Intent — 25

Ask whether users actively search for the problem/solution.

Score using:

- natural Chinese core keyword exists — 5
- market-level search frequency hypothesis/evidence — 8
- strong intent close to action/payment — 6
- long-tail keyword cluster potential — 3
- recurring/seasonal search stability — 3

Important:

- `market_search_frequency` and `user_trigger_frequency` are separate.
- Real keyword/ASO/WeChat/Baidu data is Observed only when an actual tool is queried.
- Without a real keyword tool, score is an Estimate and Top 3 must include keyword validation.

### 2. Rigid Need / Pain — 25

High score when not solving causes:

- direct financial loss / missed revenue — up to 8
- clear urgency or deadline — up to 5
- repeated manual work / high time cost — up to 5
- meaningful error/risk reduction — up to 4
- visible workaround behavior — up to 3

### 3. Niche Wedge / Competitive Whitespace — 20

High score when:

- target group is concrete and narrow — 6
- problem is too niche for giants to deeply optimize — 5
- existing alternatives validate demand but remain inconvenient/expensive — 4
- China/WeChat creates a unique local wedge — 3
- does not require network effects or a giant marketplace — 2

### 4. Value & Monetization — 15

- existing paid competitors / paid workaround — 5
- payer is explicit — 4
- value maps to money/time/risk — 4
- repeat purchase/subscription/usage-based path exists — 2

### 5. WeChat Native Fit — 10

- search/share/scan/chat entry lowers friction — 4
- use-and-go flow is natural — 3
- WeChat context gives a specific local advantage — 3

A product being technically possible in a Mini Program is not enough.

### 6. Product Leverage — 5

- automation/AI meaningfully reduces manual effort — 3
- P0 can deliver the core JTBD without becoming a platform — 2

AI is not required.

---

## Opportunity hard gates

Apply after scoring:

- no natural Chinese search query → normally max 69
- discovery mainly depends on feed/recommendation rather than active search → normally max 74
- weak pain / nice-to-have only → normally max 69
- broad mass-market / giant core battlefield → normally max 69
- clearly a tiny one-off feature with no payer or repeated value → normally max 64
- strong B2B low-frequency but high-loss use cases may remain high on pain/value, but Search Demand must stay honest

---

## B. Readiness Score — 0–100

Readiness answers **“现在能不能做”**, not “值不值得做”.

### 1. China data/API availability — 25
### 2. WeChat capability/architecture — 25
### 3. Compliance/privacy readiness — 20
### 4. Third-party dependency stability — 15
### 5. MVP implementation cost/complexity — 15

Suggested interpretation:

- 85–100: Ready
- 70–84: Mostly ready
- 50–69: Validate blocker first
- <50: Blocked / redesign

A high Opportunity + low Readiness result is **not** a bad idea. It is a high-value opportunity with a pre-build validation task.

---

## C. Confidence — 0–100

Confidence measures evidence quality.

### Problem evidence — 30

Paid products, repeated discussions, clear user workaround behavior.

### Search evidence — 30

Highest confidence comes from actual keyword/ASO/search tools. Search-intent reasoning without real data is weaker evidence.

### Monetization evidence — 25

Observed pricing, paid tiers, disclosed business/customer evidence.

### Independent corroboration — 15

Multiple independent sources / competitors / communities.

Labels:

- 80–100: High
- 60–79: Medium
- <60: Low

---

## Final recommendation

Rank primarily by **Opportunity Score**.

Tie-breakers:

1. Confidence
2. Readiness

Actions:

- **🔥 BUILD NOW** — Opportunity ≥85, Readiness ≥70, Confidence ≥60, and no unresolved critical keyword claim.
- **🧪 VALIDATE BLOCKER** — Opportunity ≥85 but Readiness <70 or a critical search/data/platform assumption is still unverified.
- **✅ VALIDATE** — Opportunity 75–84.
- **👀 WATCH** — Opportunity 65–74.
- **❌ REJECT** — Opportunity <65 or hard prohibition.

Do not flatten multiple high-value candidates into the same score because of one YELLOW gate.

---

## Search-first preference

When two products are otherwise similar, prefer the one with:

1. clearer high-intent Chinese search terms;
2. more frequent market search demand;
3. stronger “must solve now” trigger;
4. narrower user segment;
5. stronger paid validation.

This is the primary preference of this Skill.
