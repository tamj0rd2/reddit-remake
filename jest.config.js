module.exports = {
  roots: ['<rootDir>'],
  testPathIgnorePatterns: [
    '<rootDir>/.cache/',
    '<rootDir>/dist/',
    '<rootDir>/out/',
    '<rootDir>/node_modules/',
    '<rootDir>/black-box-tests',
  ],
  moduleNameMapper: {
    '~shared/(.*)': '<rootDir>/src/shared/$1',
    '~client/(.*)': '<rootDir>/src/client/$1',
    '~server/(.*)': '<rootDir>/src/server/$1',
  },
  watchPathIgnorePatterns: [
    '<rootDir>/.cache.*',
    '<rootDir>/dist.*',
    '<rootDir>/out.*',
    'test-helpers.ts',
    'random.ts',
  ],
  preset: 'ts-jest',
}
