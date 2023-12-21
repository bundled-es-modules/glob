import fs from "node:fs";
import glob from "./index-esm-node.js";

// tiny smoke test
console.assert(
  JSON.stringify(glob.sync("smoke-test/*.txt", { fs })) ===
    JSON.stringify(["smoke-test/hello2.txt", "smoke-test/hello.txt"])
);
