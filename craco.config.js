const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@assets/*': path.resolve(__dirname, './src/assets/*'),
      '@components': path.resolve(__dirname, './src/components'),
      '@providers': path.resolve(__dirname, './src/providers'),
      '@localization': path.resolve(__dirname, './src/localization'),
      '@router': path.resolve(__dirname, './src/router'),
      '@screens': path.resolve(__dirname, './src/screens'),
      // UI store
      '@uiStore': path.resolve(__dirname, './src/store/uiStore'),
      '@uiStore/selector': path.resolve(
        __dirname,
        './src/store/uiStore/selector',
      ),
      // Process store
      '@processStore': path.resolve(__dirname, './src/store/processStore'),
      '@processStore/selector': path.resolve(
        __dirname,
        './src/store/processStore/selector',
      ),
      // Settings store
      '@settingsStore': path.resolve(__dirname, './src/store/settingsStore'),
      '@settingsStore/selector': path.resolve(
        __dirname,
        './src/store/settingsStore/selector',
      ),
    },
  },
};
