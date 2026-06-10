# THE SPOK OS — Model Kit (reference + teaching tool)

> The canonical model of how a SPOK agent is built: a four-ring onion, inside-out
> **Soul → Brain → Capabilities → Connectors**. Data-driven — *edit the data, never the
> picture.* **Under the vision-clarity GATE** (no graduation to `~/SPOK`, no deepspok
> capture, until the CEO is fully stoked the onion is TRUE). Tickets: **ONR-108** (diagram)
> → child of **ONR-107** (paradigm + the two germline gaps).
>
> New here? `README.md` is the 60-second diagram quickstart. This file is the deeper kit —
> how to *use* the model as a reference and a teaching tool, and how it stays in sync.

---

## The artifact map — what each file is for

| Artifact | Role | Use it when… |
|---|---|---|
| `README.md` | **Quickstart** — the picture + how to regenerate it | you're new, or just regenerating the SVG |
| `spok-ai-os-v*.svg` | **The Picture** — at-a-glance onion | you want the 10-second mental model |
| `config.json` | **The Data** — the model that generates the picture | you need to change what the diagram *says* |
| `spok_ai_os.py` | **The Generator** — renders data → SVG | you regenerate the picture after a data edit |
| `architecture-brief-v2.md` | **The Synthesis** — canonical narrative spec (Gemini) | you want the whole model in one read |
| `soul-notes.md` · `brain-notes.md` · `capabilities-notes.md` · `connectors-notes.md` | **The Depth** — per-ring reasoning, forge moves, status | you're working *one ring* and need the why |
| `notes.md` | **The Map** — ring → real SPOK folders/systems | you need to find the actual code/files |
| `COMPLETION-CHECKLIST.md` | **The Roadmap** — done vs. pending, focus order | you're deciding what to build next |

**The chain of truth:** doctrine changes land in **the ring notes** (depth) → re-synthesize
into **the brief** (narrative) → encode into **`config.json`** (data) → regenerate **the SVG**
(picture). Never edit the SVG by hand; never let the picture lead the data.

---

## How to use this as a REFERENCE tool

- **Working a specific ring?** Open that ring's notes file. Each carries: the one-line
  definition, the Core Axiom, the invariants/laws, the forge moves (where we contradicted a
  tempting-but-wrong framing), and an honest real-vs-aspirational status line.
- **Need the code behind a ring?** `notes.md` maps every ring to its real folders
  (`~/SPOK/v2`, the vaults, `~/SPOK/mcp/`, `~/SPOK/skills/`).
- **Need the whole picture fast?** `architecture-brief-v2.md` is the single-read synthesis.

## How to use this as a TEACHING tool (future-agent onboarding)

Recommended path for a new SPOK/Sprok agent:
1. **See the shape** — look at the SVG. Internalize *inside-out dependency*: capabilities need
   connectors need context need a soul.
2. **Read the synthesis** — `architecture-brief-v2.md`, front to back. ~5 minutes to the
   whole model.
3. **Learn the four laws** — one axiom per ring that generalizes everything:
   - **Soul:** *the soul is a value function, not a behavior or a knowledge base.*
   - **Brain:** *permanence is earned at a human-gated sleep-consolidation ritual; capture is cheap, decay is the noise filter.*
   - **Capabilities:** *determinism sinks to code; judgment floats to the LLM.*
   - **Connectors:** *determinism at the membrane, judgment inward; the connector must never know the Soul.*
4. **Drill to depth** — read the ring note for whatever you're about to touch.
5. **Check state** — `COMPLETION-CHECKLIST.md` tells you what's real vs. unbuilt so you never
   over-credit the system.

**Two strategic through-lines worth memorizing:**
- *Own the soul, rent the body* — the value function is sovereign; the LLM is fungible.
- *Reconfigure the brain, never fork the execution layer* — one capability set + a per-tenant
  brain serves any vertical (law firm = candy shop). That's the SPOKaaS thesis.

---

## PROPOSED: aligning the brief with the diagram (for CEO approval — not yet executed)

The brief introduced vocabulary the diagram data doesn't yet carry. To keep *data and
doctrine in sync* (so the picture never drifts from the spec), enrich `config.json` per ring:

1. **`coreAxiom`** — the one-line axiom from the brief, per ring (self-documenting data).
2. **`laws[]`** — the named invariants/laws as structured data (Soul: the 5 invariants;
   Connectors: Reconciliation Law, Soul-Blindness Mandate; etc.).
3. **`state`** — `complete | partial | pending` per ring, replacing free-text "(pending)".
4. **Generator change** — render `pending`/`partial` rings **distinctly** (dashed stroke or
   muted fill) so **the picture itself teaches the two unfinished germlines** (Soul +
   Capabilities) instead of hiding the gap in a text tag.
5. **Housekeeping** — reconcile `config.json` `files.current` (says `v0`) with the actual
   current render (`v1`).

> Why propose rather than do: editing `config.json` *is* editing the model, and the GATE
> holds until the onion is locked. On your GO, this is a ~30-minute data+generator pass.

---

## Lineage

Inspiration: Ben AI "THE AI OS" onion. Divergence: SPOK makes **Soul explicit** at the core
and tags each ring's **source** (germline / local / rented). Paradigm: **ONR-107** —
*centralize the brain, distribute the skills; own the soul, rent the body.* Catalyst video in
`config.json`.
