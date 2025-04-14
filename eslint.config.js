import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{ ignores: ['dist'] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		rules: {
			// ...reactHooks.configs.recommended.rules,
			// 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'prettier/prettier': [
				'off',
				{
					arrowParens: 'always',
					bracketSpacing: true,
					jsxBracketSameLine: false,
					jsxSingleQuote: false,
					quoteProps: 'as-needed',
					singleQuote: true,
					semi: true,
					trailingComma: 'es5',
					endOfLine: 'auto',
					printWidth: 140,
					proseWrap: 'preserve',
					requirePragma: false,
					tabWidth: 4,
					useTabs: true,
					singleAttributePerLine: true,
				},
			],
		},
	}
);
