# SPOK OS — Ring 2 Definition: THE BRAIN

> Ring 2, locked 2026-06-11. The BRAIN is the agent's memory. Like the core (AGENT = LLM +
> Soul), it is composed of **two halves** — but here the split is by *function and permanence*,
> not metered/owned: a fast, decaying **Hippocampus** and a permanent, compounding **Cortex**.
> Supersedes Ben's flat "Context" (a folder of markdown). Ours is a live organ. Companion to
> `core-agent-definition.md`; deeper reasoning in `brain-notes.md`.

---

## BRAIN = the Hippocampus it *captures into* + the Cortex it *consolidates into*

The verbs carry the lesson again:
- **capture into** the Hippocampus → cheap, instant, everything-tolerant. Nothing is judged yet.
- **consolidate into** the Cortex → earned, deliberate, permanent. Only synthesis graduates.

**Capture is free; permanence is earned.** That single rule is the whole ring. The metaphor is
not a hard drive (capture = save forever) — it's **sleep consolidation**: you take everything
in cheaply during the day, and only later, selectively, does what mattered get written deep.

---

## How it works — two flows, opposite directions

**1. The READ path = INJECTION (runtime, every turn).** When the agent reasons, the Brain
*injects* what's relevant into the live context window: a fast semantic **recall** from the
Hippocampus (deepspok / pgvector) + structured **context** from the Cortex (vault pages). The
Brain is not a passive store the agent visits — it actively feeds the reasoning. *(This is the
outcome on the diagram: **INJECTS RECALL & CONTEXT**.)*

**2. The WRITE path = CONSOLIDATION (the "sleep," deliberate).** How a thought moves from fast/
decaying to permanent/compounding:

```
capture_thought  →  HIPPOCAMPUS (deepspok, persistent inbox, auto-embedded)
                        │  12-day TTL conveyor (ages into a sorting hopper)
                        ▼
                 SORTING RITUAL  (human-in-the-loop — the "sleep")
                 ├─ PROMOTE → synthesize into a CORTEX wiki/ page  (the only path to permanence)
                 ├─ ROUTE   → tag properly, stays in the hippocampus
                 ├─ RENEW   → reset the decay clock, still hot
                 └─ PURGE   → drain it
```

The offload mechanism is **PROMOTE**. `raw/` vs `wiki/` firewall: immutable source (transcripts,
PDFs) lands in `raw/` and is never edited; only *synthesis* graduates to `wiki/`.

---

## Element 1 — THE HIPPOCAMPUS (deepspok)

- **What it is:** fast semantic recall — recency-weighted, decay-aware. The persistent **inbox**.
- **Source:** `deepspok` (Supabase + pgvector), reached via the `deepspok` MCP.
- **Key correction:** it is **NOT volatile RAM.** It's *persistent* — "working memory" by
  **function** (fast recall, recency, decay), not by volatility. **Nothing is lost at session
  end;** there is no flush.
- **Property:** **CHEAP + DECAYING.** Capture takes zero willpower; un-promoted thoughts
  downweight by age (fade, not vanish). The decay *is* the noise filter.

## Element 2 — THE CORTEX (the vaults)

- **What it is:** structured, permanent, compounding long-term knowledge — decisions, doctrine,
  runbooks, entity pages, synthesis. The **library**.
- **Source:** the 4 domain vaults (onreb · connie · chrisberno · devdocs), on the **Karpathy
  LLM-wiki** pattern — `raw/` (immutable) + `wiki/` (LLM-synthesized) + `CLAUDE.md` (schema).
- **Taxonomy = rigid skeleton + dynamic fill:** the *contract* is fixed (4-vault split, 3-layer
  layout, typed entities with frontmatter); inside `wiki/` the agent owns placement and linking
  by **Taste**.
- **Property:** **EARNED + COMPOUNDING.** Nothing lands here by default; it must be promoted,
  and what's here accumulates value over time.

---

## The contrast that defines the ring

| | HIPPOCAMPUS (deepspok) | CORTEX (the vaults) |
|---|---|---|
| Role | the inbox / working memory | the library / long-term store |
| Speed | fast semantic recall | structured, durable |
| Permanence | persistent but **decay-weighted** (fades by age) | **permanent, compounding** |
| Capture | cheap, zero-friction, everything-tolerant | **earned** — only synthesis graduates |
| Crosses over via | → **PROMOTE** (the sleep consolidation) → | ← receives promoted syntheses |

**One line:** the BRAIN captures everything cheaply into a decaying inbox, and earns permanence
for the few things that matter by promoting them, at a deliberate ritual, into a compounding
library.

---

## Cross-ring wiring (the Brain is not an island)

- **Ring 1 → Ring 2:** the **Soul supplies Taste**, and Taste *is* the filter that decides what's
  vault-worthy at the sort gate. The center governs what the Brain keeps.
- **Ring 2 → Ring 1:** the **Brain injects recall + context** into the Agent's reasoning every
  turn. The memory feeds the judgment.
- Together: *Soul filters what the Brain keeps; the Brain feeds what the Soul's agent reasons
  with.* That loop is why "carries your judgment" and "remembers your world" are one system.

---

## Status honesty (real vs aspirational — don't over-credit)

- ✅ **Real, live:** deepspok capture / search / persistence; the 4 vaults; onreb-vault fully on
  the Karpathy 3-layer; the publishing pipeline.
- ⚠️ **Designed, not yet built:** the automated **12-day TTL conveyor**; the *scheduled* sorting
  ritual; a **RAW/UNSORTED** lifecycle status (today's enum is NOW/NEXT/SOMEDAY/DONE — no
  "unsorted" slot); the `chrisberno-dev-vault` retrofit to the 3-layer pattern.
- So the **READ path (injection) is real today**; the **WRITE path (automated consolidation) is
  largely manual / aspirational.** Tracked in `OPEN-ITEMS.md` under the broader build.

## References — the deeper memory docs (vault.onreb.ai)

This ring note is the *summary*. The canonical, comprehensive write-ups live in the onreb-vault:

- **Memory Architecture — Hippocampus & Cortex** — the canonical spec: the two systems, the
  strategic / IP / SPOKaaS angle, and the full memory-consolidation lifecycle.
  → <https://vault.onreb.ai/executive/memory-architecture-hippocampus>
  *(source: `onreb-vault/executive/memory-architecture-hippocampus.md`)*
- **Memory in LLM-Based Multi-Agent Systems — Survey** — research grounding: memory types across
  agent frameworks (2024–2026).
  → <https://vault.onreb.ai/spok/documentary/research/11-multi-agent-memory-survey>
- **Cognitive Workspace: Active Memory for LLMs** — research on *active* memory management
  (Baddeley's working-memory model); underpins the "injection, not a passive store" claim.
  → <https://vault.onreb.ai/spok/documentary/research/10-cognitive-workspace>

**Related (the intake that feeds the Hippocampus):** the HeadVroom **Phase-0 sensory/ingestion
spec** — `headvroom-bilayer-mock/PHASE-0-REQUIREMENTS.md` (on the MINI). That's Ring 4
(Connectors) territory — the receptors + Digital Thalamus that capture *into* this ring.

## Diagram encoding (current)

- Ring headliner: **BRAIN** · sublabel: **hippocampus + cortex**
- Tag (right): `THE BRAIN`
- Outcome: **INJECTS RECALL & CONTEXT** — actively feeds memory + context into live reasoning.
- Source tag: `deepspok (hippocampus) + vaults (cortex)`
