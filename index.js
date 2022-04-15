/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
    root: true,
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        "@rushstack/eslint-config/profile/web-app",
        "plugin:vue/vue3-recommended",
        "@vue/eslint-config-typescript/recommended",
        "@vue/eslint-config-prettier",
    ],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "vue/multi-word-component-names": "off",
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.json'
            }
        }
    ],
}