#!/usr/bin/env python3
"""
Halftone Dot Generator for SVG Diagrams
Part of Systems Thinking Labs

Generates programmatic halftone dot patterns that radiate from a center point.
Used for creating data flow visualizations in platform ecosystem diagrams.

Usage:
    python halftone_generator.py --rings 3 --radials 72 --output dots.svg

    Or import as module:
    from halftone_generator import generate_halftone_dots
"""

import math
import argparse
from typing import List, Tuple, Optional


def generate_halftone_dots(
    cx: float = 400,
    cy: float = 400,
    outer_r: float = 340,
    start_offset: float = 5,
    end_offset: float = 30,
    num_rings: int = 3,
    num_radials: int = 72,
    base_dot_size: float = 3.0,
    size_reduction: float = 0.4,
    color_start: int = 50,
    color_end: int = 110,
    opacity_start: float = 0.70,
    opacity_end: float = 0.57,
    animation_delay_step: float = 0.6,
    reverse_wave: bool = True,
    css_class: str = "data-dot"
) -> List[str]:
    """
    Generate SVG circle elements for halftone dot pattern.

    Args:
        cx, cy: Center point coordinates
        outer_r: Radius of the outer ring (dots start just beyond this)
        start_offset: Distance from outer_r to first dot ring
        end_offset: Distance from outer_r to last dot ring
        num_rings: Number of concentric dot rings
        num_radials: Number of dots per ring (72 = every 5 degrees)
        base_dot_size: Radius of innermost dots
        size_reduction: How much smaller outer dots get
        color_start: Gray value for inner dots (0-255)
        color_end: Gray value for outer dots (0-255)
        opacity_start: Opacity of inner dots
        opacity_end: Opacity of outer dots
        animation_delay_step: Seconds between ring animations
        reverse_wave: If True, outer ring animates first (inward flow)
        css_class: CSS class name for the dots

    Returns:
        List of SVG circle element strings
    """
    dots = []
    start_r = outer_r + start_offset
    end_r = outer_r + end_offset

    for i in range(num_rings):
        # Interpolation factor (0 to 1)
        t = i / (num_rings - 1) if num_rings > 1 else 0

        # Calculate ring radius
        r = start_r + t * (end_r - start_r)

        # Size: slightly smaller as we go out
        dot_r = base_dot_size - (t * size_reduction)

        # Color: dark to light gradient
        gray = int(color_start + t * (color_end - color_start))
        fill = f"#{gray:02x}{gray:02x}{gray:02x}"

        # Opacity gradient
        opacity = opacity_start - (t * (opacity_start - opacity_end))

        # Animation delay
        if reverse_wave:
            # Outer ring first (inward flow - community -> data center)
            delay = (num_rings - 1 - i) * animation_delay_step
        else:
            # Inner ring first (outward flow - data center -> community)
            delay = i * animation_delay_step

        # Generate dots around the ring
        for j in range(num_radials):
            angle = (j / num_radials) * 2 * math.pi
            x = cx + r * math.cos(angle)
            y = cy + r * math.sin(angle)

            dot = f'    <circle class="{css_class}" cx="{x:.1f}" cy="{y:.1f}" r="{dot_r:.1f}" fill="{fill}" opacity="{opacity:.2f}" style="animation-delay: {delay}s"/>'
            dots.append(dot)

    return dots


def generate_css_animation(
    duration: float = 6.0,
    fade_in_pct: float = 15,
    hold_pct: float = 40,
    fade_out_pct: float = 15,
    css_class: str = "data-dot"
) -> str:
    """
    Generate CSS keyframe animation for breathing effect.

    Args:
        duration: Total animation duration in seconds
        fade_in_pct: Percentage of cycle for fade in
        hold_pct: Percentage of cycle to hold at peak
        fade_out_pct: Percentage of cycle for fade out
        css_class: CSS class name

    Returns:
        CSS style block string
    """
    hold_start = fade_in_pct
    hold_end = hold_start + hold_pct
    fade_out_end = hold_end + fade_out_pct

    css = f"""  <style>
    <![CDATA[
      .{css_class} {{
        animation: breathe {duration}s ease-in-out infinite;
      }}
      @keyframes breathe {{
        0%   {{ opacity: 0; }}
        {hold_start}%  {{ opacity: 0.7; }}
        {hold_end}%  {{ opacity: 0.7; }}
        {fade_out_end}%  {{ opacity: 0; }}
        100% {{ opacity: 0; }}
      }}
    ]]>
  </style>"""

    return css


def generate_svg_group(dots: List[str], group_id: str = "halftone-effect") -> str:
    """Wrap dots in an SVG group element."""
    return f'  <g id="{group_id}">\n' + '\n'.join(dots) + '\n  </g>'


def main():
    parser = argparse.ArgumentParser(
        description="Generate halftone dot patterns for SVG diagrams"
    )
    parser.add_argument("--rings", type=int, default=3, help="Number of dot rings")
    parser.add_argument("--radials", type=int, default=72, help="Dots per ring")
    parser.add_argument("--cx", type=float, default=400, help="Center X")
    parser.add_argument("--cy", type=float, default=400, help="Center Y")
    parser.add_argument("--outer-r", type=float, default=340, help="Outer ring radius")
    parser.add_argument("--reverse", action="store_true", help="Reverse wave direction")
    parser.add_argument("--output", type=str, help="Output file (default: stdout)")
    parser.add_argument("--include-css", action="store_true", help="Include CSS animation")

    args = parser.parse_args()

    dots = generate_halftone_dots(
        cx=args.cx,
        cy=args.cy,
        outer_r=args.outer_r,
        num_rings=args.rings,
        num_radials=args.radials,
        reverse_wave=args.reverse
    )

    output_parts = []

    if args.include_css:
        output_parts.append(generate_css_animation())
        output_parts.append("")

    output_parts.append(generate_svg_group(dots))

    output = '\n'.join(output_parts)

    if args.output:
        with open(args.output, 'w') as f:
            f.write(output)
        print(f"Written to {args.output}")
    else:
        print(output)


if __name__ == "__main__":
    main()
