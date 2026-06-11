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

## How it boots — how an agent actually comes alive

The two elements assemble in a strict order, every session. The order *is* the architecture:

1. **The harness boots** — Claude Code (or Goose, or Sprok). The body/runtime: an empty shell.
   No intelligence, no identity yet.
2. **A model is selected → the engine is wired in.** Now there's raw reasoning power — a
   *blank genius*: fully capable, but anonymous. It could be anyone's agent; it is no one's yet.
3. **The soul blueprint loads into context.** The first thing the agent does is read its soul
   from files: `~/SPOK/CLAUDE.md` (auto-loaded at boot, always), then the role persona
   `agents/spok-executive.md` (on activation — "SPOK please"), plus the memory traits. The
   generic engine becomes **this** agent. Identity installed.
4. **The agent is live** — a metered engine now carrying an owned soul, ready to act.

### The load-bearing truth (why any of this works)

**The soul is installed by being *read into the context window* at boot — NOT trained into the
model's weights.** That single fact is the foundation of the whole design:

- **Swap the engine, keep the soul.** The same files pour into any model (Claude, GPT, local).
  Identity survives a swap because it was never *inside* the model to begin with.
- **The soul is git, not fine-tuning.** You version-control a blueprint; you don't retrain.
  Edit `CLAUDE.md`, and every future boot — on any engine — inherits it instantly.
- **Boot is re-instantiation, not memory.** Each session the engine starts blank and is
  *re-made* into the agent by re-pouring the blueprint. The files are the continuity; the
  running process is disposable. *(Not amnesia: the **Soul** re-loads identical every boot;
  cross-session **memory** — what the agent knows and has learned — is the **Brain**'s job
  (Ring 2), not the core's.)*

> So "select your model, then it gets its soul from CLAUDE.md/agents" is exactly right — and
> the reason it matters is that the soul lives in *loadable files*, not in the rented engine.

---

## Element 1 — THE LLM (the engine it's wired to)

- **What it is:** the raw reasoning model doing the thinking in the moment — horsepower,
  fluency, speed.
- **Source:** *metered / external — token-based and variable (you pay per token of use), never
  a flat lease.* Whatever model the harness is wired to at runtime —
  **Claude Opus 4.8 via Claude Code today**; GPT, or a local model, elsewhere (Goose, Sprok).
- **Form of the source:** **not a repo file.** It is a runtime wire to a vendor's model,
  provisioned by the harness/body — not authored by us.
- **Two parts, both rented:** the **harness** (Claude Code / Goose / Sprok) is the *loader /
  runtime* that boots and wires everything up; the **model** is the *metered reasoning engine*
  it wires to — the program vs. the brain it runs. We label this whole half "LLM" for
  simplicity, but harness and model are both swappable.
- **Property:** **FUNGIBLE.** Swap it freely; the agent's identity must not move.

## Element 2 — THE SOUL (the values it's provided)

- **What it is:** the value function — *allegiance, values, taste, stance, refusals.* Who the
  agent is.
- **Source:** *authored / owned* — the SPOK germline (version-controlled, inheritable):
  - `~/SPOK/CLAUDE.md` — the doctrine / value slice
  - `~/SPOK/agents/*.md` — the personas (spok-executive + the C-suite)
  - `~/SPOK/soul/traits/*.md` — behavioral traits (Forge gene, candor, one-thread, etc.),
    **rescued 2026-06-11** from `~/.claude/…/memory/feedback_*.md` (which was body-coupled —
    local to one harness, not in git). Now canonical + git-synced; the `~/.claude` copies remain
    as the live harness projection until sync is wired. Full fold into a single `soul.md`
    (the 5 invariants) is pending the Values forge — tracked in `OPEN-ITEMS.md`.
- **Layered, not monolithic:** the soul is a shared **base** (`~/SPOK/CLAUDE.md` doctrine,
  inherited by every agent) plus per-role **overlays** (`agents/spok-executive.md`, `cto-…`,
  `cfo-…`). There isn't *one* soul — there's a **family of personas on one shared spine.**
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
