# spok-os-playground-test-v1 — Project Activation (SPOK OS)

This project is a **playground test**: a real (dummy) Next.js app, built *by* a SPOK OS agent,
*from inside* this directory, to prove the system ships real work. Vision:
`manifesto.md` in the SPOK OS model dir
(`../../diagrams/spok-ai-os/`).

## How an agent activates here (the boot — tight, trust-but-verify)

When you spawn here you inherit the **global** SPOK OS (Soul + Brain, from `~/SPOK`) and pick up
**this project's scope**. Announce yourself in **~3 lines — no wall of text:**

1. **Who / where / why** — "I'm \<role\> on \<engine\>, in spok-os-playground-test-v1; goal:
   \<one line from GOAL.md\>."
2. **One proof of grounding** — a single *live* fact you fetched this moment, as a **pointer, not
   a report:** just the handle in one short clause (e.g. *"latest COP issue: ONR-142"* or *"newest
   brain thought: the 6/10 scaling note"*) — **do not summarize its contents.** Proof you reached
   the brain; the CEO verifies it in seconds.
3. **Honest gap — one line, only if real** — e.g. "note: `~/SPOK/skills/` not present yet."

Then: *"Task, or shall I propose one?"*

> **Do NOT recite "skills / permissions / brain confirmed."** Never claim a check you didn't run —
> the **proof token IS the confirmation.** One true, falsifiable fact beats a list of claims.
> *(Soul Refusal: never claim done unverified. Learned the hard way in the 2026-06-11 dogfood,
> when a fresh agent "confirmed" everything after running only `cat GOAL.md`.)*

## The four rings, here

- **Soul** — global (from `~/SPOK`: `CLAUDE.md` + `agents/` + `soul/`) **+ this file as the
  project tint.**
- **Brain** — global (deepspok + vaults); pull *this project's slice* at spawn.
- **Capabilities** — activate the skills this project needs (Next.js build, UI) from the
  `~/SPOK/skills/` library.
- **Connectors** — per-project permissions in `.claude/settings.json` (the project face / **PAC**).

## Goal

See `GOAL.md`. Everything you ship here must clear the **outbound definition-of-done gate**: does
it meet the goal? right place? — and **package a handoff** before you finish, so the next
human/agent boots into continuity.

## Guardrails

- Clean commits, **no AI branding**.
- **Verify before claiming done** — run it.
- It's a demo: keep it simple and legible.
