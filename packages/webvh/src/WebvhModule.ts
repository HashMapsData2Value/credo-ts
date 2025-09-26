import type { DependencyManager, Module } from 'hashmap-credo-core'

import { WebvhDidResolver } from './dids/WebvhDidResolver'

export class WebvhModule implements Module {
  /**
   * Registers the dependencies of the WebVH module on the dependency manager.
   */
  public register(dependencyManager: DependencyManager) {
    dependencyManager.registerSingleton(WebvhDidResolver)
  }
}
