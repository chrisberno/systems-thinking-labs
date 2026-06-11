# SPOK OS — Ring 4 Definition: CONNECTORS

> Ring 4 — the **OUTERMOST band, the I/O membrane** (CEO-locked as the truer systems model:
> everything ingests *in* / ships *out* through here). Locked 2026-06-11. Companion to the other
> three ring notes; deeper reasoning in `connectors-notes.md`.

## Locked (2026-06-11)
- **Headliner:** CONNECTORS (MCP-concrete; the locked outermost membrane).
- **Sublabel:** `MCP — the I/O membrane`.
- **Tag:** `CONNECTORS` · **Outcome:** **CONNECTS YOU TO THE WORLD** — bidirectional (senses in,
  acts out); supersedes the one-directional "accesses your tools." *(Outcome wording was SPOK's
  call in god mode — easy to change.)*
- **Source:** `~/SPOK/mcp/ + registered MCPs`.

## The master law (the heart of this ring)

> **Determinism at the membrane; judgment inward.**

The membrane is a **reflex arc:** inbound = afferent (sensory), outbound = efferent (motor).
Reflexes are deterministic and **never bother the brain** — only *novel* signals needing a real
decision escalate inward. **The LLM is never in the I/O hot path.**

## The two gates — care lives INWARD; the membrane only enforces

The hardest, most important idea on this ring. **What crosses *in* matters as much as what goes
*out*** — junk ingested becomes junk compounded in the cortex forever. BUT almost all of that
care (source quality, citation, "does this meet the goal," metadata, handoff) is **judgment** —
and judgment is *inward*. Put it in the connector and you rebuild the **tumor** the Soul-Blindness
Mandate forbids (and lose multi-tenancy). So: **the membrane is the disciplined chokepoint (the
*where*); the care is supplied inward (the *what/why*).** Two gates, each with a dumb half
(membrane) and a smart half (inner rings):

### Inbound gate — the bilayer ingestion side
- **Membrane (deterministic, ZERO-FRICTION):** capture raw, `202 Accepted` in ms, **stamp
  provenance** (source / citation, at the moment of crossing), dedup, throttle, transduce the
  *wrapper*. Purge only *obvious* junk. **No classification, no judgment** — because scrutiny at
  the door *is* friction (the cortisol the bilayer exists to kill).
- **Brain (judgment, later):** whether something is *semantically* junk or vault-worthy is decided
  at the **REM / dream sort** (Ring 2), human-in-the-loop, where judgment is cheap. Never dropped
  at the edge ("you'd discard signal you didn't yet know was signal"). Store-per-standards is a
  Brain job.
- **The paradox resolved:** "careful ingestion" is satisfied *by deferring the care, not by gating
  at the door.* Capture frictionlessly; scrutinize thoroughly at the sort.

### Outbound gate — the QA / definition-of-done side
- **Inner rings (judgment):** before anything ships, a **definition-of-done check** — does it meet
  the **GOAL**? (← the Goal dimension) · right destination? · correct meta / tags? · what *else*
  needs updating? · and the **handoff package** (what's left + context, so the next human/agent
  boots into continuity). Supplied by Goal + Soul-taste + Brain-standards + Capabilities.
- **Membrane (deterministic):** once the verdict is "go," ship reliably — retries, idempotency,
  reconciliation. The connector **never judges the goal**; it refuses to transmit until the inward
  verdict clears.
- **pgvector note:** pgvector *recalls* related docs; it does **not** auto-*update* them.
  Propagating edits is Brain **synthesis** (judgment), merely *triggered* by recall — the vectors
  don't self-heal the wiki.

## The two laws beneath it

- **Reconciliation Law (outbound):** no fantasy atomicity across third-party APIs. One source of
  truth per fact; idempotency keys + outbox + webhook reconciliation *detect and heal* drift.
- **Soul-Blindness Mandate (the boundary):** an MCP server is a dumb, stateless, domain-bounded
  adapter — **soul-blind and context-blind**, never knows whose values it serves. That blindness
  is *exactly* what makes the same connector multi-tenant-shareable. Embed judgment → tumor.

## Cross-ring wiring

- **Strictly one-way:** inner rings depend on connectors; connectors never know the inner rings.
- **Capabilities (Ring 3)** orchestrate the deterministic connectors — capability *decides*,
  connector *executes*.
- **Project-facing security edge:** per-project **permissions (PAC)** gate which connectors are
  authorized — the project/spawn-scoped face of this ring (see `activation-and-goal.md`).

## Status honesty (real vs aspirational)

- ✅ **Real / live:** owned MCP connectors — PeoplePerson, VoiceOver, boardroom-bot, cal-direct,
  paperclip. The *outbound tool layer* is real.
- ⚠️ **Designed, not built:** the bilayer edge (Digital Thalamus, transduction, throttling, the
  **REM / deep-sleep purge**) is mock-stage; outbox + reconciliation are committed *laws*, not
  implemented. The *inbound sensory edge* is largely aspirational.
- 🔎 **Gap flagged for Phase-0:** the **outbound QA + handoff gate has no home in the bilayer
  spec** — Phase-0 was ingestion-only. This is a gap in the *bilayer design itself*, not just this
  note.
- 🧭 **Bilayer framing:** bilayer is a **stepping-stone** toward SPOK OS — it may never ship;
  **snag only what works.** Do not treat it as a committed roadmap.

## References

- **Inbound ingestion** — HeadVroom Phase-0 (`headvroom-bilayer-mock/PHASE-0-REQUIREMENTS.md`, on
  the MINI): receptors, Digital Thalamus, transduction, zero-friction.
- **Systems mesh** — `vault.onreb.ai/techops/onreb-systems-mesh`.

## Diagram encoding (current)

- Ring: **CONNECTORS** (outermost, r350) · sublabel: `MCP — the I/O membrane`
- Tag: `CONNECTORS` · Outcome: **CONNECTS YOU TO THE WORLD**
- Source: `~/SPOK/mcp/ + registered MCPs`
