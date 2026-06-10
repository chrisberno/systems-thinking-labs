# SPOK OS — Capabilities Ring Notes: Automates Your Work

> Working notes for ring 3 (Capabilities = skills · routines · loops). Captured during the
> vision-clarity GATE, prompted by the Gemini advisor's execution-layer question.
> **Not graduated** — playground notes only. Siblings: `soul-notes.md`, `brain-notes.md`.
>
> Ground truth (verified on disk): `~/SPOK/skills/` **does not exist yet** (germline pending).
> Capabilities are scattered across `~/SPOK/prompts/` (3), `~/SPOK/scripts/` (8),
> `~/.claude/skills/` (spok-engine routine), SPOK Engine. **Owned MCP connectors are live**:
> `~/SPOK/mcp/` = boardroom-bot · peopleperson · google-workspace · paperclip; +
> `~/SPOK/mcp-servers/cal-direct`. Plus VoiceOver (call-center) and registered MCPs.

---

## The forge: atomic-code vs. declarative-manifest is a false binary

Gemini posed an either/or — deterministic code tools **or** declarative orchestration
manifests. **Ours is neither-pure; it's a two-layer stack with a placement rule:**

> **Determinism sinks to code. Judgment floats to the LLM.**

- **Atomic / deterministic layer = the Connectors ring (MCP tools + scripts).** This is where
  the real work executes — `create_invoice`, `place_call`, `run_deliberation`. Code, not
  prose. A model swap can't misinterpret it; it runs identically under any body.
- **Declarative / orchestration layer = the Capabilities ring (skills as `SKILL.md`, routines,
  loops).** High-level instructions a capable body *interprets* to decide which tools, in
  what order, with what judgment. Portable because it's instructions, not model-specific code.

A **skill** = a declarative manifest that **orchestrates deterministic tools.** Not one or
the other — the manifest on top, the atomic tools underneath.

---

## How this gives "LLM Fluidity" at the execution layer

- A body swap **degrades gracefully**: a weaker body sequences the orchestration more crudely,
  but it **cannot corrupt a deterministic tool** — the invoice still posts correctly because
  the *logic lives in the tool, not the prompt*.
- **The anti-pattern (what breaks fluidity):** encoding business logic into the LLM's
  reasoning. Then a weaker body silently gets the logic wrong. **The fix is the placement
  rule** — push every deterministic decision down into a tool; leave the LLM only the
  judgment ("which tool, which order, is this the right moment").
- **There is a floor, not infinite fluidity:** capabilities assume a *minimum reasoning bar*
  to orchestrate. Below that floor any body breaks. So fluidity is "swap freely above the
  bar," not "any model works." Honest caveat.
- **Refusals (Soul ring) gate destructive capabilities** — `delete_customer` is proposed by
  the LLM, executed deterministically, and fenced by the soul's hard nos. Safety rides the
  same seam: deterministic + auditable below, judgment-gated above.

Three forms in the ring (the sublabel "skills · routines · loops"):
- **Skills** = on-demand verbs (orchestration manifests).
- **Routines** = scheduled (SPOK Engine briefings, cron).
- **Loops** = recurring autonomous cycles.

---

## The proprietary moat — owned tooling as deterministic connectors

The capabilities that competitors **can't clone** are owned MCP servers, exposed as atomic,
body-independent tools:

- **PeoplePerson** (CRM) · **VoiceOver** (full call-center on demand) · **boardroom-bot**
  (board governance / deliberation) · paperclip (COP/issues) · cal-direct (scheduling) — and
  more as we grow.

Because they're deterministic MCP tools, they (a) run identically under any LLM body, and
(b) become the **distributable germline** — "centralize the brain, distribute the skills"
(ONR-107). Every SPOKaaS tenant gets the same connector+skill germline; only their **brain**
(context) differs.

---

## Vertical-agnosticism — law firm as fluently as a candy shop

The capabilities are **universal primitives.** A law firm, a candy shop, a county government,
a local nonprofit all need the *same verbs*: contacts, billing, phone, scheduling, governance.

> **The vertical fluency comes from the BRAIN (Context ring), not from rewriting Capabilities.**
> Reconfigure the brain, not the skills.

This is the ONR-107 mental model: **Twilio-Flex-config → AI-triggers** — the same engine,
specialized by configuration/context, not by a rebuild. One capability set + a per-tenant
brain = many verticals serviced without forking the execution layer. That's the SPOKaaS
multi-tenancy thesis in one line.

---

## Through-line + status

- **Soul** supplies Taste & Refusals → gate **Capabilities** (which tool, is it allowed).
- **Brain** supplies the domain context → makes the *same* capabilities vertical-fluent.
- **Connectors** are the deterministic floor the capabilities orchestrate.
- **Status:** owned MCP tooling = REAL/live. `~/SPOK/skills/` germline = PENDING (scattered).
  Consolidating the scattered verbs into one heritable, distributable `~/SPOK/skills/` —
  parallel to `soul.md` — is the unfinished ring-3 work (the second of the two germlines).
