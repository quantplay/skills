# Directory listing copy

Paste-ready answers for the Claude developer portal (`claude.ai/directory/manage` → MCP connector)
and the ChatGPT plugin submission. Limits are the portal's; character counts are noted.

## Connection

- **Server URL:** `https://mcp.quantplay.tech/mcp/readonly`
- **Authentication:** OAuth with dynamic client registration (PKCE S256). No Anthropic-held credentials.
- **Users connect to:** one URL.

## Listing

**Name** (≤100): `Quantplay`

**One-liner** (≤200, 75 chars):
> Ask about your Indian broker accounts: positions, P&L, margins and options.

**Description** (≤2,000):
> Quantplay connects Claude to your broker accounts across 10+ Indian brokers, including Zerodha,
> Upstox, Angel One, Kotak, Finvasia, Flattrade, Alice Blue, Motilal Oswal, IIFL and Jainam, through
> one sign-in.
>
> Ask in plain English about your open positions, holdings, today's orders, available margin, live
> and historical P&L, win rate and payoff, option chains for NIFTY, BANKNIFTY and other indices,
> expiries, historical candles and live quotes. Claude can compare accounts side by side, explain
> which positions drove a day's P&L, identify the strategy behind a set of option legs, or flag
> concentration in a portfolio.
>
> This connector is read-only. It cannot place, modify or cancel orders, square off positions, or
> change risk limits. You sign in to Quantplay and approve Claude on a consent screen, and you can
> disconnect it at any time in Quantplay → Settings → AI Integration.
>
> Requires a Quantplay account (free plan available) with at least one broker account linked.

**Categories:** Finance · Productivity

**Documentation URL:** `https://quantplay.tech/mcp`
**Privacy policy URL:** `https://quantplay.tech/policies/privacy`
**Support contact:** `hello@quantplay.tech`
**Icon:** `assets/icon.png`
**Slug (permanent):** `quantplay`

## Use cases

- Daily P&L review across several broker accounts.
- Portfolio and holdings analysis: concentration, sector exposure, drawdown on positions.
- Options analysis: identifying strategies across legs, reading the option chain and expiries.
- Margin checks before the user trades in their broker app.

**What users need before connecting:** a Quantplay account and at least one broker account linked
in Quantplay. Free plan available.

**Reads or writes:** reads only.

## Company

- **Company:** Quantplay Technologies Private Limited
- **Website:** `https://quantplay.tech`
- **Primary contact:** hello@quantplay.tech

## Data handling

- **API ownership:** our own (Quantplay's API, which reads the user's broker accounts on their behalf).
- **Personal health data:** no. **Sponsored content:** no.

## Test & launch (reviewer access)

Fill in before submitting. Reviewers must get a fully populated account with no 2FA or sign-up:

- Username: `<demo username>`
- Password: `<demo password>`
- The account has `<broker>` linked with sample holdings and positions.
- Steps: add the connector URL above → Connect → sign in with the credentials → Approve on the
  Quantplay consent screen → ask "What's my P&L today across all my accounts?".

## Compliance notes

- **Financial transactions:** the submitted endpoint exposes no tool that executes a transaction.
  Trading tools exist only on `https://mcp.quantplay.tech/mcp`, which is not part of this listing.
  Every tool on the listed endpoint is annotated `readOnlyHint: true`.
- **Prompt injection:** tool results are broker data (numbers, symbols, account nicknames) returned
  to the user who owns them; no third-party content is fetched.
- **Conversation data:** Quantplay doesn't receive or store conversations.

## ChatGPT specifics

- **Org verification:** required in the OpenAI Platform dashboard before submitting.
- **Name:** `Quantplay`. Don't append "MCP" or "Plugin".
- **Example prompts:** the four in `.codex-plugin/plugin.json` → `interface.defaultPrompt`.
- **Commerce:** none. The plugin doesn't sell, show plans or link to checkout.
