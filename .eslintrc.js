module.exports = {
  env: {
    browser: true,
    es2021: true,
    jquery: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'eslint:recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
    ecmaVersion: 12,
    parser: '@babel/eslint-parser',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
      },
    },
  },
  plugins: [
    'vue',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
    quotes: [1, 'single'],
    'key-spacing': [
      1,
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'dot-notation': 2,
    'max-len': [1, {
      code: 200,
    }],
    'eol-last': [1, 'never'],
    'vue/prop-name-casing': 2,
    'vue/component-name-in-template-casing': 2,
    'import/prefer-default-export': 'off',
    'function-call-argument-newline': ['error', 'never'],
  },
};