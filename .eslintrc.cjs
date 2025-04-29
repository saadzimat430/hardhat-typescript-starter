/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    env: {
        node: true,
        es2020: true
    },
    ignorePatterns: [
        "node_modules/",
        "dist/",
        "artifacts/",
        "cache/",
        "typechain/"
    ]
};
