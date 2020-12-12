module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'plugin:react/recommended', // React rules
        'plugin:react-hooks/recommended', // React hooks rules
        'prettier/@typescript-eslint', // Prettier plugin
        'plugin:prettier/recommended' // Prettier recommended rules
      ],
      rules: {
        semi: ['error', 'never'],
        quotes: ['error', 'single'],
        'react/prop-types': 'off', // We will use TypeScript's types for component props instead
        'react/react-in-jsx-scope': 'off', // No need to import React with Next.js
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/explicit-function-return-type': [
          // I suggest this setting for requiring return types on functions only where usefull
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true
          }
        ],
        'prettier/prettier': ['error', {}, { usePrettierrc: true }] // Includes .prettierrc.js rules
      }
    }
  ]
}
