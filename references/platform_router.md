# Product Form Router

Version: 1.3.0

Before scoring, decide what the opportunity actually is.

Possible routes:

- `WECHAT_MINIPROGRAM`
- `WECHAT_MINIGAME`
- `WEB_APP`
- `NATIVE_APP`
- `DESKTOP`
- `REJECT`

Do not force every overseas product into a Mini Program.

## Route to WeChat Mini Program when

The primary value is completing a task/service:

- user has a concrete problem or search query;
- short sessions / use-and-go;
- scan/share/chat/search/offline QR creates lower friction;
- forms, OCR, image processing, calculators, reminders, lightweight workflows, booking, records, utilities;
- cloud/server can perform heavy background work.

Typical growth engine:

- WeChat Search
- group/chat sharing
- QR/offline entry
- public account/private-domain traffic
- repeat task trigger

## Route to WeChat Mini Game when

The primary value is play:

- the product is fun/challenge/competition first;
- a mechanic can be understood in seconds;
- replayability, mastery or progression matters;
- sessions can repeat;
- social competition/share/revival/ranking is natural;
- ads / compliant virtual payment can fit the experience.

Gamification does not automatically make a utility a Mini Game.

Do not label a game as a utility merely to bypass game-category requirements.

## Route away from WeChat when

Prefer Web/App/Desktop if the core experience requires:

- long-running foreground/background process that server architecture cannot solve;
- heavy desktop workflows;
- high-performance 3D/assets unsuitable for target WeChat constraints;
- unsupported OS/device permissions;
- platform/payment/content requirements that make WeChat a poor distribution channel;
- business value exists but WeChat contributes no real acquisition or UX advantage.

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
