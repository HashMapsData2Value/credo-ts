import { DidsModule } from 'credo-hmd2v-5.17-core'

import { WebvhModule, WebvhDidResolver } from '../src'

export const getWebvhModules = () => ({
  webvhSdk: new WebvhModule(),
  dids: new DidsModule({
    resolvers: [new WebvhDidResolver()],
  }),
})
