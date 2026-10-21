# Distribution

Where Quantplay is listed for AI agents. Update a row the day its status changes, with the date.

| Surface | Mechanism | Status |
|---|---|---|
| Claude Connectors Directory | `claude.ai/directory/manage` → MCP connector, URL `/mcp/readonly` | Not submitted |
| Claude plugin directory | same portal → plugin, this repo | Not submitted |
| ChatGPT plugin directory | OpenAI Platform dashboard (org must be verified) | Not submitted |
| Official MCP Registry | `mcp-publisher publish` with `server.json`, DNS auth on quantplay.tech | Not submitted |
| Claude Code marketplace | `claude plugin marketplace add quantplay/skills` | Live once merged to main |

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
- [ ] Docs page live at quantplay.tech/mcp
- [ ] Reviewer test account: populated, no 2FA, a broker connected with sample holdings
- [ ] OpenAI organization verified
- [ ] Icon (assets/icon.png), support contact, 4 example prompts (in .codex-plugin/plugin.json)
