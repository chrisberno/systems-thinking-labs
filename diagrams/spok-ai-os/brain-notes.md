# SPOK OS — Context Ring Notes: The Brain (Memory)

> Working notes for ring 2 (Context = Brain). Captured during the vision-clarity GATE,
> prompted by the Gemini advisor's Context-ring questions. **Not graduated** — playground
> notes only. Companions: `soul-notes.md` (core ring), `notes.md` (ring→folder map).
>
> Grounding (verified on disk 2026): onreb-vault runs the **Karpathy LLM Wiki** pattern —
> `raw/` (immutable source) · `wiki/` (LLM-synthesized) · `CLAUDE.md` (schema) + `index.md`
> + `log.md`. Spec: `~/SPOK/knowledge/llm-wiki-v2/llm-wiki-v2.md`. Karpathy gist linked in
> onreb-vault/CLAUDE.md.

---

## The one-line definition

**Brain = Hippocampus (deepspok) + Cortex (vaults).** Two organs, one ring.
- **Hippocampus** = deepspok (Supabase + pgvector) — fast semantic recall, recency, decay.
- **Cortex** = the 4 vaults — structured, permanent, compounding long-term knowledge.

---

## Q1 — The Memory Pipeline (how the two organs talk; what offloads at session end)

**Two corrections to Gemini's frame first (the frame hides the design):**

1. **The hippocampus is NOT volatile RAM.** deepspok is *persistent* (Supabase). It's
   "working memory" by **function** (fast recall, recency-weighted, decay-aware) — not by
   volatility. **Nothing is lost at session end.** There is no RAM to flush.
2. **There is no auto-offload at session end.** Consolidation is a *separate, deliberate,
   human-gated ritual* — modeled on **sleep consolidation**, not on closing a laptop.
   Biology is exact: episodic memory isn't written to cortex the moment the experience
   ends; it's consolidated later, selectively, during sleep.

**The real pipeline (inside-out, source → permanence):**

```
[Bilayer receptors]  →  capture_thought (deepspok, auto-embed)  →  HIPPOCAMPUS (persistent INBOX)
                                                                        │  12-day TTL conveyor (ages into a sorting hopper)
                                                                        ▼
                                                            SORTING RITUAL (CEO in the loop)
                                                            ┌── PROMOTE → write wiki/ page in vault = CORTEX  → index.md + log.md → git → publish
                                                            ├── ROUTE   → tag properly, stays in hippocampus
                                                            ├── RENEW   → reset the clock, still hot
                                                            └── PURGE   → drain
```

- **The offload mechanism = PROMOTE.** A hippocampus thought *graduates* into a cortex
  `wiki/` page. That's the only path from fast/decaying → permanent/compounding.
- **`raw/` vs `wiki/`:** immutable source (transcripts, PDFs, snapshots) lands in `raw/`;
  only *synthesis* graduates to `wiki/`. The LLM owns `wiki/`, never edits `raw/`.

**Status honesty (real vs. aspirational):**
- ✅ Real: deepspok capture / search / persistence; vaults + Karpathy pattern (onreb fully);
  publishing pipeline.
- ⚠️ Partial/proposed: the automated TTL conveyor, the *scheduled* sorting ritual, and a
  **RAW/INBOX status** (today's enum is NOW/NEXT/SOMEDAY/DONE — no "unsorted" slot).
  Promotion today is agent/CEO-driven, not yet a ritualized cron.

---

## Q2 — The Signal-to-Noise Filter (what's vault-worthy; who owns the taxonomy)

**What's "vault-worthy":** consolidated, durable, reusable, business-load-bearing
intelligence — **decisions, doctrine, runbooks, entity pages, synthesis.** *Not* raw
transcripts or logs (those stay in `raw/`, or never leave the hippocampus and decay out).
**The filter IS the consolidation step**, and what it judges by is **Taste** — i.e. the
filter on the Context ring is *powered by the Soul ring's value function.* (Ring 1 → Ring 2.)

**Who owns the taxonomy — neither pure-dynamic nor pure-rigid. It's a rigid skeleton with a judgment-driven fill:**

- **Rigid (the contract — defined by CEO/architecture):**
  - The **4-vault domain split**, firewalled (onreb ≠ connie ≠ personal ≠ devdocs).
  - The **Karpathy 3-layer**: `raw/` + `wiki/` + `CLAUDE.md` (schema) + `index.md` + `log.md`.
  - **Typed entities** with required frontmatter (e.g. `wiki/projects/<slug>.md`).
- **Dynamic (the fill — owned by the agent, organized by Taste):**
  - Inside `wiki/`, the LLM owns placement, linking, and synthesis — judgment, not folders.

**Forge:** pure-dynamic taxonomy *is* the dump Gemini fears — every agent invents its own
folders → chaos. Pure-rigid is brittle and can't grow. Ours = **fixed contract, judgment-
driven content.** The CEO defines the skeleton (the per-vault `CLAUDE.md`); the agent fills
it with Taste; the **sort-gate is the final human filter.**

**Two doctrines that make the filter work:**
- **Decoupled classification** — capture is low-friction; *don't pre-classify at write time*
  (it flattens the CEO's relational stickiness and causes pre-routing errors). Classify at
  the **gate**, with the human in the loop. → low-friction in, high-judgment out.
- **Graduation-trust** — "people won't dump if they don't trust the system to do something
  useful." Reliable promotion is what keeps the funnel fed.

**Open work:** Karpathy flow is fully realized in **onreb-vault**; **chrisberno-dev-vault**
is still topical-only — retrofit pending. The TTL/sorting-ritual + RAW status are the main
unbuilt pieces of this ring.

---

## The through-line for the diagram

- **Soul (ring 1)** supplies **Taste** → which is the **filter** on **Brain (ring 2)**.
- Capture is cheap and everything-tolerant (hippocampus); **permanence is earned** at a
  human-gated consolidation ritual (→ cortex). RAM-flush is the wrong metaphor; **sleep
  consolidation** is the right one.
