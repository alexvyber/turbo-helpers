# @alexvyber/eslint-config

Guild's ESLint shareable configs for linting JavaScript/TypeScript/React projects.

## Install

For JavaScript/TypeScript projects

```sh
pnpm add -D eslint @alexvyber/eslint-config
```

## Usage

Extend a `@alexvyber` config for JavaScript/TypeScript projects.

```js
// .eslintrc.cjs
module.exports = {
  extends: ["@alexvyber"],
}
```

### React Config

Extend a `@alexvyber/eslint-config/react` config for React projects.

```js
// .eslintrc.cjs
module.exports = {
  extends: ["@alexvyber/eslint-config/react"],
}
```

### MDX/Markdown Config

Extend a `@alexvyber/eslint-config/mdx` config for `.md`/`.mdx` files.

```js
// .eslintrc.cjs
module.exports = {
  extends: ["@alexvyber/eslint-config/mdx"],
}
```

### JSON Config

Extend a `@alexvyber/eslint-config/json` config for `.json`/`.jsonc`/`.json5` files.

```js
// .eslintrc.cjs
module.exports = {
  extends: ["@alexvyber/eslint-config/json"],
}
```

### YAML Config

Extend a `@alexvyber/eslint-config/yml` config for `.yml`/`.yaml` files.

```js
// .eslintrc.cjs
module.exports = {
  extends: ["@alexvyber/eslint-config/yml"],
}
```
