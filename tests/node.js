import fs from "node:fs";
import { glob } from "../index.js";

// tiny smoke test
console.assert(
  JSON.stringify(glob.sync("tests/*.txt", { fs })) ===
    JSON.stringify(["tests/hello2.txt", "tests/hello.txt"])
);
