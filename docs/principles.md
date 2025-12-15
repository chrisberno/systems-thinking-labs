# Design Principles

**The philosophy behind Systems Thinking Labs visualizations.**

---

## Core Purpose

> **Cognitive acceleration for stakeholders, not documentation for architects.**

Every diagram in this lab is designed to help a non-technical person understand a complex system in seconds, not minutes. The goal is compression of complexity into clarity.

---

## The Five Principles

### 1. Cognitive Acceleration

**The 10-second test:** Can someone understand the core concept in 10 seconds?

- Lead with the most important relationship
- Remove everything that doesn't accelerate understanding
- Trust the viewer's intelligence - don't over-explain

**Anti-pattern:** Dense diagrams that require a legend to decode.

---

### 2. Layered Abstraction

**Outside-in reveals complexity progressively.**

Concentric models work because they mirror how we naturally think about systems:
- Outer layer = what you interact with (community, interface)
- Inner layers = what powers it (data, infrastructure)

The viewer can stop at any layer and still have a complete mental model.

**Anti-pattern:** Flat diagrams where everything is equally prominent.

---

### 3. Visual Metaphor

**Shapes and flows carry meaning.**

| Element | Meaning |
|---------|---------|
| Circles/rings | Wholeness, protection, layers |
| Clockwise arrows | Progress, continuous improvement |
| Radiating dots | Influence, data emanating outward |
| Bidirectional arrows | Two-way exchange, partnership |
| Gradients (warm→cool) | Inbound→outbound flow |

Every visual choice should reinforce the message, not just decorate.

**Anti-pattern:** Decoration without purpose (drop shadows everywhere, gratuitous gradients).

---

### 4. Professional Polish

**Match the standard of WEF, McKinsey, Deloitte.**

Professional diagrams share these qualities:
- Clean typography with clear hierarchy
- Intentional color palette (not default software colors)
- Consistent spacing and alignment
- Subtle depth (shadows, gradients) used sparingly
- High contrast for readability

The goal is credibility. Sloppy diagrams undermine the message.

**Anti-pattern:** Default PowerPoint shapes, misaligned elements, clashing colors.

---

### 5. Reproducibility

**Programmatic generation, version controlled.**

Diagrams should be:
- **Generated** where possible (Python scripts for complex patterns)
- **Versioned** in Git (track the evolution)
- **Documented** (explain the thinking, not just the output)
- **Parameterized** (easy to adjust colors, sizes, counts)

This ensures consistency and enables iteration without starting over.

**Anti-pattern:** One-off designs in closed tools that can't be reproduced.

---

## Visual Design System

### Color Philosophy

| Tone | Meaning | Example Use |
|------|---------|-------------|
| **Blues** | Trust, stability, technology | Primary rings, data center |
| **Warm (purple/red)** | Inbound, requests, needs | Data flowing IN |
| **Cool (teal/green)** | Outbound, services, support | Data flowing OUT |
| **Near-black** | Emphasis, readability | Labels, key text |
| **White/light** | Space, clarity | Backgrounds, segments |

### Typography

- **Sans-serif** for clarity at all sizes
- **Bold** for labels and headings
- **Near-black (#1A1A1A)** instead of pure black (softer, more professional)
- **Letter-spacing** on curved text for readability

### Animation

Animation should enhance understanding, not distract:
- **Breathing effects** - subtle, slow, calming
- **Wave direction** - matches the data flow story
- **Hold at peak** - give time to register before fading

**Rule:** If you notice the animation before the content, it's too much.

---

## Process

### How Diagrams Evolve

1. **v1: Structure** - Get the layers and relationships right
2. **v2: Flow** - Add directional indicators (arrows, cycles)
3. **v3: Experiment** - Try visual effects (gradients, textures, dots)
4. **v4: Lock in** - Choose the winning effect, polish
5. **v5: Animate** - Add motion for digital contexts
6. **vXa/b/c: Variants** - Combine effects, create options

### Feedback Loop

- Present to stakeholders
- Capture what confused them
- Iterate on clarity
- Document learnings

The goal is a **repeatable model** for visual systems communication.

---

## Inspiration Sources

Organizations that do this well:

| Organization | What They Do Well |
|--------------|-------------------|
| **World Economic Forum** | Complex global systems in single visuals |
| **McKinsey & Company** | Clean operating model diagrams |
| **Deloitte** | Layered architecture frameworks |
| **WHO** | Public health systems, accessible design |
| **Twilio / Salesforce** | Modern platform architecture diagrams |

Study their work. Understand why it works. Adapt for your context.

---

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
|--------------|--------------|
| **Everything is important** | Nothing stands out |
| **Default software styling** | Looks amateur, undermines credibility |
| **Decoration without meaning** | Adds cognitive load, not clarity |
| **Too much text** | Diagrams should show, not tell |
| **No clear entry point** | Viewer doesn't know where to start |
| **Inconsistent styling** | Creates visual noise |

---

## Summary

Great systems diagrams are:
- **Clear** - 10-second understanding
- **Layered** - Progressive complexity
- **Meaningful** - Every element serves the message
- **Polished** - Professional, credible
- **Reproducible** - Versioned, documented, parameterized

The craft is in compression: taking something complex and making it feel simple without losing truth.

---

*"The goal is not to make something pretty. The goal is to make something understood."*
