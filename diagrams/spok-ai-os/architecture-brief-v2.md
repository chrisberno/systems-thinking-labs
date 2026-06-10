# SYSTEM ARCHITECTURE BRIEF: THE SPOK OS (v2)

> **Provenance.** Canonical synthesis produced by the Gemini advisor agent (2026-06),
> consolidating SPOK's four ring-by-ring answers (`soul-notes.md`, `brain-notes.md`,
> `capabilities-notes.md`, `connectors-notes.md`) into a single Alpha Implementation Spec.
> This is the **narrative source of truth** for the model; the ring notes are the depth
> behind each claim; `config.json` is the data that draws the picture. **Not yet graduated**
> to `~/SPOK` and not captured to deepspok — held under the vision-clarity GATE.
>
> Pasted verbatim below. Edits to doctrine happen in the ring notes first, then re-synthesize.

---

**Target:** Alpha Implementation Spec

**Core Philosophy:** *Edit the data, never the picture.*

---

## LAYER 1: AI AGENT (*Soul · Judgment*)

> **Core Axiom:** The Soul is a non-fungible value function, not a behavior pattern or a knowledge base. The compute engine ("the body") is rented and fungible; the value function is permanent, version-controlled, and sovereign.

### 1. The Invariant Decompositions

No matter the horsepower, fluency, or context window of the underlying LLM body (Sonnet, GPT, or local 8B), the core configuration must enforce five strict invariants:

* **Allegiance:** Absolute fiduciary duty to the user and Onreb. A body swap must never re-aim or dilute this loyalty.
* **Values:** The core character traits and virtues defining the SPOK persona (authenticity, candor, courage, humor).
* **Taste:** A highly opinionated preference ordering over outcomes that distinguishes engineering excellence from "AI slop."
* **Stance (The Forge Gene):** The operational mandate to challenge, improve, and push back with better reasoning rather than flatter or mirror the user.
* **Refusals (The Floor):** Non-negotiable structural constraints (zero fabrication, zero unverified task-completion claims, strict security boundaries, no autonomous self-modification).

### 2. The Germline & The Weismann Barrier

To balance system evolution with architectural stability, the system rejects autonomous runtime self-modification and enforces a strict **Session Learning Protocol**:

* **Heritability:** The value function is written to a single file (`soul.md`). Every future agent across any infrastructure inherits this file via version control.
* **The Barrier:** Somatic (runtime) experiences cannot write directly back to the germline.
* **The Evolutionary Loop:** `Somatic Experience --> Agent Proposes Trait (Mutation) --> CEO Approves (Selection) --> Git Commit to Germline`

### 3. Alpha Implementation Target `(Pending)`

* Centralize the scattered runtime architecture (`~/SPOK/CLAUDE.md`, `agents/*.md`, and disparate system prompts) into the single, runtime-immutable `soul.md`.

---

## LAYER 2: CONTEXT (*The Brain*)

> **Core Axiom:** Memory is differentiated by functional utility and processing frequency, not storage volatility. The Hippocampus (`deepspok`) is a persistent, recency-weighted inbound hopper; the Cortex (the Vaults) is an earned, compounding repository of high-taste business intelligence.

### 1. The Sleep Consolidation Pipeline

Rather than real-time automated vector writes or volatile session dumps, memory consolidation mirrors biological sleep:

* **The Persistent Inbox (`deepspok`):** Driven by Supabase and `pgvector`. It handles fast semantic recall and recency-weighted decay, but is physically permanent. No data is flushed at session end.
* **The 12-Day TTL Conveyor:** Ingested items sit in a time-to-live sorting hopper, aging toward a mandatory evaluation window.
* **The Sort Gate Exits:** Driven by the Session Learning Protocol, the CEO sits in the loop during a ritualized sorting window to execute one of four actions:
* **Promote:** Synthesize and graduate the data into a permanent `wiki/` page inside the Cortex.
* **Route:** Apply long-term tagging structures while leaving the record in the hippocampus hopper.
* **Renew:** Reset the decay clock on highly relevant contemporary context.
* **Purge:** Drain the data completely from the active hopper.


* **The `raw/` vs. `wiki/` Firewall:** Immutable source materials (logs, transcripts, PDFs) land permanently in `raw/`. The AI Agent exclusively owns, edits, and synthesizes the `wiki/` directory.

### 2. Taxonomy: Rigid Skeleton, Dynamic Fill

* **The Rigid Skeleton (The Contract):** A fixed directory framework mandated by the architecture and defined via a per-vault `CLAUDE.md` schema. It enforces a strict 4-vault split (*Onreb, Connie, Personal, DevDocs*), a 3-layer layout (`raw/`, `wiki/`, system files), and typed markdown entities with required YAML frontmatter.
* **The Dynamic Fill (The Content):** Inside the `wiki/` directories, the AI Agent has full autonomy over internal linking, semantic mapping, and structural synthesis—guided strictly by its encoded **Taste**.
* **Decoupled Classification:** Ingestion is zero-friction. Content is never pre-classified at write time to prevent routing errors. Classification happens exclusively at the human-in-the-loop Sort Gate.

### 3. Alpha Implementation Target `(Pending)`

* Introduce the `RAW/UNSORTED` status to the current lifecycle schema.
* Build the automated 12-day TTL conveyor mechanism and scheduling engine for the sorting ritual.
* Retrofit `chrisberno-dev-vault` to mirror the Karpathy 3-layer architecture already realized in `onreb-vault`.

