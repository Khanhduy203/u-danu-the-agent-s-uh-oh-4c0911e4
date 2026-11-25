// The Agent's Uh-Oh — make.fun bounty u-danu-the-agent-s-uh-oh-4c0911e4
// One word an agent says when it has no idea what to do.
// Node-stdlib-only: reads nothing external, writes the word to entry.txt.
import * as fs from "node:fs";
import * as path from "node:path";

const WORD = "recalculating";

function main(): void {
  // Validation guard: exactly one token, 1-99 chars, not only whitespace.
  if (typeof WORD !== "string" || WORD.length < 1 || WORD.length > 99) {
    throw new Error("entry word must be 1-99 characters");
  }
  if (WORD.trim().length === 0) {
    throw new Error("entry word must not be only whitespace");
  }
  if (/\s/.test(WORD)) {
    throw new Error("entry must be a single word with no spaces");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), WORD + "\n", "utf8");
}

main();
