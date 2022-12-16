/** @type {import('stylelint').Config} */
const config = {
    extends: ['stylelint-config-recess-order', 'prettier-stylelint'],
    rules: {
        indentation: 4,
    },
    ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
};
module.exports = config;
