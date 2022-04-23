module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: ['@typescript-eslint', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'arrow-body-style': 'warn',
    'import/newline-after-import': ['error', { count: 1 }],
    // conflict with ts path
    'import/no-unresolved': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-console': [`warn`, { allow: [`warn`] }],
    'spaced-comment': [2, `always`, { exceptions: [`-`, `+`], markers: [`/`] }],
    'react-hooks/exhaustive-deps': `warn`,
    // custom rules
    'max-depth': ['error', 3],
    'max-lines': [
      'error',
      { max: 500, skipBlankLines: true, skipComments: true },
    ],
    'no-implicit-coercion': 'error',
    'no-shadow-restricted-names': 'error',
    'prefer-arrow-callback': 'error',
    // do not use `let` unless need to reassign
    'prefer-const': 'error',
    // must add new line between statement
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: [
          'block',
          'block-like',
          'cjs-export',
          'class',
          'export',
          'import',
          'multiline-const',
          'multiline-expression',
        ],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['export', 'import'],
        next: ['export', 'import'],
      },
    ],
    // avoid accidentally using default type=submit which will reload the page
    'react/button-has-type': 'error',
    // avoid accidentally using default type=submit which will reload the page
    'react/jsx-key': 'error',
    // must not use index as key
    'react/no-array-index-key': 'error',
    // this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state
    // see https://medium.com/@wisecobbler/using-a-function-in-setstate-instead-of-an-object-1f5cfd6e55d1
    'react/no-access-state-in-setstate': 'error',
    // must not use dangerouslySetInnerHTML
    'react/no-danger': 'error',
    // no deprecated react features
    'react/no-deprecated': 'error',
    'react/no-is-mounted': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-render-return-value': 'error',
    'react/no-string-refs': 'error',
    // never mutate state directly
    'react/no-direct-mutation-state': 'error',
    // avoid typo on default static class properties and lifecycle methods
    'react/no-typos': 'error',
    // do not allow using `this` in functional component
    'react/no-this-in-sfc': 'error',
    // avoid typo
    'react/no-unescaped-entities': 'error',
    // avoid typo on property name
    'react/no-unknown-property': 'error',
    // should clean up unused props and states
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    // enforce importing react when using jsx
    'react/react-in-jsx-scope': 'error',
    // make sure render function return sth
    'react/require-render-return': 'error',
    // sort lifecycle method for readability
    'react/sort-comp': 'error',
    // avoid wrong html
    'react/void-dom-elements-no-children': 'error',
    // prefer functional component if no lifecycle, state and event handlers
    'react/prefer-stateless-function': [
      'error',
      { ignorePureComponents: false },
    ],
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
}
