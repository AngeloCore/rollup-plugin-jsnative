import { Plugin } from "rollup";

interface Options {
  cool: boolean;
}

export function doIt(thing: string) {
  return thing;
}

export default function plugin(options: Options = { cool: true }): Plugin {
  return {
    name: "template"
  };
}
