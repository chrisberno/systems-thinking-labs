# SPOK OS — Ring → Folder Mapping

How each ring of the diagram lines up with the **actual** SPOK filesystem + systems
(verified against `~/SPOK` and the vaults on 2026-06-08). This is the bridge between the
abstract onion and the real machine.

## Terminology — two vocabularies for the same rings

| Ben's term | Our term (Operation Hippocamp) |
|---|---|
| Context | **Brain** = Hippocampus + Cortex |
| — | **Hippocampus** = deepspok (fast semantic recall, vector DB) |
| — | **Cortex** = the 4 vaults (structured long-term knowledge) |

> ⚠️ The Context ring is the **whole Brain**, not just the Cortex. "Cortex" = the vaults
> *only*; calling the ring "Cortex" silently drops deepspok. Use **Brain** (= deepspok + vaults).

## The mapping (verified)

| Ring | Our name | Real folders / systems | State |
|------|----------|------------------------|-------|
| **AI Agent** (body + soul) | Substrate + Soul | **Body** = Claude Code / Goose / Sprok (external harness). **Soul** = `~/SPOK/CLAUDE.md` + `~/SPOK/agents/*.md` | ⚠️ soul *scattered* — no `soul.md` yet |
| **Context** | **Brain** | deepspok engine room (`~/SPOK/v2`) + 4 vaults + `~/SPOK/knowledge/` + per-project `CLAUDE.md` (local nouns) | ✅ strong |
| **Connectors** | MCP layer | `~/SPOK/mcp/` (boardroom-bot, google-workspace, paperclip, peopleperson) + `~/SPOK/mcp-servers/` + registered MCPs (deepspok, slack, twilio, …) | ✅ real |
| **Capabilities** | Skills / routines / loops | `~/SPOK/skills/` ← **does not exist yet**. Today scattered across `~/SPOK/workflows/`, `prompts/`, `scripts/`, `~/.claude/skills/`, + SPOK Engine (routines) | ❌ **the gap** |

## The 4 vaults (Cortex)

| Vault (brain repo) | Domain |
|---|---|
| `~/projects/ONREB/vault/onreb-vault` | business + SPOK → vault.onreb.ai |
| `~/projects/connie/vault/connie-vault` | Connie → vault.connie.one |
| `~/projects/chrisberno.x/vault/chrisberno-vault` | personal → vault.chrisberno.com |
| `~/projects/chrisberno.dev/vault/chrisberno-dev-vault` | devdocs → docs.chrisberno.dev |

## What the mapping reveals (the payoff)

The two rings that map to **real, consolidated folders** (Brain, Connectors) are our **strong**
ones. The two with **no clean home** — **Soul** (scattered in CLAUDE.md / agents / memory) and
**Capabilities** (no `~/SPOK/skills/` germline yet) — are **exactly the two gaps** diagnosed in the
2026-06-08 paradigm session (ONR-107). Inside-out, our **core** and our **outer ring** are the
unfinished work. The folder structure independently confirms the diagram's weak spots.

## Don't dumb Context down to "a folder"

Ben's Context is a folder of markdown (`Context/business.md`…). **Ours is richer** — a live
vector-DB memory organ (deepspok) **+** four structured vaults. We have a *brain*, not a folder.
That's an advantage; keep it.

## Related

- Diagram model: `config.json` · render: `spok_ai_os.py` · current: `spok-ai-os-v1.svg`
- Tickets: **ONR-108** (this diagram) → child of **ONR-107** (the paradigm + the two gaps)
