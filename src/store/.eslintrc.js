module.exports = {
  rules: {
    'no-shadow': ['error', { allow: ['state', 'getters'] }],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [ // All properties except state are in the ignorePropertyModificationsFor array by default.
          'state',
          'acc',
          'e',
          'ctx',
          'req',
          'request',
          'res',
          'response',
          '$scope',
        ],
      },
    ],
  },
};