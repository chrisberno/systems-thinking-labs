# SPOK OS Playground — How This Works (read me to remember)

A plain-English note so the "magic" never feels like a black box.

## What this project is
A **normal Next.js app** + a thin **SPOK OS activation layer**. Strip the SPOK files and it's
vanilla Next.js — the SPOK layer is *additive*.

## Where the activation experience comes from
The boot you see — logo → `Hello, Chris.` → the ✅ / 🟡 / ❌ grid → *I'm ready to assist* — is
driven **entirely by this project's `CLAUDE.md`** (plus `.claude/settings.json` and
`scripts/boot-check.sh`). It is **project-local.**

## The one thing to remember: global vs project
- **Global (travels everywhere):** your `~/CLAUDE.md` — the SPOK *doctrine / soul*. **Any**
  `claude` session under your home inherits it (Claude Code walks *up* the folder tree to home).
- **Project (only here):** the **branded boot** — logo, grid, boot-check, permissions. Lives in
  *this* folder.

So a fresh `npx create-next-app` on your desktop → `cd` → `claude` would still pick up your
**global doctrine**, but get **none** of the branded activation. That dressing is **per-project.**

## Want the experience in another project?
Copy the SPOK layer into it:
```
CLAUDE.md            # the activation brief (boot, grid, rings, goal)
AGENTS.md GEMINI.md  # same, for non-Claude agents (symlinked to CLAUDE.md — same content)
.claude/settings.json# project permissions (the boot-check allow-list)
scripts/boot-check.sh# the read-only boot health check
GOAL.md              # what this project is for
```

> Full parity also needs the **SPOK OS infra** on the machine — the `~/SPOK` soul/skills and the
> `deepspok` / COP MCP servers. The files above make the *instructions* portable; the *infra* is
> the deeper "make it truly shippable" problem (tracked in the SPOK OS `OPEN-ITEMS.md`).
