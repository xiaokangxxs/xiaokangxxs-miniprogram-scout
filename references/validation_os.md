# Validation OS

Version: 1.5.0

Validation should be a closed loop, not a one-off suggestion.

## Core object

```yaml
validation_experiment:
  experiment_id: "..."
  opportunity_id: "..."
  hypothesis: "..."
  riskiest_assumption: "..."
  method: "..."
  target_segment: "..."
  sample_target: "..."
  metric: "..."
  success_threshold: "..."
  kill_threshold: "..."
  start_date: null
  end_date: null
  result:
    status: NOT_RUN|RUNNING|PASS|FAIL|MIXED
    observed_value: null
    notes: ""
  decision: CONTINUE|PIVOT|STOP|UNKNOWN
  learning: ""
```

## Experiment order

Prefer testing assumptions in this order:

1. fatal / irreversible blocker;
2. demand / fun;
3. distribution;
4. retention;
5. monetization;
6. implementation optimization.

Do not spend weeks optimizing an MVP before proving the core demand/fun assumption.

## Mini Program examples

- landing/waitlist;
- manual concierge service;
- spreadsheet-backed prototype;
- 20–30 target-user interviews;
- paid-service pretest;
- keyword/service-market observation.

## Mini Game examples

- 1–3 day playable mechanic;
- 50–100 player test;
- second-run rate;
- average sessions;
- fail/retry loop;
- voluntary share/leaderboard usage.

## Learning loop

After an experiment:

- compare predicted vs actual;
- update Confidence;
- update the relevant score component only if the result changes a real assumption;
- store the learning with the opportunity history.

## Output

Every BUILD NOW / BUILD PROTOTYPE / VALIDATE recommendation should include at least one structured experiment.
