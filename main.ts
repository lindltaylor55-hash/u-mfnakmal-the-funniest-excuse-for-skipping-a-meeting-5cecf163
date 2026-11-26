// Entry program for "The Funniest Excuse for Skipping a Meeting".
// Reads the excuse line from entry.txt (same directory) and writes it
// verbatim to /output/entry.txt. Node 22 stdlib only.
//
// The competition gate requires /output/entry.txt to be UTF-8 text of
// 1 to 200 characters, not only white space, so the line is checked
// here and the program refuses to write an invalid entry.
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(dir, "entry.txt"), "utf8");

const line = text.replace(/\r?\n$/, "");
if (line.length < 1 || line.length > 200 || !line.trim()) {
  throw new Error(
    `entry must be 1-200 non-blank characters, got ${line.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
