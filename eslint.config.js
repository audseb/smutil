const js = require("@eslint/js")
const globals = require("globals")
const prettier = require("eslint-config-prettier")

module.exports = [
  { ignores: ["build/", "node_modules/"] },
  js.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.node }
    },
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }]
    }
  },
  prettier
]
