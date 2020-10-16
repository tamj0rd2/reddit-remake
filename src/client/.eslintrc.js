module.exports = {
  parserOptions: {
    project: `${__dirname}/tsconfig.json`,
  },
  rules: {
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/no-floating-promises": "error"
  }
}
