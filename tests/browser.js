import fs from "@bundled-es-modules/memfs";
import { glob } from "../browser.js";

// tiny smoke test
fs.mkdirSync("tests");
fs.writeFileSync(`tests/hello.txt`, "Hello!", "utf-8");
fs.writeFileSync(`tests/hello2.txt`, "Hello!", "utf-8");

console.assert(
  JSON.stringify(glob.sync("tests/*.txt", { fs })) ===
    JSON.stringify(["/tests/hello2.txt", "/tests/hello.txt"])
);
