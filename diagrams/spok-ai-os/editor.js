/* SPOK OS — interactive onion editor.
 * The MODEL below mirrors config.json (outer -> inner ring order).
 * SPOK edits this object (or renderSVG) directly; the CEO tweaks via the UI.
 * Render is data-driven: edit the data, the picture follows.
 */

const MODEL = {
  title: "THE SPOK OS",
  subtitle: "An AI Operating System — soul made explicit, germline-sourced",
  footer: "interactive editor · mirrors config.json · edit the data, never the picture",
  canvas: { width: 1340, height: 840, cx: 392, cy: 430 },
  pngScale: 2,
  theme: {
    bg: "#272b34", title: "#ffffff", subtitle: "#858e93",
    ringStroke: "#272b34", ringStrokeWidth: 6,
    accentStroke: "#7FDCFF", accentStrokeWidth: 4,
    arrow: "#858e93", tag: "#858e93",
    boxStroke: "#3a4250", boxStrokeWidth: 1.3, footer: "#5a6068"
  },
  // rings: OUTER -> INNER (this array order = drawing order AND outcome-box order)
  rings: [
    { id: "connectors", label: "CONNECTORS", sublabel: "MCP — the I/O membrane", radius: 350, fill: "#296A7F",
      outcomeLabel: "CONNECTORS", outcome: "CONNECTS YOU TO THE WORLD", outcomeFill: "#296A7F",
      source: "~/SPOK/mcp/ + registered MCPs", accent: false },
    { id: "capabilities", label: "CAPABILITIES", sublabel: "skills · routines · loops", radius: 268, fill: "#3E9EBF",
      outcomeLabel: "CAPABILITIES", outcome: "GETS THE JOB DONE", outcomeFill: "#3E9EBF",
      source: "~/SPOK/skills/ — germline (pending)", accent: false },
    { id: "context", label: "BRAIN", sublabel: "hippocampus + cortex", radius: 188, fill: "#4ABEE5",
      outcomeLabel: "THE BRAIN", outcome: "INJECTS RECALL & CONTEXT", outcomeFill: "#4ABEE5",
      source: "deepspok (hippocampus) + vaults (cortex)", accent: false },
    { id: "core", label: "AGENT", sublabel: "LLM + Soul", radius: 100, fill: "#7FDCFF",
      outcomeLabel: "THE AGENT", outcome: "DETERMINES YOUR OUTCOMES  ★", outcomeFill: "#7FDCFF",
      source: "LLM = token-metered model · Soul = CLAUDE.md + agents/", accent: true },
  ],
};

