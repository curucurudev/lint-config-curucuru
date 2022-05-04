"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    extends: ["stylelint-config-recess-order", "prettier-stylelint"],
    plugins: ["stylelint-prettier"],
    rules: {
        "prettier/prettier": true,
        indentation: 4,
    },
    ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
};
module.exports = config;
//# sourceMappingURL=stylelint.js.map