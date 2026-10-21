import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const read = (p) => readFileSync(p, "utf8");
const json = (p) => JSON.parse(read(p));
const READONLY = "https://mcp.quantplay.tech/mcp/readonly";

test("every manifest carries the same version", () => {
  const skillVersion = /^version:\s*(\S+)/m.exec(read("skills/quantplay/SKILL.md"))[1];
  const versions = {
    marketplace: json(".claude-plugin/marketplace.json").plugins[0].version,
    codex: json(".codex-plugin/plugin.json").version,
    cursor: json(".cursor-plugin/plugin.json").version,
    claudePlugin: json("skills/quantplay/.claude-plugin/plugin.json").version,
    server: json("server.json").version,
    skill: skillVersion,
  };
  assert.equal(new Set(Object.values(versions)).size, 1, JSON.stringify(versions));
});

test("the plugin points at the read-only endpoint, which the directories require", () => {
  assert.equal(json("skills/quantplay/.mcp.json").mcpServers.quantplay.url, READONLY);
  assert.equal(json("server.json").remotes[0].url, READONLY);
});

test("the codex listing declares read-only capability and example prompts", () => {
  const i = json(".codex-plugin/plugin.json").interface;
  assert.deepEqual(i.capabilities, ["Read"]);
  assert.ok(i.defaultPrompt.length >= 3);
  assert.ok(statSync(i.logo.replace("./", "")).size > 0);
});

const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  if ([".git", "node_modules"].includes(f)) return [];
  return statSync(p).isDirectory() ? walk(p) : [p];
});

test("no secrets or overclaims in a public repo", () => {
  const banned = [
    [/X-Api-Key:\s*[A-Za-z0-9_-]{20,}/, "an API key value"],
    [/AKIA[0-9A-Z]{16}/, "an AWS access key"],
    [/QUANTPLAY_API_KEY=/, "a key in a URL"],
    [/blocks? (new )?orders?/i, "risk limits auto-exit, they don't block"],
    [/\b14 brokers\b/i, "say 10+ brokers"],
  ];
  for (const f of walk(".").filter((p) => /\.(md|json|js)$/.test(p) && !p.startsWith("tests"))) {
    const text = read(f);
    for (const [re, why] of banned) assert.ok(!re.test(text), `${f}: ${why}`);
  }
});
