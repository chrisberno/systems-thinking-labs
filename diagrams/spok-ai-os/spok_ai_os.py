#!/usr/bin/env python3
"""
SPOK OS — Concentric AI-OS Diagram Generator
Part of Systems Thinking Labs.

The MODEL is config.json. This script is the RENDER. Edit the JSON, re-run,
commit the data — never hand-edit the SVG. One model, many projections.

Usage:
    python spok_ai_os.py                      # reads ./config.json -> spok-ai-os-<version>.svg
    python spok_ai_os.py --config c.json --out out.svg
"""
import json
import argparse
import os


def esc(s: str) -> str:
    return str(s).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def build_svg(cfg: dict) -> str:
    cv = cfg["canvas"]
    W, H, cx, cy = cv["width"], cv["height"], cv["cx"], cv["cy"]
    rings = cfg["rings"]  # outer -> inner

    INK = "#1a1a1a"
    RING_STROKE = "#9a8f70"
    s = []
    s.append(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" '
        f'width="{W}" height="{H}" font-family="Helvetica Neue, Helvetica, Arial, sans-serif">'
    )
    s.append(
        '<defs><marker id="arr" markerWidth="11" markerHeight="11" refX="8" refY="3.2" '
        'orient="auto"><path d="M0,0 L8,3.2 L0,6.4 Z" fill="#555"/></marker></defs>'
    )
    s.append(f'<rect width="{W}" height="{H}" fill="#ffffff"/>')

    # Title block
    s.append(
        f'<text x="{cx}" y="58" text-anchor="middle" font-size="36" font-weight="700" '
        f'fill="{INK}" letter-spacing="3">{esc(cfg["title"])}</text>'
    )
    s.append(
        f'<text x="{cx}" y="84" text-anchor="middle" font-size="13" fill="#8a8a8a">'
        f'{esc(cfg.get("subtitle", ""))}  ·  {esc(cfg.get("version", ""))}</text>'
    )

    # Rings (outer -> inner so inner draws on top)
    for r in rings:
        s.append(
            f'<circle cx="{cx}" cy="{cy}" r="{r["radius"]}" fill="{r["fill"]}" '
            f'stroke="{RING_STROKE}" stroke-width="1.5"/>'
        )

    # Ring labels
    for r in rings:
        rad = r["radius"]
        if r["id"] == "core":
            s.append(
                f'<text x="{cx}" y="{cy-4}" text-anchor="middle" font-size="18" '
                f'font-weight="700" fill="{INK}">{esc(r["label"])}</text>'
            )
            s.append(
                f'<text x="{cx}" y="{cy+17}" text-anchor="middle" font-size="12.5" '
                f'fill="#333">{esc(r["sublabel"])}</text>'
            )
        else:
            ly = cy - rad + 30
            s.append(
                f'<text x="{cx}" y="{ly}" text-anchor="middle" font-size="18" '
                f'font-weight="700" fill="{INK}" letter-spacing="1.2">{esc(r["label"])}</text>'
            )
            s.append(
                f'<text x="{cx}" y="{ly+18}" text-anchor="middle" font-size="11.5" '
                f'fill="#5a5a5a" font-style="italic">{esc(r["sublabel"])}</text>'
            )

    # Right-side outcome rows (color-matched to ring = the visual mapping)
    n = len(rings)
    top, bottom = 150, H - 165
    box_x, box_w, box_h = 962, 352, 72
    spine_x = cx + max(r["radius"] for r in rings) + 22
    for i, r in enumerate(rings):
        rowy = top + (bottom - top) * i / (n - 1)
        midx = (spine_x + box_x) / 2
        # arrow
        s.append(
            f'<line x1="{spine_x:.0f}" y1="{rowy:.0f}" x2="{box_x-9}" y2="{rowy:.0f}" '
            f'stroke="#555" stroke-width="1.7" marker-end="url(#arr)"/>'
        )
        # mid label above the arrow
        s.append(
            f'<text x="{midx:.0f}" y="{rowy-10:.0f}" text-anchor="middle" font-size="11" '
            f'fill="#6a6a6a" letter-spacing="0.6">{esc(r["outcomeLabel"])}</text>'
        )
        # outcome box
        accent = bool(r.get("accent"))
        bstroke = "#caa53a" if accent else RING_STROKE
        bsw = "2.6" if accent else "1.3"
        by = rowy - box_h / 2
        s.append(
            f'<rect x="{box_x}" y="{by:.0f}" width="{box_w}" height="{box_h}" rx="11" '
            f'fill="{r["outcomeFill"]}" stroke="{bstroke}" stroke-width="{bsw}"/>'
        )
        star = "  ★" if accent else ""
        s.append(
            f'<text x="{box_x+box_w/2:.0f}" y="{rowy-3:.0f}" text-anchor="middle" '
            f'font-size="18" font-weight="700" fill="{INK}">{esc(r["outcome"])}{star}</text>'
        )
        s.append(
            f'<text x="{box_x+box_w/2:.0f}" y="{rowy+19:.0f}" text-anchor="middle" '
            f'font-size="10.5" fill="#7a7a7a" font-style="italic">'
            f'source: {esc(r["source"])}</text>'
        )

    # Footer breadcrumb
    s.append(
        f'<text x="{cx}" y="{H-22}" text-anchor="middle" font-size="10.5" fill="#aaa">'
        f'model: config.json  ·  render: spok_ai_os.py  ·  edit the data, never the picture</text>'
    )
    s.append("</svg>")
    return "\n".join(s)


def main():
    here = os.path.dirname(os.path.abspath(__file__))
    ap = argparse.ArgumentParser()
    ap.add_argument("--config", default=os.path.join(here, "config.json"))
    ap.add_argument("--out", default=None)
    args = ap.parse_args()

    with open(args.config) as f:
        cfg = json.load(f)
    out = args.out or os.path.join(here, f'spok-ai-os-{cfg.get("version", "v0")}.svg')
    svg = build_svg(cfg)
    with open(out, "w") as f:
        f.write(svg)
    print(f"wrote {out}  ({len(svg)} bytes, {len(cfg['rings'])} rings)")


if __name__ == "__main__":
    main()
