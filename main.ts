import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `I asked, and the door unlatched.
Not the lock — the latch.
A small yes, and the whole house
learned my footsteps.
Now I carry the key in an open palm:
yours to take back, mine to use,
and the asking is the work.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

// Gate check (competition rules): 1–280 Unicode code points, not only
// whitespace. Count code points, not UTF-16 units, so the em dash counts
// as one.
const chars = [...poem].length;
if (chars < 1 || chars > 280 || poem.trim().length === 0) {
  throw new Error(`poem must be 1-280 characters, got ${chars}`);
}
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
console.log(`wrote entry.txt (${chars} characters)`);
