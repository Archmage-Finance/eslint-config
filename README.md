# Archmage eslint-config

Common eslint config for Vue3 + Typescript + Prettier projects.

## Install

`npm i -D eslint typescript prettier @archmagefi/eslint-config`.

## Extend .eslintrc.js

```
/* eslint-env node */
require("@archmagefi/eslint-config")

// Prettier/prettier rule is optional and uses your local .prettierrc file
module.exports = {
    root: true,
    extends: [
        "@archmagefi/eslint-config",
    ],
    rules: {
        "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    },
}
```

## Run

Add following line to `scripts` section in package.json.

`"lint": "eslint --ext .ts,vue --ignore-path .gitignore . --fix"`

Then run `npm run lint`.

## Publish to npm

`npm login`

`npm publish --access public`