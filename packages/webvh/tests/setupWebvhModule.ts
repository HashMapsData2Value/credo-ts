import { DidsModule } from 'hmd2v-credo-core'

import { WebvhModule, WebvhDidResolver } from '../src'

export const getWebvhModules = () => ({
  webvhSdk: new WebvhModule(),
  dids: new DidsModule({
    resolvers: [new WebvhDidResolver()],
  }),
})
