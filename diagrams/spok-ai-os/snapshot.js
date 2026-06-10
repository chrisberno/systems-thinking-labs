/* Checkpoint tool — bank the current MODEL as SVG + JSON.
 * Usage:  node snapshot.js "short-label"
 * Writes ~/Desktop/spok-os-diagram/NN-short-label.{svg,json}  (auto-incrementing NN)
 */
const path = require("path");
const fs = require("fs");
const os = require("os");
const { MODEL, renderSVG } = require("./editor.js");

const dir = path.join(os.homedir(), "Desktop", "spok-os-diagram");
fs.mkdirSync(dir, { recursive: true });

const label = (process.argv[2] || "checkpoint").replace(/[^a-z0-9-]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase() || "checkpoint";
const nums = fs.readdirSync(dir).filter(f => /^\d\d-/.test(f)).map(f => parseInt(f.slice(0, 2), 10));
const nn = String((nums.length ? Math.max(...nums) : 0) + 1).padStart(2, "0");
const base = `${nn}-${label}`;

fs.writeFileSync(path.join(dir, base + ".svg"), renderSVG(MODEL));
fs.writeFileSync(path.join(dir, base + ".json"), JSON.stringify(MODEL, null, 2));
console.log(`saved checkpoint: ${base}  ->  ${dir}`);
