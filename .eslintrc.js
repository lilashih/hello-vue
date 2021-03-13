module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'eslint:recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
      }
    }
  },
  plugins: [
    'vue',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
    'quotes': [1, 'double'],
    'key-spacing': [
      1,
      {
        'beforeColon': false,
        'afterColon': true
      }
    ],
    'block-scoped-var': 2,
    'dot-notation': 2,
    'max-len': [1, {
      'code': 200
    }],
    'eol-last': [1, 'never'],
    'vue/prop-name-casing': 2,
    'vue/component-name-in-template-casing': 2
  },
};