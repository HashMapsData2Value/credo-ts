import type { DependencyManager, Module } from 'hashmap-credo-core'

import { AgentConfig } from 'hashmap-credo-core'

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
    // Warn about experimental module
    dependencyManager
      .resolve(AgentConfig)
      .logger.warn(
        "hashmap-credo-The 'hashmap-credo-@credo-ts/openid4vc' Holder module is experimental and could have unexpected breaking changes. When using this module, make sure to use strict versions for all @credo-ts packages."
      )

    // Services
    dependencyManager.registerSingleton(OpenId4VciHolderService)
    dependencyManager.registerSingleton(OpenId4VcSiopHolderService)
  }
}
