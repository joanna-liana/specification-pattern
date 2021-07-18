module.exports = {
  transform: {
    '^.+\\.ts?$': '@swc/jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  rootDir: '.',
  collectCoverageFrom: ['**/*.ts', '!demo.ts'],
  testTimeout: 1200000,
  globalSetup: '<rootDir>/hooks/globalPostgresSetup.ts',
  globalTeardown: '<rootDir>/hooks/globalPostgresTeardown.ts',
  setupFilesAfterEnv: ['<rootDir>/hooks/afterEnv.ts']
};
