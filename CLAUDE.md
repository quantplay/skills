# quantplay/skills

Public repo: never commit keys, tokens, account IDs or internal hostnames.

- Version lives in eight places (marketplace, the Claude, Codex, Cursor, Grok and Muse plugin manifests, server.json, SKILL.md); the Manifest checks step in `.github/workflows/test.yml` checks they match. Keep every file Markdown, text, JSON, YAML or an image: the Claude directory refuses scripts and non-standard package.json fields from an unverified organization, so the checks live inline in the workflow, not in a `.js` file.
- The repo root is the plugin for Claude, Codex, Cursor, Grok Build and Muse Code. Keep `skills/<name>/` to the skill alone: a plugin manifest inside it makes ClawHub refuse it as a skill.
- Claims must match what the server enforces: "10+ brokers", risk limits "auto-exit" (never "block"), and this listing is read-only.
- PRs go to `dev`.
