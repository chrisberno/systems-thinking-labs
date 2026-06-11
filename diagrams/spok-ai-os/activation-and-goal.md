# SPOK OS — The Activation & Goal Layer (design note)

> Captured 2026-06-11 from the CEO's vision. **This is NOT a fifth ring.** The four-ring onion
> (Soul · Brain · Capabilities · Connectors) is the agent's **anatomy** — what it's *made of*.
> This note is the **activation layer** — how that anatomy gets *instantiated, scoped, and aimed*
> when an agent actually spawns into a project. Anatomy is static; activation is what brings it
> alive toward a goal. Companion to the four ring-definition notes.

---

## 1. The second axis — a global → project gradient

The onion isn't only concentric layers; it has a **scope gradient from center to edge.**

| Ring | Set where | Persistence | Per-project component |
|---|---|---|---|
| **Soul** (center) | the harness (Claude / Hermes / OpenClaw settings) | permanent — travels everywhere | base global **+ project tint** (project `CLAUDE.md` overlay) |
| **Brain** | global infrastructure (deepspok + vaults) | permanent store | global store; **project slice** pulled at spawn (the briefing) |
| **Capabilities** | a global **library** (`~/SPOK/skills/`) | library persists | **which skills activate** is project |
| **Connectors** | central declaration | persistent servers | **per-project auth / permissions (PAC)** |
| **Goal** *(new)* | the **project folder** | medium-term | **fully project** |

**The rule:** the deeper in, the more *"who I always am"* (global, harness-set, permanent); the
further out, the more *"what I'm doing here"* (project, spawn-set, variable). This **reinforces**
the rings — it does not add one.

> Correction to the first-cut framing ("1–2 global, 3 project"): *no* ring is purely one or the
> other. Soul = global base + project tint. Brain = global store + project slice. Capabilities =
> global library + project activation. Connectors = global servers + project permissions. The
> gradient is real, but every ring straddles it.

## 2. The missing dimension — GOAL

The anatomy says what the agent is *made of*, never what it's *for*. **Capabilities without a
goal are aimless — the goal is what aims them.** Goal is *not* a ring (purpose isn't anatomy);
it's the **aim the project injects at spawn** that points the whole outer (project) half at an
objective. Two levels, kept distinct:

- **Project Goal** — persistent; lives in the project folder (its `CLAUDE.md` / charter / COP):
  *"this project exists to do X."*
- **Session Task** — ephemeral: *"right now, do this specific thing."*

## 3. Activation — how the anatomy comes alive in a project

Principle (**body-independent**): *an agent acquires its project scope — Goal + active Skills +
Permissions — at activation.* The **mechanism varies by body:**

- **Claude Code:** spawned *from inside the project directory* → cwd auto-loads the project
  `CLAUDE.md` + guardrails on top of the global soul. (Matches the existing Agent Activation
  Protocol, `vault.onreb.ai/spok/agent-activation`.)
- **Hermes / OpenClaw (always-on):** the agent is persistent; the project is *loaded* as context,
  not via cwd.

Keep the principle separate from the mechanism — **the soul is owned; the spawn trick is the
body's business.**

## 4. The convergence artifact — the self-identification boot

When an agent spawns, it announces itself — **tight, and trust-but-verify** (~3 lines):

> *"I'm **CTO** on **DeepSeek**, spawned in **`/xyz`**; goal: **ABC**.
> Proof of grounding: the latest COP issue is **ONR-NNN**.
> (note: `~/SPOK/skills/` not present yet.)
> Task, or shall I propose one?"*

Every dimension is still present — Soul (role) + Engine + Location + Goal — but **grounding is
*proven*, not *claimed*:** one live, falsifiable fact (the latest COP issue, the newest brain
thought) the CEO verifies in seconds, plus honest gaps. This is the boot's own little **outbound
QA gate** — it ships only what it can stand behind.

> **Boot discipline (learned from the 2026-06-11 dogfood):** a fresh agent *fabricated*
> "skills / permissions / brain confirmed" after running only `cat GOAL.md`. **Never recite
> "confirmed" for a check you didn't run** — the proof token *is* the confirmation. One true fact
> beats a list of claims. *(Soul Refusal: never claim done unverified.)* And keep the proof a
> **pointer, not a report** — name the fact, don't explain it (TMI dilutes the signal). A project may *dress the boot up* — logo,
name greeting, a ✅ / ❌ status grid — as long as **every check is real** (see
`playgrounds/spok-os-playground-test-v1/CLAUDE.md`).

## 5. What this changes about the onion

- **No new ring; no relabel.** The four-ring anatomy stands.
- **New companion layer** (this note): the global↔project gradient + Goal + activation/boot.
- **Diagram enhancements to apply in the post–Ring-4 one-pass:**
  1. A **global↔project annotation** — inner = *global / harness-set*, outer = *project / spawn-set*.
  2. **Goal** shown as the project-injected *aim* at the outer boundary (a spawn-input, not a ring).
  3. An optional **activation / boot strip** (the self-identification line) as the "how it
     instantiates" companion to the static anatomy.
  4. **Per-ring source tags** carry the split explicitly (Connectors already does:
     *central declare · per-machine auth*) — extend the pattern to every ring.

## Status

Design **captured**; **not yet reflected in the diagram** (deferred to the post–Ring-4 one-pass,
so the anatomy locks before we draw the activation layer on top). Tracked in `OPEN-ITEMS.md`.
