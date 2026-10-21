# Quantplay Skills

Official Quantplay plugin and skills for AI agents: Claude, ChatGPT, Codex, Cursor and any MCP client.

Quantplay connects an agent to your broker accounts across **10+ Indian brokers** through one
sign-in. Ask about positions, holdings, orders, margins, P&L and option chains in plain English.

## The Quantplay MCP server

```
https://mcp.quantplay.tech/mcp/readonly
```

Streamable HTTP, hosted, OAuth 2.1 with PKCE and dynamic client registration. Nothing to install
and no key to paste: the first call opens Quantplay so you can sign in and approve the agent.

| Endpoint | Tools | Use |
|---|---|---|
| `https://mcp.quantplay.tech/mcp/readonly` | 17 read-only tools | Directory listings and this plugin |
| `https://mcp.quantplay.tech/mcp` | All 24, including orders | Add it yourself as a custom connector if you want the agent to trade |

Every tool is annotated (`readOnlyHint`, `destructiveHint`, `openWorldHint`). On the full endpoint
you choose per agent whether it may trade or change risk limits, and you can disconnect any agent
in Quantplay → Settings → AI Integration.

## Install

Paste this into any agent:

```
Set up Quantplay by following https://raw.githubusercontent.com/quantplay/skills/main/setup.md
```

**Claude Code**

```
claude plugin marketplace add quantplay/skills
claude plugin install quantplay@quantplay-skills
```

## Risk limits

Stoploss, target and kill switch are set per broker account in Quantplay, and Quantplay auto-exits
positions when one is breached, whoever opened them. No agent can change the kill switch.

## Privacy

What Quantplay collects, why, how long it keeps it and how to delete it:
[quantplay.tech/policies/privacy](https://quantplay.tech/policies/privacy). In short: an agent sees
only what you approve; Quantplay stores which agents you connected and when they were last used;
it doesn't store your conversations.

## Support

hello@quantplay.tech · [quantplay.tech/support](https://quantplay.tech/support)

## License

MIT