/* ---------- render ---------- */

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function renderSVG(m) {
  const { width, height, cx, cy } = m.canvas;
  const rings = m.rings;
  const t = Object.assign({
    bg: "#ffffff", title: "#1a1a1a", subtitle: "#8a8a8a",
    ringStroke: "#9a8f70", ringStrokeWidth: 1.5,
    accentStroke: "#caa53a", accentStrokeWidth: 2.6,
    arrow: "#555", tag: "#6a6a6a", boxStroke: "#9a8f70", boxStrokeWidth: 1.3,
    footer: "#aaaaaa"
  }, m.theme || {});
  const lum = h => { h = (h || "#000000").replace("#", ""); const r = parseInt(h.slice(0, 2), 16), g = parseInt(h.slice(2, 4), 16), b = parseInt(h.slice(4, 6), 16); return (0.299 * r + 0.587 * g + 0.114 * b) / 255; };
  const inkOn = h => lum(h) > 0.6 ? "#16252b" : "#ffffff";
  const mutedOn = h => lum(h) > 0.6 ? "#46585f" : "#b4c2c8";

  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" font-family="Helvetica Neue, Helvetica, Arial, sans-serif">`;
  s += `<defs><marker id="arr" markerWidth="11" markerHeight="11" refX="8" refY="3.2" orient="auto"><path d="M0,0 L8,3.2 L0,6.4 Z" fill="${t.arrow}"/></marker></defs>`;
  s += `<rect width="${width}" height="${height}" fill="${t.bg}"/>`;
  s += `<text x="${cx}" y="58" text-anchor="middle" font-size="36" font-weight="700" fill="${t.title}" letter-spacing="3">${esc(m.title)}</text>`;
  s += `<text x="${cx}" y="84" text-anchor="middle" font-size="13" fill="${t.subtitle}">${esc(m.subtitle)}</text>`;

  // draw rings outer -> inner regardless of array order (big circles first)
  const draw = [...rings].sort((a, b) => b.radius - a.radius);
  const minR = draw.length ? Math.min(...draw.map(r => r.radius)) : 0;
  for (const r of draw) {
    const stroke = r.accent ? t.accentStroke : t.ringStroke;
    const sw = r.accent ? t.accentStrokeWidth : t.ringStrokeWidth;
    s += `<circle cx="${cx}" cy="${cy}" r="${r.radius}" fill="${r.fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
  }
  // ring labels: innermost centered in the core, others at the top of their band. Text color auto-picked per fill.
  for (const r of draw) {
    const ink = inkOn(r.fill), mut = mutedOn(r.fill);
    if (r.radius === minR) {
      s += `<text x="${cx}" y="${cy - 4}" text-anchor="middle" font-size="18" font-weight="700" fill="${ink}">${esc(r.label)}</text>`;
      s += `<text x="${cx}" y="${cy + 17}" text-anchor="middle" font-size="12.5" fill="${ink}">${esc(r.sublabel)}</text>`;
    } else {
      const ly = cy - r.radius + 30;
      s += `<text x="${cx}" y="${ly}" text-anchor="middle" font-size="18" font-weight="700" fill="${ink}" letter-spacing="1.2">${esc(r.label)}</text>`;
      s += `<text x="${cx}" y="${ly + 18}" text-anchor="middle" font-size="11.5" fill="${mut}" font-style="italic">${esc(r.sublabel)}</text>`;
    }
  }

  // outcome boxes on the right, in MODEL (array) order, vertically centered as a stack
  const n = rings.length;
  const boxW = 352, boxH = 72, gap = 103, boxX = 962;
  const stackH = n * boxH + (n - 1) * gap;
  let by = cy - stackH / 2;
  for (const r of rings) {
    const bcy = by + boxH / 2;
    const ink = inkOn(r.outcomeFill), mut = mutedOn(r.outcomeFill);
    s += `<line x1="764" y1="${bcy}" x2="953" y2="${bcy}" stroke="${t.arrow}" stroke-width="1.7" marker-end="url(#arr)"/>`;
    s += `<text x="863" y="${bcy - 10}" text-anchor="middle" font-size="11" fill="${t.tag}" letter-spacing="0.6">${esc(r.outcomeLabel)}</text>`;
    const bstroke = r.accent ? t.accentStroke : t.boxStroke;
    const bsw = r.accent ? t.accentStrokeWidth : t.boxStrokeWidth;
    s += `<rect x="${boxX}" y="${by}" width="${boxW}" height="${boxH}" rx="11" fill="${r.outcomeFill}" stroke="${bstroke}" stroke-width="${bsw}"/>`;
    s += `<text x="${boxX + boxW / 2}" y="${by + 33}" text-anchor="middle" font-size="18" font-weight="700" fill="${ink}">${esc(r.outcome)}</text>`;
    s += `<text x="${boxX + boxW / 2}" y="${by + 55}" text-anchor="middle" font-size="10.5" fill="${mut}" font-style="italic">${esc(r.source)}</text>`;
    by += boxH + gap;
  }
  s += `<text x="${cx}" y="818" text-anchor="middle" font-size="10.5" fill="${t.footer}">${esc(m.footer)}</text>`;
  s += `</svg>`;
  return s;
}

/* ---------- DOM wiring ---------- */

function $(sel) { return document.querySelector(sel); }

function render() {
  $("#stage").innerHTML = renderSVG(MODEL);
  const jt = $("#json");
  if (jt && document.activeElement !== jt) jt.value = JSON.stringify(MODEL, null, 2);
}

function field(label, value, oninput, type) {
  const wrap = document.createElement("label");
  wrap.className = "fld";
  const span = document.createElement("span");
  span.textContent = label;
  const input = document.createElement("input");
  input.type = type || "text";
  input.value = value;
  if (type === "number") input.step = "any";
  input.addEventListener("input", () => oninput(type === "number" ? parseFloat(input.value) : input.value));
  wrap.appendChild(span);
  wrap.appendChild(input);
  return wrap;
}

function colorField(label, value, oninput) {
  const wrap = document.createElement("label");
  wrap.className = "fld color";
  const span = document.createElement("span");
  span.textContent = label;
  const input = document.createElement("input");
  input.type = "color";
  input.value = (value || "#ffffff").slice(0, 7);
  const hex = document.createElement("input");
  hex.type = "text";
  hex.className = "hex";
  hex.value = value;
  input.addEventListener("input", () => { hex.value = input.value; oninput(input.value); });
  hex.addEventListener("input", () => { if (/^#[0-9a-fA-F]{6}$/.test(hex.value)) { input.value = hex.value; oninput(hex.value); } });
  wrap.appendChild(span);
  wrap.appendChild(input);
  wrap.appendChild(hex);
  return wrap;
}

function buildControls() {
  const root = $("#controls");
  root.innerHTML = "";

  const glob = document.createElement("div");
  glob.className = "card";
  glob.innerHTML = "<h3>Diagram</h3>";
  glob.appendChild(field("Title", MODEL.title, v => { MODEL.title = v; render(); }));
  glob.appendChild(field("Subtitle", MODEL.subtitle, v => { MODEL.subtitle = v; render(); }));
  glob.appendChild(field("Footer", MODEL.footer, v => { MODEL.footer = v; render(); }));
  root.appendChild(glob);

  MODEL.rings.forEach((r, i) => {
    const card = document.createElement("div");
    card.className = "card ring";
    const h = document.createElement("h3");
    h.textContent = `Ring ${i + 1} — ${r.label}` + (i === 0 ? "  (outermost)" : (i === MODEL.rings.length - 1 ? "  (core)" : ""));
    card.appendChild(h);

    const ops = document.createElement("div");
    ops.className = "ops";
    const up = mkBtn("↑", () => moveRing(i, -1));
    const dn = mkBtn("↓", () => moveRing(i, 1));
    const del = mkBtn("✕", () => { MODEL.rings.splice(i, 1); buildControls(); render(); });
    up.disabled = i === 0; dn.disabled = i === MODEL.rings.length - 1;
    ops.append(up, dn, del);
    card.appendChild(ops);

    card.appendChild(field("Label", r.label, v => { r.label = v; h.textContent = `Ring ${i + 1} — ${v}`; render(); }));
    card.appendChild(field("Sublabel", r.sublabel, v => { r.sublabel = v; render(); }));
    card.appendChild(field("Radius (px)", r.radius, v => { r.radius = v; render(); }, "number"));
    card.appendChild(colorField("Ring fill", r.fill, v => { r.fill = v; render(); }));
    card.appendChild(field("Outcome tag", r.outcomeLabel, v => { r.outcomeLabel = v; render(); }));
    card.appendChild(field("Outcome", r.outcome, v => { r.outcome = v; render(); }));
    card.appendChild(field("Source", r.source, v => { r.source = v; render(); }));
    card.appendChild(colorField("Box fill", r.outcomeFill, v => { r.outcomeFill = v; render(); }));

    const acc = document.createElement("label");
    acc.className = "fld chk";
    const cb = document.createElement("input");
    cb.type = "checkbox"; cb.checked = !!r.accent;
    cb.addEventListener("change", () => { r.accent = cb.checked; render(); });
    const sp = document.createElement("span"); sp.textContent = "Accent (gold ★)";
    acc.append(sp, cb);
    card.appendChild(acc);

    root.appendChild(card);
  });

  const add = mkBtn("+ Add ring", () => {
    MODEL.rings.push({ id: "ring" + (MODEL.rings.length + 1), label: "NEW RING", sublabel: "", radius: 60,
      fill: "#dddddd", outcomeLabel: "", outcome: "NEW OUTCOME", outcomeFill: "#dddddd", source: "", accent: false });
    buildControls(); render();
  });
  add.className = "addring";
  root.appendChild(add);
}

function mkBtn(txt, fn) {
  const b = document.createElement("button");
  b.type = "button"; b.textContent = txt;
  b.addEventListener("click", fn);
  return b;
}

function moveRing(i, dir) {
  const j = i + dir;
  if (j < 0 || j >= MODEL.rings.length) return;
  const t = MODEL.rings[i]; MODEL.rings[i] = MODEL.rings[j]; MODEL.rings[j] = t;
  buildControls(); render();
}

/* ---------- export ---------- */

function stamp() {
  const d = new Date();
  const p = n => String(n).padStart(2, "0");
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}`;
}

function download(blob, name) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = name;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function exportSVG() {
  download(new Blob([renderSVG(MODEL)], { type: "image/svg+xml;charset=utf-8" }), `spok-os-${stamp()}.svg`);
}

function exportPNG() {
  const scale = MODEL.pngScale || 2;
  const { width, height } = MODEL.canvas;
  const svg = renderSVG(MODEL);
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml;charset=utf-8" }));
  const img = new Image();
  img.onload = function () {
    const c = document.createElement("canvas");
    c.width = width * scale; c.height = height * scale;
    const ctx = c.getContext("2d");
    ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, c.width, c.height);
    ctx.drawImage(img, 0, 0, c.width, c.height);
    URL.revokeObjectURL(url);
    c.toBlob(b => download(b, `spok-os-${stamp()}.png`), "image/png");
  };
  img.onerror = function () { URL.revokeObjectURL(url); alert("PNG render failed — try Export SVG."); };
  img.src = url;
}

