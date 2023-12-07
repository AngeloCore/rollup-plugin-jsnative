# rollup-plugin-template

The template for my rollup plugins.

## Installation

npm:

```console
npm i rollup-plugin-template -D
```

yarn:

```console
yarn add rollup-plugin-template -D
```

pnpm:

```console
pnpm add rollup-plugin-template -D
```

## Usage

```js
import template from "rollup-plugin-template";

export default {
  input: "src/index.js",
  output: {
    dir: "output",
    format: "cjs"
  },
  plugins: [template()]
};
```

## Options

### `cool`

Type: `boolean` <br>
Default: `true`

Determines if the plugin is cool

## Exports

### `doIt(thing: string)`

Returns: `string`

It does the specific thing.

## Information

### Resources

- [Github](https://github.com/AngeloCore/rollup-plugin-template)
- [Rollup](https://rollupjs.org/)

Made by [Angelo II](https://github.com/AngeloCore)

Copyright © (C) Angelo II, MIT license.
