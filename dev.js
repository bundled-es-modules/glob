import fs from '@bundled-es-modules/memfs';
import glob from "./index-esm.js";

// tiny smoke test
fs.mkdirSync('/foo');
fs.writeFileSync(`/foo/hello`, "Hello!", "utf-8");
fs.writeFileSync(`/foo/hello2`, "Hello!", "utf-8");

console.assert(
  JSON.stringify(glob.sync('/foo/*', {fs})) ===
  JSON.stringify([ '/foo/hello2', '/foo/hello' ])
);