function applyJSON() {
  try {
    const next = JSON.parse($("#json").value);
    if (!next || !Array.isArray(next.rings)) throw new Error("model needs a rings[] array");
    Object.keys(MODEL).forEach(k => delete MODEL[k]);
    Object.assign(MODEL, next);
    buildControls(); render();
    flash("Applied ✓");
  } catch (e) { flash("JSON error: " + e.message, true); }
}

function flash(msg, bad) {
  const el = $("#flash");
  el.textContent = msg; el.className = bad ? "bad" : "ok";
  setTimeout(() => { el.textContent = ""; el.className = ""; }, 2500);
}

/* ---------- boot ---------- */

if (typeof window !== "undefined") window.addEventListener("DOMContentLoaded", () => {
  $("#exportPng").addEventListener("click", exportPNG);
  $("#exportSvg").addEventListener("click", exportSVG);
  $("#applyJson").addEventListener("click", applyJSON);
  $("#copyJson").addEventListener("click", () => { navigator.clipboard.writeText(JSON.stringify(MODEL, null, 2)); flash("Copied ✓"); });
  const sc = $("#scale");
  sc.value = MODEL.pngScale;
  sc.addEventListener("input", () => { MODEL.pngScale = parseFloat(sc.value) || 2; });
  buildControls();
  render();
});

if (typeof module !== "undefined" && module.exports) { module.exports = { MODEL, renderSVG, esc }; }
