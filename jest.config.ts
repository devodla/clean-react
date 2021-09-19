import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  roots: ['./src'],
  collectCoverageFrom: ['./src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

export default config
