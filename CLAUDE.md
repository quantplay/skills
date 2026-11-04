# quantplay/skills

Public repo: never commit keys, tokens, account IDs or internal hostnames.

- Version lives in seven places (marketplace, the Claude, Codex, Cursor and Grok plugin manifests, server.json, SKILL.md); `npm test` checks they match.
- The repo root is the plugin for Claude, Codex, Cursor and Grok Build. Keep `skills/<name>/` to the skill alone: a plugin manifest inside it makes ClawHub refuse it as a skill.
- Claims must match what the server enforces: "10+ brokers", risk limits "auto-exit" (never "block"), and this listing is read-only.
- PRs go to `dev`.
