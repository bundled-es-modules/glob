import * as esbuild from "esbuild";
import { readFile, writeFile, readdir, cp } from "node:fs/promises";

await esbuild.build({
  entryPoints: ["index.js"],
  bundle: true,
  write: true,
  format: "esm",
  outfile: "browser.js",
  alias: {
    "node:buffer": "buffer",
    "node:events": "events",
    "node:path": "path",
    "node:stream": "stream",
    "node:string_decoder": "string_decoder",
    "node:url": "url",
  },
});

const fileBefore = await readFile("./browser.js", "utf-8");
const process = await readFile("./process.js", "utf-8");

/**
 * Manually fix some issues with process global being unavailable
 */
const fileAfter = `${process}\n${fileBefore}`;

await writeFile("./browser.js", fileAfter);

// copy the .d.(m)ts files from glob and ensure they are also published, for TS support
const dtsFiles = (await readdir("./node_modules/glob/dist/esm")).filter(
  (f) => f.endsWith(".d.ts") || f.endsWith(".d.mts")
);
await Promise.all(
  dtsFiles.map((f) => cp(`./node_modules/glob/dist/esm/${f}`, `./${f}`))
);
