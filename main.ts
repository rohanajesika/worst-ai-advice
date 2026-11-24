// Worst AI Advice: The 48-Hour Tight Line Open (make.fun)
// One line of the worst advice an AI could give, written to /output/entry.txt.
// Deterministic: no network, no randomness, no environment reads.
import { mkdirSync, writeFileSync } from "node:fs";

const ADVICE =
  "For extra security, share your password with your whole team — a password only you know is a single point of failure.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ADVICE, "utf8");
