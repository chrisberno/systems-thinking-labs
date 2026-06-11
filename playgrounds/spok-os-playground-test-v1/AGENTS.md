# AGENTS.md

This project uses the **SPOK OS** activation layer. The full agent instructions — the identity
boot, the status grid, the goal, and the guardrails — live in **`CLAUDE.md`** in this directory.

**Any agent — Claude, Cursor, Codex, Gemini, or other — should read `CLAUDE.md` and follow it.**

`CLAUDE.md` is the canonical brief; this file exists so tools that look for `AGENTS.md` (the
cross-tool convention) still find the instructions.

> Note: the *instructions* are tool-agnostic, but the full *experience* also needs the SPOK OS
> infra configured in your environment — the `~/SPOK` soul/skills germlines and the `deepspok` /
> COP (paperclip) MCP servers. Without those, the boot's brain/COP checks will honestly show ❌.
