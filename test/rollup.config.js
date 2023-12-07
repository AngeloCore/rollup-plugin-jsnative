import plugin from "../lib/index.js";

export default {
  input: "project/index.js",
  output: {
    dir: "output"
  },
  plugins: [plugin()]
};
