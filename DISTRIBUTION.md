# Distribution

Where Quantplay is listed for AI agents. Update a row the day its status changes, with the date.

| Surface | Mechanism | Status |
|---|---|---|
| Claude Connectors Directory | `claude.ai/directory/manage` → MCP connector, URL `/mcp/readonly` | Not submitted |
| Claude plugin directory | same portal → plugin, this repo | Not submitted |
| ChatGPT plugin directory | OpenAI Platform dashboard (org must be verified) | Not submitted |
| Official MCP Registry | `mcp-publisher publish` with `server.json`, DNS auth on quantplay.tech | Live 2026-10-25 as `tech.quantplay/quantplay` v1.0.1 (read-only first) |
| Claude Code marketplace | `claude plugin marketplace add quantplay/skills`, plugin root is the repo root | Live once merged to main |
| skills.sh | `npx skills add quantplay/skills` reads `skills/quantplay/SKILL.md`; the page appears after installs are recorded | Installable 2026-10-25, no page yet |
| Grok Build plugin marketplace | PR to `xai-org/plugin-marketplace` adding one entry to `.grok-plugin/marketplace.json`, pinned to a full commit SHA of this repo. Grok installs the whole repo: `.grok-plugin/plugin.json`, `skills/*/SKILL.md` and the root `.mcp.json`. To ship an update, bump the `sha` in that entry and rerun their `scripts/generate-plugin-index.py`; never open a second entry | Not submitted |
| ClawHub | `clawhub skill publish skills/quantplay --slug quantplay --version 1.0.1` after `clawhub login` | Not published (`quantplay` slug free 2026-10-25) |

## Why the listing is read-only

Anthropic's Software Directory Policy §4A bars software that "executes financial transactions on
behalf of users" unless permitted in writing. OpenAI lists "execution of ... investment trades" as
prohibited. Both directories sync tools from the submitted URL, so the listings use `/mcp/readonly`,
where trading tools don't exist. Trading stays available on `/mcp` as a user-added custom connector.
A written exception from Anthropic (mcp-review@anthropic.com) would allow the Claude listing to
point at the full endpoint.

## Submission checklist

Listing copy for both portals is in [LISTING.md](LISTING.md).

- [ ] Backbone with `/mcp/readonly` and tool annotations deployed
- [ ] Privacy policy covering agent access live at quantplay.tech/policies/privacy
- [ ] Docs page live at quantplay.tech/blog/quantplay-mcp-server
- [ ] Reviewer test account: populated, no 2FA, a broker connected with sample holdings
- [ ] OpenAI organization verified
- [ ] Icon (assets/icon.png), support contact, 4 example prompts (in .codex-plugin/plugin.json)
