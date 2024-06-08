const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@assets/*': path.resolve(__dirname, './src/assets/*'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@providers': path.resolve(__dirname, './src/providers'),
      '@localization': path.resolve(__dirname, './src/localization'),
      '@router': path.resolve(__dirname, './src/router'),
      '@screens': path.resolve(__dirname, './src/screens'),
      // UI store
      '@uiStore': path.resolve(__dirname, './src/store/uiStore'),
      // Process store
      '@processStore': path.resolve(__dirname, './src/store/processStore'),
      // Settings store
      '@settingsStore': path.resolve(__dirname, './src/store/settingsStore'),
      // App store
      '@appStore': path.resolve(__dirname, './src/store/appStore'),
    },
  },
};
