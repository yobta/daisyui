import loguxTsConfig from '@logux/eslint-config/ts'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...loguxTsConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'prefer-let/prefer-let': 'off',
    },
  },
]
