# SPOK OS — Core Ring Definition: THE AGENT

> The center ring, locked 2026-06-11. The AGENT is the acting entity. It is composed of
> **two elements**, and the entire design depends on keeping them separate — **one metered,
> one owned.** Supersedes the earlier "AI Agent / body + soul" framing ("body" was dropped:
> in biology the body includes the brain and nerves, which are their own outer rings, so it
> double-claimed territory).

---

## AGENT = the LLM it's *wired to* + the Soul it's *provided*

The verbs carry the lesson:
- **wired to** the LLM → a temporary, pluggable connection (metered).
- **provided** the Soul → given once and kept (owned).

The identity of the agent lives in the **Soul**. The LLM is only the engine it happens to be
running on today. **Swap the LLM, the agent stays itself.**

---

## Element 1 — THE LLM (the engine it's wired to)

- **What it is:** the raw reasoning model doing the thinking in the moment — horsepower,
  fluency, speed.
- **Source:** *metered / external — token-based and variable (you pay per token of use), never
  a flat lease.* Whatever model the harness is wired to at runtime —
  **Claude Opus 4.8 via Claude Code today**; GPT, or a local model, elsewhere (Goose, Sprok).
- **Form of the source:** **not a repo file.** It is a runtime wire to a vendor's model,
  provisioned by the harness/body — not authored by us.
- **Property:** **FUNGIBLE.** Swap it freely; the agent's identity must not move.

## Element 2 — THE SOUL (the values it's provided)

- **What it is:** the value function — *allegiance, values, taste, stance, refusals.* Who the
  agent is.
- **Source:** *authored / owned* — the SPOK germline (version-controlled, inheritable):
  - `~/SPOK/CLAUDE.md` — the doctrine / value slice
  - `~/SPOK/agents/*.md` — the personas (spok-executive + the C-suite)
  - **Footnote (today's reality):** a third store exists outside the germline —
    `~/.claude/…/memory/feedback_*.md` (the trait files: Forge gene, candor, one-thread, etc.).
    It is the purest behavioral soul today but is **body-coupled** (local to one harness,
    doesn't sync via git). Consolidation target: fold all of it into a single `soul.md`.
- **Property:** **PERMANENT.** Provided once, inherited by every future agent, survives an
  LLM swap.

---

## The contrast that defines the core

| | THE LLM | THE SOUL |
|---|---|---|
| Relationship | **wired to** (metered) | **provided** (owned) |
| Source | a runtime wire to a vendor's model | files we author |
| Where it lives | the harness (Claude Code / Goose / Sprok) | `~/SPOK/` germline (→ `soul.md`) |
| On a swap | replaced | unchanged |
| Is it the identity? | no — just today's engine | **yes — this is who the agent is** |

**One line:** the AGENT is a *metered engine running an owned set of values* — and only the
values are "you."

## Diagram encoding (current)

- Ring headliner: **AGENT** · sublabel: **LLM + Soul**
- Source tag (right): `LLM = token-metered model · Soul = CLAUDE.md + agents/`
- Outcome: **DETERMINES YOUR OUTCOMES ★** — the result is a product of the two halves:
  the **LLM** it's wired to × the **Soul** it's provided. (Supersedes "carries your judgment":
  judgment is one feature; the agent shapes the *whole* outcome, and only these two inputs do.)
