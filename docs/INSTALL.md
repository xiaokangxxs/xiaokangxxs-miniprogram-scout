# Installation & Agent Compatibility

Version: 1.3.1

## Recommended: Skills CLI

For Agent runtimes that support the common Skills CLI workflow:

```bash
npx skills add xiaokangxxs/xiaokangxxs-miniprogram-scout
```

After installation, verify that the full directory is present — not only `SKILL.md`.

Required directories:

```text
references/
assets/
docs/
evals/
scripts/
```

Run:

```bash
npm run check
```

## Git clone fallback

```bash
git clone https://github.com/xiaokangxxs/xiaokangxxs-miniprogram-scout.git
```

Place the cloned folder in the Skill/project-instruction directory used by your Agent.

## Single-file fallback

If the Agent only accepts one instruction file, use:

```text
UNIVERSAL_SINGLE_FILE.md
```

This is intentionally less modular than the full Skill but keeps the main routing and scoring logic.

## Agent patterns

### Claude Code / Codex / Cursor / OpenClaw / other Skill-capable Agents

Prefer the full repository. The Agent should load `SKILL.md` and read referenced files on demand.

### Project/knowledge-file Agents

Upload or attach:

1. `UNIVERSAL_SINGLE_FILE.md`
2. optionally the most relevant files under `references/`

### Offline/no-network Agents

The Skill can still score and convert opportunities if the user provides:

- CSV / JSON
- HTML leaderboard export
- product URLs copied as text
- previous Scout report / Champion Board

The Agent must disclose that fresh discovery was not performed.

## Credentials

Prefer the host Agent's Secret Store.

Local environment example:

```bash
cp .env.example .env
```

Then configure:

```text
PRODUCTHUNT_TOKEN=...
GITHUB_TOKEN=...
```

Do not paste real secrets into repository files, test prompts, screenshots or public issues.

## Product Hunt behavior

- Token available → official API mode
- No token, browser available → limited public-web fallback
- Neither available → mark source unavailable/pending auth

Fallback results must never be presented as API-complete data.

## Validate installation

```bash
npm run validate
npm run scan:secrets
npm run check
```

No npm dependencies are required for these repository checks.
