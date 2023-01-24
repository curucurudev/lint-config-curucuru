
const baseConfig = require('./.eslintrc.js');

/** @type {import('eslint/lib/shared/types').ConfigData} */
const config = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'next/core-web-vitals',
    ],
    ...baseConfig,
};
