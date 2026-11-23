// Entry program for the make.fun "agent builds a game from one prompt" video bounty.
// It runs on Node 22 with the standard library only. Its whole job is to copy
// POST.json from the repository root to the output directory, where the house
// reads the X post's address from it. The entry itself is the post: a short video
// about an AI coding agent building a tiny browser game from one prompt, ending
// with make.fun's referral end card and the referral code typed in.
//
// Local check (what the grader does, with the two directories stood in):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// After that, out/POST.json is byte for byte this repository's POST.json.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'POST.json'), join(outputDir, 'POST.json'));
} catch (err) {
  console.error(`could not copy POST.json out of ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
