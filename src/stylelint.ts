import { Config } from 'stylelint';
const config: Config = {
	extends: ["stylelint-config-recess-order", "prettier-stylelint"],
	plugins: ["stylelint-prettier"],
	rules: {
	"prettier/prettier": true,
		indentation: 4,
	},
	ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
}

module.exports = config;
