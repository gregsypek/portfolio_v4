module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"standard",
		"plugin:tailwindcss/recommended",
		"prettier",
		"plugin:@typescript-eslint/recommended", // Dodaj wsparcie dla TypeScript
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser", // Użyj parsera TypeScript
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: "./tsconfig.json", // Wskaż plik tsconfig.json
	},
	settings: {
		react: { version: "18.2" },
	},
	plugins: [
		"react-refresh",
		"@typescript-eslint", // Dodaj wtyczkę TypeScript
	],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		// "react/prop-types": 0, // Wyłącz PropTypes (niepotrzebne w TypeScript)
		"@typescript-eslint/explicit-function-return-type": "off", // Opcjonalnie: wyłącz wymóg typów zwracanych
		"@typescript-eslint/no-unused-vars": "warn", // Ostrzeżenia dla nieużywanych zmiennych
		"no-unused-vars": "off", // Wyłącz regułę ESLint dla nieużywanych zmiennych (zastąpiona przez TypeScript)
	},
};
