module.exports = {
  plugins: {
    autoprefixer: {},
    postcssPresetEnv: {},
    'postcss-pxtorem': {
      rootValue: 16,
      unitPrecision: 6,
      propList: ['*'],
      selectorBlackList: ['border', 'border-top', 'border-bottom', 'max-width'],
      replace: true,
      mediaQuery: true,
      minPixelValue: 4,
      exclude: /node_modules/i,
    },
  },
}