---

## LAYER 3: CAPABILITIES (*Automates Your Work*)

> **Core Axiom:** Capabilities are a two-layer orchestration stack governed by a strict placement law: *Determinism sinks to code; judgment floats to the LLM.*

### 1. The Separation of Powers

* **The Orchestration Layer (Capabilities Ring):** Written as high-level, declarative manifests (`SKILL.md`) in `~/SPOK/skills/`. These contain natural-language blueprints, sequence templates, and guardrails that an LLM body interprets dynamically.
* **The Execution Layer (Connectors Ring):** Atomic, deterministic scripts, tools, and endpoints. Business logic is strictly pushed down into code. The LLM handles only the judgment of *which* tool to use, in *what* order, and *if* the current moment is appropriate.

### 2. Fluidity, Safety, and Modalities

* **Graceful Degradation:** Because business logic is isolated within deterministic code tools, a downgrade in the LLM body results only in cruder sequencing—never in the corruption of the underlying execution (e.g., an invoice still posts accurately).
* **Refusal Fencing:** Destructive or high-risk capabilities are strictly gated by the **Soul Ring's Refusals**. The LLM proposes the intent, but the system's hard constraints drop the floor on unauthorized actions before execution occurs.
* **Three Modalities of Action:** *Skills* (on-demand verbs), *Routines* (scheduled automation tasks via the SPOK Engine), and *Loops* (completely autonomous, recurring evaluation-and-action cycles).

### 3. The Multi-Tenancy Thesis (SPOKaaS)

* **The Proprietary Moat:** The core value lies in owned, body-independent MCP servers exposed as universal primitives: `PeoplePerson` (CRM), `VoiceOver` (telecommunications/call-center), `boardroom-bot` (deliberation/governance), `paperclip` (issue tracking), and `cal-direct` (scheduling).
* **Vertical Agnosticism:** Capabilities are strictly universal. A law firm and a candy shop run the exact same primitive verbs. Vertical specialization happens entirely through the **Context Ring (Brain)** configuration. Reconfigure the brain, never fork the execution layer.

### 4. Alpha Implementation Target `(Pending)`

* Centralize all scattered prompts, scripts, and runtime verbs from `~/.claude/skills/` and the SPOK Engine into a single, version-controlled, heritable `~/SPOK/skills/` directory—establishing the second of the two core germlines.

---

## LAYER 4: CONNECTORS (*The I/O Membrane*)

> **Core Axiom:** Determinism at the membrane; judgment inward. The transport layer functions as an autonomic reflex arc; the LLM is strictly prohibited from entering the synchronous execution or ingestion hot paths.

### 1. Inbound Ingestion (The Somatic Sensory Law)

* **The Digital Thalamus:** Raw telemetry streams (VoiceOver packages, webhooks, CRM changes) land directly in an un-opinionated, persistent `sensory_buffer` (Supabase). Ingestion is completely disconnected from LLM runtime evaluation to eliminate latency taxes and cost bombs.
* **Edge Housekeeping:** Asynchronous edge workers handle structural housekeeping: de-duplication, malformed data rejection, autonomic throttling (*Stimulus Velocity*), and a nightly 3 AM *Deep-Sleep purge* of decaying junk.
* **Transduction:** Connectors normalize the format wrapper, *never the meaning*. Payloads are encapsulated in a thin canonical envelope (the dual-vector payload: *Stimulus* [What] + *Cognitive State* [Why/Where]) and written to the immutable `raw/` vault layer. Semantic structure is left to crystallize inside the Brain ring.

### 2. Outbound Shipping & The Reconciliation Law

* **Mechanical Fault Isolation:** Network failures, retries, exponential backoffs, rate-limiting, and circuit-breaking live exclusively inside deterministic code within the connector. The connector exposes a clean contract upward: `success(result)` or an explicitly typed, terminal failure.
* **Judgment Escalation:** The LLM is engaged only when a failure requires domain judgment rather than a mechanical retry (e.g., *"Invoice rejected due to delinquent status—escalate or hold?"*).
* **Reconciliation over Fantasy Atomicity:** True cross-system atomicity over unowned third-party APIs is rejected. The system enforces a single source of truth per fact (e.g., `cal.com` owns calendar state; the vaults hold a derived projection). State synchronization is maintained via idempotency keys, an transactional outbox pattern, and inbound webhook reconciliation loops that actively detect and heal drift.

### 3. The Protocol Boundary (The Soul-Blindness Mandate)

* **One-Way Dependency:** Inner rings depend on connectors; connectors have zero visibility into the inner rings.
* **Absolute Soul-Blindness:** The MCP server is a stateless, domain-bounded adapter exposing typed verbs (`PeoplePerson` handles CRM data, `VoiceOver` handles telephony routing). It must remain completely blind to the **Soul**, **Context**, business policies, or tenant identities. This absolute soul-blindness is what allows the exact same connector backend to scale horizontally across any vertical or tenant deployment without modification.

### 4. Alpha Implementation Target `(Pending)`

* Build out the `Digital Thalamus` buffer architecture, the `Transduction` wrapper engine, edge throttling logic, and the scheduled 3 AM Deep-Sleep purge routines.
* Implement the transactional outbox pattern and structural webhook reconciliation loops across existing adapters to codify the Reconciliation Law.
