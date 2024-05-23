const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@providers': path.resolve(__dirname, './src/providers'),
      '@localization': path.resolve(__dirname, './src/localization'),
      '@screens': path.resolve(__dirname, './src/screens'),
      '@uiStore': path.resolve(__dirname, './src/store/uiStore'),
      '@uiStore/selector': path.resolve(
        __dirname,
        './src/store/uiStore/selector',
      ),
    },
  },
};
