/** @type {import('prettier').Config} */

module.exports = {
  printWidth: 100,
  semi: false,
  singleQuote: false,
  arrowParens: "avoid",
  proseWrap: "always", // printWidth line breaks in md/mdx
  tabWidth: 2,
  trailingComma: "es5",

  importOrderSeparation: false, // import order groups won't be separated by a new line
  importOrderSortSpecifiers: true, // sorts the import specifiers alphabetically
  importOrderCaseInsensitive: true, // case-insensitive sorting
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,

  plugins: [
    // prettify Dockerfile, gitignore, dotenv
    require("prettier-plugin-sh"),

    // sort package.json
    require("prettier-plugin-pkg"),

    // sort imports
    require("@ianvs/prettier-plugin-sort-imports"),

    // sort tailwind classes
    // !!!: MUST GO LAST
    require("prettier-plugin-tailwindcss"),
  ],

  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "",
    "^(@|\\d|_)",
    "^@/types/(.*)$",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/components/(.*)$",
    "^@/styles/(.*)$",
    "^[./]",
    "",
    "^@/graphql/(.*)$",
    "",
    "^@/assets/(.*)$",
  ],
}
