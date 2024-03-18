import type { Linter }                    from 'eslint'

import      { default as prettierConfig } from '@ltos/config-prettier'

export const rules: Linter.RulesRecord = {
	'import-sort/imports': ['error'],
	'prettier/prettier': ['error', prettierConfig],
}
