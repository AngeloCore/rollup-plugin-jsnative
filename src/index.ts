import { Plugin } from "rollup";
import { createFilter, FilterPattern } from "@rollup/pluginutils";
import { extname, basename } from "node:path";
import { readFileSync } from "node:fs";

const MAX_SIZE = 1e6; // 1MB

export const generateBootstrap = (buff: Buffer) =>
  `const NODE_LIB_BUFFER = ${JSON.stringify(Array.from(buff))};
  
function getLibrary() {
  const { writeFileSync } = require("node:fs");
  const { createRequire } = require("node:module");

  const customRequire = createRequire(__filename);

  const generateTemp = () => {
    const { existsSync } = require("node:fs");
    const { tmpdir } = require("node:os");
    const { join: joinPath } = require("node:path");
    const { randomBytes } = require("node:crypto");

    const path = joinPath(tmpdir(), randomBytes(4).readUint32LE(0) + ".node");

    if (existsSync(path)) return generateTemp();

    return path;
  };

  const tempFile = generateTemp();

  writeFileSync(tempFile, Buffer.from(NODE_LIB_BUFFER));

  console.log(tempFile);

  return customRequire(tempFile);
}

export default getLibrary();
`;

interface Options {
  include?: FilterPattern;
  exclude?: FilterPattern;
}

export default function plugin(options: Options = {}): Plugin {
  const filter = createFilter(options.include, options.exclude);

  return {
    name: "js-native",
    load(id) {
      if (extname(id) != ".node" || !filter(id)) return null;

      const file = readFileSync(id);

      if (file.byteLength > MAX_SIZE)
        this.warn(
          `${basename(
            id
          )} is more than 1MB and it will affect build & runtime performance significantly, consider using rollup-plugin-natives instead.`
        );

      return generateBootstrap(file);
    }
  };
}
