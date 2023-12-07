# rollup-plugin-jsnative

Rollup plugin to include native .node modules in output JavaScript file (very bad performance)

## Installation

npm:

```console
npm i rollup-plugin-jsnative -D
```

yarn:

```console
yarn add rollup-plugin-jsnative -D
```

pnpm:

```console
pnpm add rollup-plugin-jsnative -D
```

## Usage

```js
import native from "rollup-plugin-jsnative";

export default {
  input: "src/index.js",
  output: {
    dir: "output",
    format: "cjs"
  },
  plugins: [native()]
};
```

## Options

### `exclude`

Type: `String` | `Array[...String]`<br>
Default: `null`

A [picomatch pattern](https://github.com/micromatch/picomatch), or array of patterns, which specifies the files in the build the plugin should _ignore_. By default no files are ignored.

### `include`

Type: `String` | `Array[...String]`<br>
Default: `null`

A [picomatch pattern](https://github.com/micromatch/picomatch), or array of patterns, which specifies the files in the build the plugin should operate on. By default all files are targeted.

## Exports

### `generateBootstrap(buff: Buffer)`

Returns: `string`

Accepts buffer of a .node file and returns generated bootstrap.

## Information

### Resources

- [Github](https://github.com/AngeloCore/rollup-plugin-jsnative)
- [Rollup](https://rollupjs.org/)
- [rollup-plugin-natives](https://github.com/danielgindi/rollup-plugin-natives)

Made by [Angelo II](https://github.com/AngeloCore)

Copyright © (C) Angelo II, MIT license.
