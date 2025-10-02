import type { DependencyManager, Module } from 'hashmap-credo-core'

import { OpenId4VcHolderApi } from './OpenId4VcHolderApi'
import { OpenId4VciHolderService } from './OpenId4VciHolderService'
import { OpenId4VcSiopHolderService } from './OpenId4vcSiopHolderService'

/**
 * @public @module OpenId4VcHolderModule
 * This module provides the functionality to assume the role of owner in relation to the OpenId4VC specification suite.
 */
export class OpenId4VcHolderModule implements Module {
  public readonly api = OpenId4VcHolderApi

  /**
   * Registers the dependencies of the question answer module on the dependency manager.
   */
  public register(dependencyManager: DependencyManager) {
    // Services
    dependencyManager.registerSingleton(OpenId4VciHolderService)
    dependencyManager.registerSingleton(OpenId4VcSiopHolderService)
  }
}
