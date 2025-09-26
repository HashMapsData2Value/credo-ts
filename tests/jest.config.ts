import type { Config } from '@jest/types'

import base from '../jest.config.base'

const config: Config.InitialOptions = {
  ...base,
  displayName: 'hashmap-credo-@credo-ts/e2e-test',
  setupFilesAfterEnv: ['../packages/core/tests/setup.ts'],
}

export default config
