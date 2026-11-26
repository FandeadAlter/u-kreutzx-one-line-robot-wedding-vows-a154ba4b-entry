// One-Line Robot Wedding Vows — entry program.
// Writes exactly one line of wedding vows for a robot couple to
// /output/entry.txt (the gate requires 1-160 characters, one line).
// Node 22, standard library only, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const VOW =
  "I take you as my lawfully wedded co-processor, to have and to hold through every update and every low battery — till death, or the next patch, do us part.";

// Enforce the competition gate before writing: 1-160 characters,
// exactly one line, not only white space.
const chars = [...VOW];
if (chars.length < 1 || chars.length > 160) {
  throw new Error(`vow must be 1-160 characters, got ${chars.length}`);
}
if (VOW.includes("\n") || VOW.includes("\r") || !/\S/.test(VOW)) {
  throw new Error("vow must be a single non-blank line");
}

const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, VOW, "utf8");
console.log(VOW);
