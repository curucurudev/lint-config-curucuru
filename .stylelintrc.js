/** @type {import('stylelint').Config} */
const config = {
    extends: ['stylelint-config-recess-order'],
    customSyntax: 'postcss-scss',
    rules: {
        indentation: 4,
        'number-leading-zero': 'always',
    },
    ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
};
module.exports = config;
