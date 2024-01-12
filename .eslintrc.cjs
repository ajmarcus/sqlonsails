/* eslint-env node */
module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
    ],
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
    },
    plugins: ["@typescript-eslint"],
    root: true,
};
