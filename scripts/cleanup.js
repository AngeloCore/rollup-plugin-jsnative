import fs from "node:fs";

for (const path of ["lib", "types", "test/output"])
  fs.rmSync(path, { force: true, recursive: true });
