import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

export default {
	semi: false,
	singleQuote: true,
	tabWidth: 2,
	jsxSingleQuote: true,
	trailingComma: 'all',
	printWidth: 120,
	endOfLine: 'lf',
	useTabs: true,
	plugins: [require.resolve('prettier-plugin-layout')],
}
