import fs from "node:fs";

for (const path of ["lib", "types"])
  fs.rmSync(path, { force: true, recursive: true });
