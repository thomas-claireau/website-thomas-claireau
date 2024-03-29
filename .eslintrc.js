module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'max-len': 'off',
    'react/no-unescaped-entities': 'off',
    'no-underscore-dangle': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
};
