# Product Form Router

Version: 1.4.0

Product Form Router runs on an **opportunity/concept**, not blindly on raw user wording.

For GLOBAL_DISCOVERY:

```text
source signals → cluster/JTBD theme → router
```

For USER_SEED:

```text
user seed → JTBD → Reframe → concepts → router
```

Possible routes:

- `WECHAT_MINIPROGRAM`
- `WECHAT_MINIGAME`
- `WEB_APP`
- `NATIVE_APP`
- `DESKTOP`
- `REJECT`

Do not force every idea into WeChat just because the user mentioned WeChat.

## Route to WeChat Mini Program when

The primary value is completing a task/service:

- user has a concrete problem or search query;
- short sessions / use-and-go;
- scan/share/chat/search/offline QR lowers friction;
- forms, OCR, image processing, calculators, reminders, lightweight workflows, booking, records, utilities;
- cloud/server can perform heavy background work.

## Route to WeChat Mini Game when

The primary value is play:

- fun/challenge/competition first;
- a mechanic can be understood in seconds;
- replayability, mastery or progression matters;
- sessions repeat;
- social competition/share/ranking is natural;
- ads / compliant virtual payment can fit.

Gamification does not automatically make a utility a Mini Game.

## Route away from WeChat when

Prefer Web/App/Desktop if the core experience requires:

- long-running foreground/background process that server architecture cannot solve;
- heavy desktop workflows;
- high-performance 3D/assets unsuitable for target WeChat constraints;
- unsupported OS/device permissions;
- platform/payment/content requirements that make WeChat a poor distribution channel;
- business value exists but WeChat adds no meaningful acquisition or UX advantage.

## Reframe interaction

If the user's original idea says "做个小程序", but the best concept routes to Web/App/Desktop:

- keep the JTBD;
- reject the forced WeChat form;
- explain the mismatch.

If a seed contains both utility and play jobs, split them before routing.

## Router output

```yaml
product_form:
  primary: WECHAT_MINIPROGRAM|WECHAT_MINIGAME|WEB_APP|NATIVE_APP|DESKTOP|REJECT
  alternatives: []
  reason: "..."
  wechat_native_advantage: "..."
  platform_blocker: null
```

Only use the Mini Program score when primary route is `WECHAT_MINIPROGRAM`.
Only use the Mini Game score when primary route is `WECHAT_MINIGAME`.
