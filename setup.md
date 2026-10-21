# Set up Quantplay

Instructions for an AI agent. Follow them in order.

## 1. Add the MCP server

Quantplay is a hosted MCP server over streamable HTTP with OAuth. Nothing to install.

- Read-only (portfolio, P&L, market data): `https://mcp.quantplay.tech/mcp/readonly`
- Full, including trading, for users who choose it: `https://mcp.quantplay.tech/mcp`

Use the read-only URL unless the user explicitly asks to trade through you.

| Client | How |
|---|---|
| Claude (web/desktop) | Settings → Connectors → Add custom connector → paste the URL |
| ChatGPT | Settings → Apps → Advanced settings → Developer mode → Create app → paste the URL, OAuth |
| Claude Code | `claude mcp add --transport http quantplay https://mcp.quantplay.tech/mcp/readonly` then `/mcp` → quantplay → Authenticate |
| Codex | `codex mcp add quantplay --url https://mcp.quantplay.tech/mcp/readonly` then `codex mcp login quantplay` |
| Cursor | Add `{"mcpServers": {"quantplay": {"url": "https://mcp.quantplay.tech/mcp/readonly"}}}` to `~/.cursor/mcp.json` |

## 2. Sign in

The first tool call opens Quantplay in the browser. The user signs in and approves you,
choosing what you may do. Don't ask the user for a password, API key or token.

## 3. Verify

Call `get_accounts`. If it lists the user's broker accounts, you're connected. Tell the
user which accounts you can see.

## Headless agents

An agent that can't open a browser can send an API key as an `X-Api-Key` header, from
Quantplay → Settings → Developer. A key can do everything the account can, so prefer OAuth.
