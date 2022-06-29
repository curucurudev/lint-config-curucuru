# lint-config-curucuru

Shared TypeScript / ESLint / Prettier configuration.

## Requirements

- Node.js: "^12.22.0 || ^14.17.0 || >=16.0.0".

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
              "@/*": [
                "./src/*"
              ],
            },
        },
        "include": ["./src"]
    }
    ```

    `.eslintrc.js`
    ```js
    {
        extends: ['./node_modules/@curucuru/lint-config/config/eslint'],
    }
    ```

    `.stylelint.js`
    ```js
    {
        extends: ['./node_modules/@curucuru/lint-config/config/stylelint'],
    }
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

- Visual Studio Code

    auto fix

    `setting.json`

    ```json
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.fixAll.stylelint": true
    },
    ```

- lint-staged & husky

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
