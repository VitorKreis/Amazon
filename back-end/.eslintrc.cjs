module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'no-unused-vars': 0,
    'no-console': 0,
    'new-cap': 0,
    'no-restricted-globals': 0,
  },
};
