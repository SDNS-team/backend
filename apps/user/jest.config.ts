module.exports = {
  displayName: 'user',
  rootDir: 'src',
  testMatch: ['**.spec.ts'],
  preset: '../../../jest.preset.ts',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/../tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  coverageDirectory: '../../../coverage/apps/user',
};
