import fs from "@bundled-es-modules/memfs";
import glob from "./index-esm-node.js";

// tiny smoke test
fs.mkdirSync("smoke-test");
fs.writeFileSync(`smoke-test/hello.txt`, "Hello!", "utf-8");
fs.writeFileSync(`smoke-test/hello2.txt`, "Hello!", "utf-8");

console.assert(
  JSON.stringify(glob.sync("/smoke-test/*.txt", { fs })) ===
    JSON.stringify(["/smoke-test/hello2.txt", "/smoke-test/hello.txt"])
);
