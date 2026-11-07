# Contrarian Reviewer

Version: 1.5.0

The Skill must challenge its own strongest ideas before recommending them.

## Purpose

Reduce confirmation bias and "falling in love" with a high-scoring candidate.

Run a Red Team pass on:

- Top 3 GLOBAL_DISCOVERY opportunities;
- the recommended USER_SEED concept;
- any candidate marked BUILD NOW / BUILD PROTOTYPE.

## Required questions

### Bear case
Why should this NOT be built?

### Replacement risk
Why would the user simply use:
- ChatGPT / DeepSeek / generic AI;
- an existing giant platform;
- manual workaround;
- a free public tool?

### Distribution failure
What if the first 1,000 users are harder to acquire than assumed?

### Retention failure
What if the pain is real but one-off?

### Monetization failure
What if users value the output but will not pay?

### Dependency failure
What single API/data/platform dependency could break the product?

### Platform failure
What WeChat policy/category/payment/review condition could block launch?

### Copyability
If a competitor copies the feature in one week, what remains?

## Fatal assumption

Identify exactly one assumption that would most likely kill the concept if false.

```yaml
contrarian_review:
  bull_case: "..."
  bear_case: []
  replacement_risk: HIGH|MEDIUM|LOW
  fatal_assumption: "..."
  fatal_assumption_test: "..."
  verdict_after_red_team: KEEP|DOWNRANK|VALIDATE_FIRST|REJECT
  score_change:
    opportunity_delta: 0
    readiness_delta: 0
    confidence_delta: 0
    reason: "..."
```

## Score-change discipline

Do not arbitrarily change Opportunity because the reviewer is skeptical.

Only change a score when the Red Team exposes:

- a scoring mistake;
- missing direct evidence;
- a hard gate/cap that was not applied;
- a new blocker that changes Readiness;
- evidence weakness that changes Confidence.

Otherwise keep the score and change the recommended action.
