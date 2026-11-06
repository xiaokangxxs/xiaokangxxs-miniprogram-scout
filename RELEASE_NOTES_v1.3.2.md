# xiaokangxxs-miniprogram-scout v1.3.2

## Theme

**Visual open-source experience + verified Skills CLI installation model**

## Added

- README hero workflow image.
- Dual Mini Program / Mini Game scoring image.
- Dated latest-run preview image.
- `docs/LATEST_RUN.md` containing a real Scout run from 2026-11-06:
  - Top 10 WeChat Mini Programs
  - Top 10 WeChat Mini Games
  - Cross-category Best Bets
  - Top 3 Mini Program requirement conversions
  - Top 3 Mini Game requirement conversions
  - source snapshot and evidence limitations

## Corrected installation documentation

`npx skills add xiaokangxxs/xiaokangxxs-miniprogram-scout` does **not** mean this repository is published to npm.

The actual path is:

```text
npm/npx → skills CLI → GitHub repository → Agent skill directory
```

The repository is now marked `private: true` in `package.json` to prevent accidental `npm publish`.

As of 2026-11-06, the public Skills CLI requires Node.js 22.20+.

## Core behavior

No intentional scoring-weight change from v1.3.1.
