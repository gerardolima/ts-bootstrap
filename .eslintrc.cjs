module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  env: {
    es2020: true,
    node: true,
    jest: true,
  },
  rules: {
    'semi': ['off'],
    'quotes': ['off'],

    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {delimiter: 'none'},
      singleline: {delimiter: 'semi'},
    }],
    '@typescript-eslint/semi': ['error', 'never'],
  }
};