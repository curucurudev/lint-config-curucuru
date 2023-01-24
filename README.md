# lint-config-curucuru

Shareable Configs.
Supported TypeScript / ESLint / Styleilnt / Prettier configuration.

## Requirements

-   Node.js: "^12.22.0 || ^14.17.0 || >=16.0.0".

## Usage

1. install

    ```
    yarn add -D typescript eslint stylelint prettier
    yarn add -D @curucuru/lint-config
    ```

2. Link configurations

    `tsconfig.json`

    ```json
    {
        "extends": "@curucuru/lint-config",
        "compilerOptions": {
            "baseUrl": ".",
            "outDir": "./build",
            "rootDir": "./src",
            "paths": {
                "@/*": ["./src/*"]
            }
        },
        "include": ["**/*.ts", "**/*.tsx"]
    }
    ```

    `.eslintrc.js`

    ```js
    /** @type {import('@typescript-eslint/utils').TSESLint.Linter.Config} */
    const config = {
        extends: [
            './node_modules/@curucuru/lint-config/.eslintrc.js',
            // './node_modules/@curucuru/lint-config/.eslintrc.next.js', // for next.js
        ],
    };
    module.exports = config;
    ```

    `.stylelint.js`

    ```js
    /** @type {import('stylelint').Config} */
    const config = {
        extends: ['./node_modules/@curucuru/lint-config/.stylelintrc.js'],
    };
    module.exports = config;
    ```

    `.prettierrc.js`

    ```js
    /** @type {import('prettier').Config} */
    module.exports = {
        ...require('./node_modules/@curucuru/lint-config/.prettierrc.js'),
    };
    ```

3. Add scripts to `package.json`

    ```json
    {
        "scripts": {
            "eslint": "eslint --fix --ext .js,.jsx,.ts,.tsx ./src",
            "stylelint": "stylelint './src/**/*.{css,scss}' --fix"
        }
    }
    ```

## Recommend settings

-   Visual Studio Code

    auto fix

    `setting.json`

    ```json
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.fixAll.stylelint": true
    },
    ```

-   lint-staged & husky

    1. install

    ```
    yarn add -D husky lint-staged
    ```

    2. Add scripts to `package.json`

    ```json
    "lint-staged": {
      "./src/**/*.@(ts|tsx|js|jsx)": [
        "npm run eslint",
        "npm run test"
      ],
      "./src/**/*.@(scss|css)": [
        "npm run stylelint"
      ]
    }
    ```

    If it is monorepo, you can declare it in the root directory and use --prefix
    https://docs.npmjs.com/cli/v7/commands/npm-prefix

## Config Development

```
yarn build
```
