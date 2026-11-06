# WeChat Platform Constraints Registry

Version: 1.3.0
Last reviewed: 2026-11-06

This file is a **runtime verification checklist**, not a frozen copy of WeChat rules. WeChat policies change. Before recommending BUILD NOW, verify any material capability against current official documentation / mp.weixin.qq.com backend.

Official reference entry points:

- Mini Program platform/service rules: https://developers.weixin.qq.com/miniprogram/product/
- Service categories / qualification requirements: https://developers.weixin.qq.com/miniprogram/product/material/
- Mini Program filing/record guidance: https://developers.weixin.qq.com/miniprogram/product/record/record_guidelines.html
- User privacy framework: https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/
- Mini Game docs: https://developers.weixin.qq.com/minigame/dev/guide/

## A. Common Mini Program launch checks

### 1. Subject + service category

The declared service category must match the actual service. Some categories require specific entity types, licenses or qualification documents.

Always output:

- proposed category;
- likely subject type;
- known qualification requirement;
- `VERIFY_OFFICIAL` if not confirmed in the current run.

If no matching legal category exists, platform readiness is RED.

### 2. Filing / registration

Check whether current filing / ICP-related requirements apply to the planned operator and service.

Do not assume a code-complete Mini Program can be published without account/filing preparation.

### 3. Privacy

If personal information or privacy-sensitive APIs/components are used:

- declare the actual information types and purposes;
- configure the platform privacy guide;
- obtain required user consent before invoking relevant privacy interfaces;
- minimize collection;
- define deletion/retention behavior.

Face, health, precise location, contacts, files and user-generated content need extra scrutiny.

### 4. Core experience and review

The declared name, description, category and actual core experience must be consistent.

Do not hide the real service behind a different category.

Do not make an unnecessary login wall the only thing visible before users can understand the product value.

### 5. Payment

Before recommending a paid model, verify:

- subject eligibility;
- merchant/payment setup;
- whether the item is physical service, digital/virtual content, membership, game item, etc.;
- current iOS / virtual-payment restrictions where applicable.

Never assume ordinary Mini Program payment rules automatically apply to Mini Games or virtual goods.

### 6. Subscription / proactive notifications

Do not design a business that assumes unlimited proactive WeChat push.

If reminders/monitoring are core:

- perform monitoring server-side;
- verify current subscription/service-message eligibility and templates;
- provide a fallback channel when necessary.

## B. Mini Game launch checks

### 1. Game category

A game should be registered and reviewed as a Mini Game/game service, not disguised as a utility.

### 2. Content and IP

Check:

- gambling / lottery-like mechanics;
- violent/sexual/prohibited content;
- misleading or induced sharing;
- copyrighted art, characters, music, trademarks and cloned assets;
- UGC/moderation where applicable.

Use gameplay inspiration, not copied protected assets/brand identity.

### 3. Game qualification / filing / publication requirements

Depending on operator, monetization and content, current game-related filing, software copyright, publication/edition-number or other qualification requirements may apply.

Do not hard-code a blanket rule. Verify the current official/competent-authority requirement before BUILD NOW.

### 4. Ads

If monetization is IAA:

- verify current eligibility for traffic-monetization/advertising;
- use official ad components/formats;
- model rewarded video / interstitial / banner experience without harming core play;
- do not assume every account can enable every ad format immediately.

### 5. Virtual payment / IAP

If monetization is IAP:

- verify subject/entity eligibility;
- verify current Mini Game virtual-payment requirements;
- verify game qualification/publication requirements;
- verify iOS-specific restrictions/current policy.

If unclear, mark `MONETIZATION_BLOCKER`.

### 6. Package / performance

Before BUILD NOW, verify current official limits for:

- main package / subpackages;
- remote assets/CDN;
- network domains;
- memory/performance;
- WebGL/engine/runtime compatibility;
- low-end Android performance;
- startup time.

Do not embed stale fixed package limits in the scoring engine; current official docs win.

### 7. Social features

Leaderboards, sharing, group play, invitations and revival loops can be powerful, but must comply with current WeChat anti-inducement and user-experience rules.

Do not reward designs that depend on forced/abusive sharing.

## C. Platform review risk

For every Top 10 opportunity output:

```yaml
wechat_policy:
  product_form: MINIPROGRAM|MINIGAME
  category_status: VERIFIED|VERIFY_OFFICIAL|BLOCKED
  qualification_status: VERIFIED|VERIFY_OFFICIAL|BLOCKED
  privacy_status: GREEN|YELLOW|RED
  payment_status: GREEN|VERIFY_OFFICIAL|BLOCKED|NOT_NEEDED
  notification_status: GREEN|VERIFY_OFFICIAL|NOT_NEEDED
  ads_status: GREEN|VERIFY_OFFICIAL|BLOCKED|NOT_NEEDED
  performance_status: GREEN|VERIFY_POC|BLOCKED
  review_risk: LOW|MEDIUM|HIGH
  blockers: []
```

A high market score can remain high, but BUILD NOW is not allowed while a launch-critical field is BLOCKED/unknown.
