"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'prettier',
        'react',
        'import',
        'simple-import-sort',
    ],
    rules: {
        'prettier/prettier': [
            'error',
            {
                printWidth: 120,
                tabWidth: 4,
                useTabs: false,
                singleQuote: true,
                proseWrap: 'preserve',
                trailingComma: 'all',
                maxChaining: 1,
            },
        ],
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-empty-interface': [
            'error',
            {
                allowSingleExtends: true,
            },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': [
            'off',
            {
                argsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        'import/no-default-export': 'off',
        'import/order': 'off',
        'max-classes-per-file': 'off',
        'no-console': 'warn',
        'no-useless-escape': 'off',
        'object-shorthand': 'off',
        'react/jsx-no-target-blank': 'error',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'sort-imports': 'off',
        'sort-keys': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
module.exports = config;
//# sourceMappingURL=eslint.js.map