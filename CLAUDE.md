# quantplay/skills

Public repo: never commit keys, tokens, account IDs or internal hostnames.

- Version lives in six places (marketplace, four plugin manifests, server.json, SKILL.md); `npm test` checks they match.
- Claims must match what the server enforces: "10+ brokers", risk limits "auto-exit" (never "block"), and this listing is read-only.
- PRs go to `dev`.
