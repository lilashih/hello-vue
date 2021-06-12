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
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: ['warn', 'single'],
    'key-spacing': [
      'warn',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'dot-notation': 'error',
    'max-len': ['warn', {
      code: 200,
    }],
    'eol-last': ['warn', 'never'],
    'vue/prop-name-casing': 'error',
    'vue/component-name-in-template-casing': 'error',
    'import/prefer-default-export': 'off',
    'function-call-argument-newline': ['error', 'never'],
    'no-unused-vars': 'warn',
    'consistent-return': 'warn',
  },
};