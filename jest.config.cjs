/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  coverageDirectory: './out/coverage',
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.ts'],

  rootDir: '.',
  roots: ['./src'],
  
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/*.spec.ts'],

  silent: true,

  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    // remove ESM suffix from relative import paths, for CommonJS compatibility
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      useESM: true,
      isolatedModules: true, // disables type-checking
    }]
  }
}