module.exports = {
  verbose: true,
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/jest.js'],
  roots: ['./'],
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
    // exclude files from coverage
    '!src/**/index.ts',
    '!src/**/index.tsx',
    '!src/**/App.tsx',
    '!src/**/react-app-env.d.ts',
    '!src/**/reportWebVitals.ts',
    '!src/**/setupTests.ts',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    // '@assets/(.*)': '<rootDir>/src/assets/$1',
    // '@router': '<rootDir>/src/router',
    '@screens': '<rootDir>/src/screens',
    '@components': '<rootDir>/src/components',
    '@localization': '<rootDir>/src/localization',
    '@providers': '<rootDir>/src/providers',
    // UI store
    '@uiStore': '<rootDir>/src/store/uiStore',
    '@uiStore/selector': '<rootDir>/src/store/uiStore/selector',
    // Process store
    '@processStore': '<rootDir>/src/store/processStore',
    '@processStore/selector': '<rootDir>/src/store/processStore/selector',
    // Settings store
    '@settingsStore': '<rootDir>/src/store/settingsStore',
    '@settingsStore/selector': '<rootDir>/src/store/settingsStore/selector',
  },
  transform: {
    '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
};
