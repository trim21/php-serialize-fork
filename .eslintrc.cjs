module.exports = {
  extends: ['standard-with-typescript', 'prettier'],
  ignorePatterns: ['*.test.ts', '*.config.ts', '**/test/**'],
  rules: {
    camelcase: 'off',
    'prettier/prettier': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'import/extensions': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
  },
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
}
