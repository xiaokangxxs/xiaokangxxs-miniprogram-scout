# xiaokangxxs-miniprogram-scout v1.3.3

## Theme

**WorkBuddy expert-team integration**

## Added

- Dedicated `workbuddy/` source directory.
- WorkBuddy team metadata under `.codebuddy-plugin/plugin.json`.
- One lead + six specialist Agents.
- Shared WorkBuddy Skill package derived from the root Scout Skill.
- Zero-dependency avatar generator.
- WorkBuddy sync, validation and build scripts.
- CI validation for WorkBuddy config and Skill/reference drift.

## Commands

```bash
npm run sync:workbuddy
npm run validate:workbuddy
npm run build:workbuddy
```

Build output:

```text
dist/wechat-opportunity-scout-team-workbuddy.zip
```

## Behavior

No intentional change to the v1.3 Mini Program or Mini Game scoring weights.
