# Concentric Service Model

**Platform Ecosystem Architecture for Community-Based Organizations**

![Concentric Service Model](concentric-service-model-v5a.svg)

## Reusing this diagram

**→ [`FORK.md`](FORK.md)** — the reuse recipe: the 11-value palette block, the 8 editable
labels with line numbers, the halftone generator flags, and the gotchas. Written for an
agent picking this up cold.

`config.json` is **metadata, not a control panel.** It describes the finished diagram for
search and cataloguing; nothing reads it at render time. Edit the SVG.

## Overview

A **Platform Ecosystem Diagram** showing how the platform wraps community touchpoints around a cyclical engagement engine, with data flowing through an ecosystem network to a central data layer.

**Category:** Platform Ecosystems
**Status:** Production (v5a)
**Use Cases:** Board presentations, investor communication, partner integration, staff onboarding

## How to Read This Diagram

1. **Start at the outer ring** - Community Connection Layer (where your community already lives)
2. **Follow the clockwise arrows** - CONNECT → ENGAGE → SERVE (continuous cycle)
3. **Notice the layers going inward** - Each layer wraps and protects the next
4. **Watch the animated dots** - Data flowing from community into the platform

## The Layers (Outside-In)

| Layer | Purpose |
|-------|---------|
| **Community Connection Layer** | The front door - phone, text, web, social |
| **CONNECT → ENGAGE → SERVE** | The cyclical engine - continuous relationship |
| **Ecosystem Network Layer** | Partner mesh - food banks, housing, healthcare |
| **API Layer** | Live nervous system - bidirectional data flows |
| **Data Center** | Single source of truth - history, logs, outcomes |

## Files

| File | Purpose |
|------|---------|
| `concentric-service-model-v5a.svg` | Current version - animated, polished |
| `concentric-service-model-v4.svg` | Static version - print/documents |
| `systems-architecture-...v5a.mov` | Video export - PowerPoint presentations |
| `notes.md` | Detailed interpretation and technical notes |
| `config.json` | Searchable metadata **only — nothing reads it at render time** |

## Design Decisions

- **Clockwise flow** - Matches natural reading patterns, suggests forward momentum
- **CONNECT at 12 o'clock** - Entry point at the visually prominent position
- **Halftone dots** - Represent data/influence radiating from the platform
- **Reversed wave animation** - Outer dots first = community needs flowing IN
- **Near-black text** - Maximum contrast for readability

## Technical Implementation

The halftone dots are **programmatically generated** using Python:

```bash
python ../../code/generators/halftone_generator.py --rings 3 --radials 72 --reverse --include-css
```

See [halftone_generator.py](../../code/generators/halftone_generator.py) for full documentation.

## Usage

| Context | Recommended Version |
|---------|---------------------|
| Print materials | v4 (static) |
| Web/digital | v5a (animated) |
| PowerPoint | Video (.mov) with loop |
| Marketing | v5a embedded or video |

## Links

- [Blog Post: Systems Thinking for Stakeholders](https://chrisberno.com/blog/systems-thinking-for-stakeholders)
- [Project: Systems Thinking Labs](https://chrisberno.com/projects/systems-thinking-labs)
- [GitHub Repository](https://github.com/chrisberno/systems-thinking-labs)

## Inspiration

Visual language draws from enterprise consulting and global institution design patterns:
- World Economic Forum (WEF)
- McKinsey & Company
- Deloitte
- World Health Organization (WHO)
- Twilio / Salesforce

## License

MIT - See [LICENSE](../../LICENSE)
