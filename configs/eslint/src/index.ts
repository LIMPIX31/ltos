import      { resolve }    from 'node:path'

// @ts-expect-error: no dts
import      importSort     from '@lmpx-fork/eslint-plugin-simple-import-sort'
import      typescript     from '@typescript-eslint/eslint-plugin'
import      parser         from '@typescript-eslint/parser'
import type { Linter }     from 'eslint'
// @ts-expect-error: no dts
import      prettierConfig from 'eslint-config-prettier'
import      prettier       from 'eslint-plugin-prettier'

import      { rules }      from './rules.ts'

const project = resolve(process.cwd(), 'tsconfig.json')

export default [
	prettierConfig,
	{
		files: ['**/*.{js,jsx,ts,tsx,mjs,cjs,mts,cts,html}'],
		rules,
		plugins: {
			prettier,
			'@typescript-eslint': typescript,
			'import-sort': importSort,
		},
		languageOptions: {
			globals: {
				React: 'readonly',
				JSX: 'readonly',
			},
			parser,
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 'latest',
			},
		},
		settings: {
			'import/resolver': {
				typescript: {
					project,
				},
			},
		},
		ignores: ['**/.*.js', '**/node_modules/*', '**/dist/*', '.pnp.cjs', '.pnp.loader.mjs'],
	},
] satisfies Linter.FlatConfig[]
