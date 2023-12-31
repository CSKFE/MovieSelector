module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  "prefer-const": ["warn", {
    "destructuring": "any",
    "ignoreReadBeforeAssign": false
  }],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-unuesd-vars': 'off',
    '@typescript-eslint/no-unuesd-vars': 'off'
  },
}
