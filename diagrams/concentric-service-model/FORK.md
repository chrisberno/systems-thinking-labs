# Fork this diagram

**For an agent picking this up cold.** You have everything you need in this folder. Read
this file, not `config.json` — see "What config.json is" at the bottom.

## What this diagram does

It shows a **platform wrapping a community**: concentric rings read outside-in, from where
people already are (phone, text, web) down to a single data core, with a clockwise cycle
driving the middle and halftone dots showing information flowing inward.

**Use it when** the story is *"many entry points, one system, continuous relationship."*
It suits platform architecture, service ecosystems, partner meshes, and any "layers wrapping
a core" narrative aimed at non-technical stakeholders.

**Don't use it when** the story is sequential (a pipeline), hierarchical (an org chart), or
comparative (options side by side). Concentric rings imply containment and cycle. If your
data isn't nested and isn't cyclical, this diagram will actively mislead.

## The 3-minute reskin

### 1. Palette — 11 values, top of the file

In the `<style>` block near the top of `concentric-service-model-v5a.svg`:

```css
:root {
  --canvas: #FAFBFC;          /* page background */
  --ink: #1A1A1A;             /* label text */
  --halftone-outer: #6e6e6e;  /* dot ring, outermost (r≈370) */
  --halftone-mid: #505050;    /* dot ring, middle    (r≈357) */
  --halftone-inner: #323232;  /* dot ring, innermost (r≈345) */
  --accent-100: #B8D4ED;      /* lightest — inner ring strokes */
  --accent-200: #7FAFD4;
  --accent-300: #5A8AC4;      /* arrow polygons */
  --accent-400: #5A7FA8;
  --accent-500: #2E6AB3;
  --accent-600: #1E4E8C;      /* darkest — outer ring stroke */
}
```

Change those eleven and the whole diagram reskins. Every `fill` and `stroke` in the file
reads from them. **To match a site palette:** map their darkest brand colour to
`--accent-600` and lightest to `--accent-100`, interpolate the middle four, and set the
halftone greys to tints of the brand colour rather than pure grey.

Each attribute carries the original hex as a fallback — `fill="var(--accent-500, #2E6AB3)"` —
so the file still renders in Inkscape and print pipelines that ignore CSS variables.
**Keep the fallbacks when you edit**, or you lose that.

### 2. Labels — 8 strings

| Line | Current text | Ring |
|---|---|---|
| 316 | Community Connection Layer | outer ring |
| 324 | CONNECT | cycle, 12 o'clock |
| 330 | ENGAGE | cycle, 4 o'clock |
| 336 | SERVE | cycle, 8 o'clock |
| 350 | Ecosystem Network Layer | mid ring |
| 353 | API Layer | inner ring |
| 364–365 | Data / Center | core (two `<text>` lines, not one) |

> ⚠️ **The `textPath` IDs do not match their contents.** `#engageTextPath` holds *CONNECT*,
> `#serveTextPath` holds *ENGAGE*, `#connectTextPath` holds *SERVE*. **Edit by line number
> or by the visible string, never by the ID.** This is a known wart, kept because the path
> geometry is correct and renaming risks breaking the arcs.

**Length matters.** Labels sit on curved `textPath` arcs and will not wrap. Keep ring labels
under ~26 characters and cycle words under ~8, or they overrun the arc and clip.

### 3. Structure — the halftone generator

Only if you need a different number of rings or a different radius:

```bash
python3 ../../code/generators/halftone_generator.py \
  --rings 3 --radials 72 --cx 400 --cy 400 --outer-r 340 \
  --reverse --include-css --output dots.svg
```

| Flag | Default | Does |
|---|---|---|
| `--rings` | 3 | number of dot rings |
| `--radials` | 72 | dots per ring |
| `--cx` / `--cy` | 400 | centre point |
| `--outer-r` | 340 | outer ring radius |
| `--reverse` | off | wave runs outer→inner (community flowing *in*) |
| `--include-css` | off | emit the breathe keyframes too |

Then paste the output over the `<g id="halftone-effect">` group. The generator emits raw
hexes — **re-tokenise them to `var(--halftone-*, …)` afterwards** or the palette block stops
controlling the dots.

## Which file to use

| Need | File |
|---|---|
| Web, animated | `concentric-service-model-v5a.svg` ← start here |
| Print / documents | `concentric-service-model-v4.svg` (static, still hard-coded hexes) |
| PowerPoint / Keynote | `systems-architecture-platform-ecosystem-diagram-v5a.mov`, loop enabled |

## Gotchas

- **The animation is CSS keyframes inside the SVG.** It runs when the file is loaded as a
  document or via `<img>`; it will *not* run if the SVG is inlined into a page whose CSS
  resets `animation`.
- **`viewBox` is `0 0 800 800`.** The layout is hand-placed at that scale — changing the
  viewBox moves labels off their arcs.
- **v4 has not been tokenised.** If you reskin v5a and need a matching print version, port
  the palette block to v4 as a separate job.

## What `config.json` is

**Metadata, not a control panel.** It describes the finished diagram — versions, use cases,
tags, layer names — for search and cataloguing. **Nothing reads it at render time.** Editing
it changes nothing on screen. Edit the SVG.
