import type { DependencyManager, Module } from 'credo-hmd2v-5.17-core'

import { WebvhDidResolver } from './dids/WebvhDidResolver'

export class WebvhModule implements Module {
  /**
   * Registers the dependencies of the WebVH module on the dependency manager.
   */
  public register(dependencyManager: DependencyManager) {
    dependencyManager.registerSingleton(WebvhDidResolver)
  }
}
