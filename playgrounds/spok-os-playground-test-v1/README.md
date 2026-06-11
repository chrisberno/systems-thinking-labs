# spok-os-playground-test-v1

A **playground test for SPOK OS** — a dummy Next.js app built by a SPOK OS agent, from inside this
directory, toward a clear goal. Proof that the system ships real work.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

## Drive it with SPOK OS (the point)

```bash
git clone <this repo>
cd spok-os-playground-test-v1
# Activate the harness with SPOK OS, then spawn an agent IN this directory:
claude            # Claude Code auto-loads CLAUDE.md (project activation) + .claude/ permissions
# The agent identifies itself, reads GOAL.md, and builds toward it.
```

- **Activation model:** `CLAUDE.md`
- **What to build:** `GOAL.md`
- **Why this exists:** `manifesto.md` in the SPOK OS model dir
  (`../../diagrams/spok-ai-os/`)

> One mind, many bodies. Own the soul. Ship the OS.
