module.exports = {
  transform: {
    '^.+\\.ts?$': '@swc/jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  testEnvironment: 'node',
  rootDir: '.',
  collectCoverageFrom: ['**/*.ts', '!demo.ts'],
  testTimeout: 1200000
};
