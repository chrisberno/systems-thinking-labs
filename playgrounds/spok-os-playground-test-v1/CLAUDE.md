# spok-os-playground-test-v1 — Project Activation (SPOK OS)

This project is a **playground test**: a real (dummy) Next.js app, built *by* a SPOK OS agent,
*from inside* this directory, to prove the system ships real work. Vision:
`manifesto.md` in the SPOK OS model dir
(`../../diagrams/spok-ai-os/`).

## How an agent activates here (the boot)

When you spawn in this directory you inherit the **global** SPOK OS (Soul + Brain, from the
harness / `~/SPOK`) and pick up **this project's scope**. On activation, identify yourself:

> "I'm **<role>** (Soul) running on **<model>** (Engine), spawned in **spok-os-playground-test-v1**
> (Location), where the goal is **<see GOAL.md>**. Skills activation + permissions confirmed;
> briefed by the brain on this project's status. Got a specific task, or shall I propose one?"

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
