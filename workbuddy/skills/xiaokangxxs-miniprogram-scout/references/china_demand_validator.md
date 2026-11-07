# China Demand Validator

Version: 1.5.0

The Skill should not stop at "Search Hypothesis".

## Goal

Turn an assumed China demand signal into an explicit validation plan, and use real data when tools are available.

## Demand channels

Depending on the opportunity, consider:

- WeChat Search / WeChat Index when available;
- Baidu;
- Xiaohongshu;
- Douyin;
- Zhihu;
- Bilibili;
- Taobao / Xianyu paid-service listings;
- app stores;
- Chinese forums/communities;
- job/professional communities;
- offline merchant/user interviews.

Do not query every source mechanically.

## Demand evidence types

```yaml
china_demand:
  search_demand:
    status: OBSERVED|HYPOTHESIS|UNKNOWN
    queries: []
    evidence: []
  content_demand:
    status: OBSERVED|PROXY|UNKNOWN
    evidence: []
  paid_service_demand:
    status: OBSERVED|PROXY|UNKNOWN
    evidence: []
  workaround_demand:
    status: OBSERVED|PROXY|UNKNOWN
    evidence: []
  community_demand:
    status: OBSERVED|PROXY|UNKNOWN
    evidence: []
```

## Search hypothesis generation

For Mini Programs, generate:

- core action query;
- problem query;
- "多少钱 / 怎么办 / 怎么查 / 怎么算" variants;
- role-specific long-tail queries;
- seasonal/event queries when relevant.

## Validation protocol

When no real China keyword tool is available:

1. state `Search Frequency: HYPOTHESIS`;
2. output 5–15 concrete queries;
3. specify which Chinese channel should validate each;
4. define what result would increase/decrease Confidence;
5. do not fabricate volume.

## China Demand Confidence

Use:

- HIGH — multiple direct China signals or real tests;
- MEDIUM — several proxies + clear workaround behavior;
- LOW — mostly overseas popularity or model inference;
- UNKNOWN — insufficient evidence.

This confidence feeds Confidence Score; it does not create a new hidden scoring weight.
