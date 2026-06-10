# THE SPOK OS — Completion Checklist (where to focus to finish the model)

> The precise focus map. Synthesized from the four ring notes + the v2 architecture brief's
> "Alpha Implementation Target (Pending)" items. **This is the build map for when the GATE
> opens — not a build authorization.** Legend: ✅ done · 🟡 partial · ⬜ pending.
>
> **Headline:** the two **germlines** are the two unfinished rings — `soul.md` (Soul) and
> `~/SPOK/skills/` (Capabilities). They are the highest-leverage and the cheapest work, and
> downstream agents treat them as source of truth. **Do the germlines first.**

---

## Ring 1 — SOUL (core germline) · 🟡 scattered, not consolidated
- ⬜ **Define the full Values set** — virtues are still a stub (authenticity, candor, courage, humor, obey-the-law, never-lie, loving, fun). Forge the real list.
- ⬜ **Author `soul.md`** capturing the **5 invariants**: Allegiance · Values · Taste · Stance (Forge gene) · Refusals (floor).
- ⬜ **Consolidate the scattered soul** — `~/SPOK/CLAUDE.md` + `agents/*.md` + memory → one runtime-immutable `soul.md`.
- ⬜ **Separate Traits from the Gate** — `soul.md` holds the value function; the proposal→approval flow is a separate mechanism.
- 🟡 **Encode the Weismann barrier** — the Session Learning Protocol exists in doctrine; formalize the loop *Experience → Propose (mutation) → CEO Approve (selection) → Commit (inherit).*

## Ring 2 — BRAIN (Context) · ✅ strongest ring, lifecycle unbuilt
- ✅ deepspok (hippocampus) live · ✅ 4 vaults (cortex) live · ✅ onreb-vault on Karpathy 3-layer
- ⬜ **Add `RAW/UNSORTED` status** to the lifecycle schema (today's enum NOW/NEXT/SOMEDAY/DONE has no "unsorted" slot).
- ⬜ **Build the 12-day TTL conveyor** + scheduling engine for the sorting ritual.
- ⬜ **`capture_thought` "raw mode"** — zero-friction, defers classification to the Sort Gate.
- ⬜ **Retrofit `chrisberno-dev-vault`** to the Karpathy 3-layer (and audit connie/personal vaults for parity).

## Ring 3 — CAPABILITIES (skills germline) · ⬜ germline does not exist yet
- ⬜ **Create `~/SPOK/skills/`** — the second germline (currently absent).
- ⬜ **Consolidate scattered verbs** — `~/SPOK/prompts/` (3), `~/SPOK/scripts/` (8), `~/.claude/skills/` (spok-engine), SPOK Engine routines → `~/SPOK/skills/`.
- ⬜ **Establish the `SKILL.md` manifest format** — declarative orchestration over deterministic tools.
- ⬜ **Codify the 3 modalities** — Skills (on-demand) · Routines (scheduled) · Loops (autonomous).

## Ring 4 — CONNECTORS (membrane) · ✅ tools live, edge unbuilt
- ✅ Owned MCP connectors **LIVE**: PeoplePerson · VoiceOver · boardroom-bot · cal-direct · paperclip
- 🟡 **Soul-Blindness Mandate** — architectural principle; audit that no connector embeds judgment/tenant identity.
- ⬜ **Build the Digital Thalamus** — un-opinionated `sensory_buffer` (Supabase) + async edge workers.
- ⬜ **Build the Transduction engine** — thin canonical envelope (Stimulus + Cognitive State); raw preserved immutable.
- ⬜ **Edge housekeeping** — dedup · malformed-drop · autonomic throttling (Stimulus Velocity) · 3 AM Deep-Sleep purge · Suppression Ratio feedback.
- ⬜ **Reconciliation Law** — transactional **outbox** pattern + idempotency keys + inbound **webhook reconciliation loops** across existing adapters.

## Cross-cutting — the diagram + governance
- ⬜ **Enrich `config.json`** — add `coreAxiom`, `laws[]`, and `state` (complete/partial/pending) per ring (see README proposal).
- ⬜ **Generator: render gaps visibly** — pending/partial rings drawn distinctly so the picture teaches the two germlines.
- ⬜ **Housekeeping** — reconcile `config.json` `files.current` (`v0`) vs. actual (`v1`).
- ⬜ **GATE decisions** — when stoked: (a) capture the 5-ring synthesis to deepspok; (b) graduate the canonical model to `~/SPOK`.

---

## Critical path — the order that matters

```
1. SOUL germline      → soul.md (define Values, consolidate, split traits/gate)   ← highest leverage, cheapest
2. SKILLS germline    → ~/SPOK/skills/ (create, consolidate verbs, SKILL.md)      ← closes the 2nd gap
3. BRAIN lifecycle    → RAW status + TTL conveyor + sort ritual + vault retrofit  ← turns strong ring into automated ring
4. CONNECTORS edge    → Thalamus + Transduction + outbox/reconciliation           ← largest build; sequence last
   (diagram alignment can run in parallel anytime after GATE opens)
```

**Why this order:** the germlines (1–2) are the two *unfinished rings*, are referenced by
every downstream agent as source of truth, and are small. The Brain lifecycle (3) upgrades
our already-strong ring. The Connectors edge (4) is the biggest engineering lift (new buffers,
workers, reconciliation infra) and depends least on the others — so it goes last. Get the
foundation TRUE, ring by ring, before the heavy build.
