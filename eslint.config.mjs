import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import reactRefresh from "eslint-plugin-react-refresh";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	{
		ignores: ["**/dist", "**/.eslintrc.cjs"],
	},
	...fixupConfigRules(
		compat.extends(
			"eslint:recommended",
			"plugin:react/recommended",
			"plugin:react/jsx-runtime",
			"plugin:react-hooks/recommended",
			"standard",
			"plugin:tailwindcss/recommended",
			"prettier",
			"plugin:@typescript-eslint/recommended"
		)
	),
	{
		plugins: {
			"react-refresh": reactRefresh,
			"@typescript-eslint": fixupPluginRules(typescriptEslint),
		},

		languageOptions: {
			globals: {
				...globals.browser,
			},

			parser: tsParser,
			ecmaVersion: "latest",
			sourceType: "module",

			parserOptions: {
				project: "./tsconfig.json",
			},
		},

		settings: {
			react: {
				version: "18.2",
			},
		},

		rules: {
			"react-refresh/only-export-components": [
				"warn",
				{
					allowConstantExport: true,
				},
			],

			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/no-unused-vars": "warn",
			"no-unused-vars": "off",
		},
	},
];
