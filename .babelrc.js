module.exports = {
  presets: [
    ['@babel/preset-env', {
      corejs: '2',
      loose: true,
      shippedProposals: true,
      useBuiltIns: 'usage',
    }]
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-transform-react-jsx', { pragma: 'h' }],

    // Improve legacy IE compatibility
    ['@babel/plugin-transform-modules-commonjs', { loose: true }],
    '@babel/plugin-transform-member-expression-literals',
    '@babel/plugin-transform-property-literals'
  ],
  env: {
    test: {
      plugins: [
        'istanbul'
      ]
    }
  }
};
