# SPOK OS — Ring 3 Definition: CAPABILITIES

> Ring 3, locked 2026-06-11. **CAPABILITIES = what the agent can DO** — its skills,
> routines, and loops. Unlike Rings 1–2 (two halves each), this ring is **one layer expressed
> in three modalities.** Companion to `core-agent-definition.md`, `brain-definition.md`; deeper
> reasoning in `capabilities-notes.md`.

## Locked (2026-06-11)
- **Headliner:** **CAPABILITIES** — the umbrella; skills/routines/loops are its forms.
- **Outcome:** **GETS THE JOB DONE** — covers all three modalities; the ring where the agent
  *acts*. (The prior "automates your work" was wrong for on-demand skills — those aren't
  automation, they're *doing*.)
- **Tag:** `CAPABILITIES` (aligned to `THE AGENT` / `THE BRAIN`).

---

## The governing law (the heart of this ring)

> **Determinism sinks to code; judgment floats to the LLM.**

Capabilities is the **judgment / orchestration layer.** It decides *which* tool, in *what*
order, *if* now is the moment — but the actual deterministic work executes in the tools below
(the **Connectors** ring). A **skill = a declarative manifest (`SKILL.md`) that orchestrates
deterministic tools.** The manifest floats on the LLM; the tools sink to code.

## The three modalities (the ring's parts)

- **Skills** — on-demand verbs. You invoke; it runs. *(reactive)*
- **Routines** — scheduled automation (SPOK Engine briefings, cron). *(proactive, timed)*
- **Loops** — autonomous, recurring evaluate-and-act cycles. *(proactive, self-driven)*

*Optional 2-part grouping if we want a clean split: **reactive** (Skills) vs **autonomous**
(Routines + Loops) — i.e. what it does when you ask vs. what it does on its own.*

## How it works

- A capability **orchestrates deterministic tools** (Connectors). The LLM supplies judgment
  (which / when / what order); the tools supply execution.
- **Graceful degradation:** a weaker LLM sequences more crudely but **cannot corrupt a
  deterministic tool** — the invoice still posts correctly, because the logic lives in the
  *tool*, not the prompt.
- **Refusal fencing:** destructive capabilities are gated by the **Soul's Refusals** (Ring 1).
  The LLM *proposes* the intent; the soul's hard nos drop the floor before execution.

## The proprietary moat (the SPOKaaS thesis)

- **Owned MCP servers as universal primitives:** PeoplePerson (CRM) · VoiceOver (call-center) ·
  boardroom-bot (governance) · paperclip (issues) · cal-direct (scheduling).
- **Vertical-agnostic:** a law firm and a candy shop run the **same** capabilities. Vertical
  fluency comes from the **Brain** (Ring 2), not from rewriting capabilities. *Reconfigure the
  brain, never fork the execution layer.*

## Cross-ring wiring

- **Soul (Ring 1)** → *gates* capabilities (Refusals + Taste: which tool, is it allowed).
- **Brain (Ring 2)** → makes the *same* capabilities vertical-fluent (per-tenant context).
- **Connectors (Ring 4)** → the deterministic tools that capabilities orchestrate.

## Status honesty (real vs aspirational)

- ✅ **Real / live:** the owned MCP tooling (PeoplePerson, VoiceOver, boardroom-bot, cal-direct,
  paperclip); routines via the SPOK Engine.
- ⚠️ **Pending — the second germline:** `~/SPOK/skills/` **does not exist yet.** Capabilities are
  scattered across `~/SPOK/prompts/`, `~/SPOK/scripts/`, `~/.claude/skills/`, and the SPOK
  Engine. Consolidating them into one heritable `~/SPOK/skills/` (parallel to `soul.md`) is the
  unfinished work — the **second of the two germlines** from ONR-107. Tracked in `OPEN-ITEMS.md`.

## Diagram encoding (current)

- Ring headliner: **CAPABILITIES** · sublabel: `skills · routines · loops`
- Tag: `CAPABILITIES` · Outcome: **GETS THE JOB DONE**
- Source: `~/SPOK/skills/ — germline (pending)`
