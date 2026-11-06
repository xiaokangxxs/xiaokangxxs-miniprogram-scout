# Opportunity Scoring Model

Version: 1.1.0

Score only after evidence collection and the China Feasibility Gate assessment.

The base score remains 100 points for backward compatibility. The new China Feasibility Gate does **not** add bonus points; it can cap or reject an otherwise attractive opportunity.

Total base score: 100 points.

| Dimension | Weight | What earns a high score |
|---|---:|---|
| Search intent clarity | 15 | Users can naturally search a specific Chinese problem/solution keyword |
| Pain severity + frequency/value | 15 | Repeated pain, high time/cost/risk, or strong one-off value |
| Existing paid validation | 15 | Comparable paid products or clear willingness-to-pay evidence |
| WeChat Mini Program fit | 15 | Low-friction, use-and-go, searchable/shareable, suitable platform capabilities |
| Monetization quality | 12 | Clear payer, payment trigger, pricing path, not dependent on vague future ads |
| Competitive whitespace | 10 | Not a giant's core battlefield; narrow local wedge exists |
| MVP feasibility | 10 | Small team/solo-friendly; limited data/ops/compliance burden |
| AI value / product leverage | 8 | AI meaningfully improves outcome, or non-AI design is already strong |

## Raw score interpretation

- **80–100: 优先做候选**
- **70–79: 值得验证候选**
- **60–69: 观察**
- **<60: 淘汰**

Do not finalize the grade from the raw score alone.

## Apply China Feasibility Gate

Read `china_feasibility_gate.md` and compute:

```text
effective_opportunity_score = min(raw_opportunity_score, effective_score_cap)
```

Final grade is based on the **effective** score:

- **80–100: 优先做**
- **70–79: 值得验证**
- **60–69: 观察**
- **<60: 淘汰 / 改产品形态**

This prevents cases such as a strong price-comparison idea receiving `优先做` before a reliable Chinese price data source has been verified.

## Hard gates before scoring

A candidate normally cannot receive `优先做` if any of these remains unresolved:

- no plausible Chinese search intent;
- no clear user/payer;
- no usable Mini Program wedge;
- no evidence that the underlying problem exists;
- MVP requires a large platform, marketplace, social graph, heavy offline operation, or regulated license;
- a core Chinese data/API dependency is unresolved;
- a critical WeChat capability/permission is unresolved.

## AI scoring nuance

An idea does **not** lose points merely because it does not need AI. The 8-point dimension can be earned through strong product leverage or automation. AI is not mandatory.

For an AI-first proposal, if removing AI barely changes the value proposition, cap this dimension at 3/8 and flag `AI gimmick risk`.

## Cross-source bonus is not extra points

Do not exceed 100. Multiple independent sources should increase confidence inside the relevant dimensions, not add a separate popularity bonus.
