# SPOK OS — Connectors Ring Notes: The I/O Membrane

> Working notes for ring 4 (Connectors = MCP), the OUTERMOST band — the I/O membrane the
> CEO locked as the truer systems model. Captured during the vision-clarity GATE, prompted
> by the Gemini advisor's edge-architecture questions. **Not graduated** — playground notes.
> Siblings: `soul-notes.md`, `brain-notes.md`, `capabilities-notes.md`.
>
> Grounded in the bilayer Phase-0 design (`~/projects/chrisberno.dev/dev/headvroom-bilayer-mock/
> PHASE-0-REQUIREMENTS.md`): R2 Receptors (somatic/autonomic) · R4 Digital Thalamus
> (un-opinionated `sensory_buffer`) · pipeline `Raw Stimulus → Transduction → Transmission`.

---

## The master law (one sentence governs the whole ring)

> **Determinism at the membrane; judgment inward.**

The membrane is a **reflex arc**: inbound = afferent (sensory), outbound = efferent (motor).
Reflexes are deterministic and **never go to the brain** — only novel/judgment signals escalate
to cortex (Brain) and soul (judgment). The LLM is never in the I/O hot path.

---

## 1. Inbound Ingestion — the Somatic Sensory Law

### 1a. Telemetry routing — bypass the LLM, or edge-filter?
**Both, in sequence — but the LLM is in neither.** The law:

- Raw telemetry (VoiceOver stream, Twilio webhook, CRM update) hits the Connector and lands in
  the **Digital Thalamus** — an **un-opinionated `sensory_buffer`** (Supabase). Rawest form.
- **Deterministic edge workers process it asynchronously** (code, not LLM). The LLM does **not**
  sit in the arrival path — putting a probabilistic, costly component in the ingestion hot path
  is a cost bomb, a latency tax, and a single point of failure. Judgment is deferred to the
  consolidation ritual (sleep), exactly like Ring 2.
- **Edge-filtering exists but is deterministic and light** — dedup, malformed-drop,
  **autonomic throttling** under burst (`Stimulus Velocity`), nightly **3 AM Deep-Sleep purge**
  of clear junk, and a **Suppression Ratio** feedback signal that flags high-noise receptors for
  toggle-off. Noise control is mostly *configuration* (which receptors are on, per cognitive
  bandwidth), not runtime semantic curation.

**Forge:** do **not** semantically drop at the edge — you'd discard signal you didn't yet know
was signal. Drop only deterministic junk; let the **buffer be un-opinionated and decay-aware**
(TTL) so the *decay mechanism is the real noise filter.* Capture liberally; filter by judgment
later, at the human-gated sort.

### 1b. Serialization / Normalization — SPOK Standard Object Model, or dump raw?
This step already has a name in Phase-0: **Transduction** (format normalization). **Both, with a
placement rule:**

- Receptors write the **rawest payload** into the sensory_buffer — **raw is preserved, immutable**
  (Karpathy `raw/` law: read, never modify). The editable/raw record is **canonical**.
- **Transduction normalizes the WRAPPER, never the MEANING** — broken JSON/XML dialects become a
  **thin canonical envelope** (the dual-vector payload: *Stimulus* = what + *Cognitive State* =
  why/where) → atomic event streams. **deepspok is a derived index over the raw, not the source
  of truth.**
- A **heavy proprietary "Standard Object Model" at the border is the anti-pattern** — it's
  premature classification (the Ring-2 sin), and it's brittle (every new source breaks the
  schema). Keep the border envelope **thin and stable**; let semantic structure emerge *inner*
  (wiki synthesis). **Normalize format at the edge; let meaning crystallize inside.**

---

## 2. Outbound Shipping — the Delivery Guarantee

### 2a. Error handling / fault tolerance — code, or bubble to the LLM?
**Deterministic recovery lives in the Connector, in code. The LLM is never the retry loop.**

- Retries, exponential backoff, rate-limit handling, idempotency, circuit-breaking = **code, in
  the Connector**, invisible to the inner rings.
- The Connector exposes a clean contract upward: **success(result)** or a **typed, terminal
  failure** — never a raw network error.
- The LLM (Ring 3) is engaged **only for judgment failures** the code can't decide: *"invoice
  rejected — customer flagged delinquent — escalate, waive, or hold?"* That floats up as a
  **structured decision.** `ECONNRESET, retry in 2s` never reaches the LLM.
- **The seam = mechanical fault (code) vs. judgment call (LLM).** Bubble a clean decision, never
  a raw failure.

### 2b. State interlocking — preventing dual-write / desync
**Forge, hard: true cross-system atomicity is impossible — don't promise it.** You cannot
two-phase-commit across a third-party SaaS (cal.com) and your vault. Anyone claiming atomic
dual-write across an API they don't own is selling slop. The real pattern:

- **Designate ONE source of truth per fact.** The external system of record owns its live state
  (cal.com owns the calendar truth); the **vault/deepspok is a derived projection**, never
  co-authoritative (Phase-0, line 69, generalized).
- **Mechanisms:** idempotency keys (retried writes don't double-book) · **outbox pattern**
  (record intent locally → ship → mark done on ack; crash-recoverable) · **write-through +
  read-back confirm** (the external ack is the commit point) · **reconciliation loops**
  (the external system's webhooks are an *inbound receptor* that heals drift) · single-writer
  per resource.
- **Law: desync is DETECTED and HEALED (reconciliation), not prevented by fantasy atomicity.**
  Eventual + reconciled, with a clear authority — never two systems both claiming truth.

---

## 3. The Protocol Boundary — MCP Insulation

- **MCP server (transport)** = a **dumb, stateless, domain-bounded adapter** exposing typed verbs.
  It knows its **own** domain — PeoplePerson knows CRM, VoiceOver knows telephony — and the wire
  protocol. Nothing else.
- **Capability (Ring 3)** = the orchestration with judgment that **calls** the tool. The
  capability knows the inner rings (serves the Soul, reads the Brain); **the connector does not.**
- **Dependency is strictly one-way:** inner rings depend on connectors; **connectors never depend
  on, or know about, the inner rings.** Stuff flows *through* the membrane; the membrane doesn't
  know what's inside the cell.

**The one thing a connector must NEVER know: the Soul.** It must be **soul-blind and
context-blind** — never know whose values it serves, the intent, or any business/judgment policy.
It executes; it does not decide.

**Why this is "scalable to the moon":** soul-blindness is *exactly* what makes a connector
**multi-tenant-shareable** — the same PeoplePerson MCP serves a law firm and a candy shop because
it's tenant-agnostic. State, judgment, and identity live inward (per-tenant Brain + per-deployment
Soul); the membrane stays thin, dumb, stateless, and horizontally scalable. **The moment a
connector embeds judgment, it stops being a membrane and becomes a tenant-specific tumor** — and
fluidity, portability, and multi-tenancy all die with it.

---

## Through-line + status

- **Determinism at the membrane; judgment inward** — the same law as Ring 3 ("determinism sinks
  to code"), applied to I/O. Connectors are the deterministic reflex layer; Soul/Brain are the
  cortex that only fires on novelty.
- **Status:** owned MCP connectors are **LIVE** (PeoplePerson, VoiceOver, boardroom-bot,
  cal-direct, paperclip). The bilayer edge (Digital Thalamus, Transduction, receptor toggles,
  autonomic throttling, Deep-Sleep purge) is **designed / mock-stage, largely unbuilt**. Outbox /
  reconciliation patterns are **laws we're committing to here, not yet implemented.** Real vs.
  aspirational kept explicit so nobody over-credits the edge.
