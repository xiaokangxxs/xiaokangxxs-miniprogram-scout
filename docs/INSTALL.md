# Installation & Agent Compatibility

Version: 1.3.2

## Recommended: Skills CLI

The Skill is hosted on GitHub. It does **not** need to be published as an npm package.

The command works like this:

```text
npx → downloads the npm package "skills" (the CLI)
skills CLI → fetches this repository from GitHub
GitHub repository → installs the valid SKILL.md and referenced files into the selected Agent
```

For Agent runtimes that support the common Skills CLI workflow:

```bash
npx skills add xiaokangxxs/xiaokangxxs-miniprogram-scout
```

For non-interactive/automation use:

```bash
npx skills add xiaokangxxs/xiaokangxxs-miniprogram-scout --yes
```

As of **2026-11-06**, the current public `skills` CLI requires **Node.js 22.20+**. Check the current npm/skills.sh documentation if this changes in the future.

The CLI's anonymous install telemetry can be disabled with:

```bash
DISABLE_TELEMETRY=1 npx skills add xiaokangxxs/xiaokangxxs-miniprogram-scout
```

A skills.sh listing is **not required** for installation. The official FAQ states that skills can appear in the directory automatically after users install them through the CLI.

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

## Node version note

There are two separate Node requirements:

- **Skills CLI install**: Node 22.20+ as of this release.
- **Repository self-check scripts**: Node 18+ is sufficient.

If your machine has an older Node version and you do not want to upgrade, use the git clone or single-file fallback.

## Validate installation

```bash
npm run validate
npm run scan:secrets
npm run check
```

No npm dependencies are required for these repository checks.
