import type { AskarModuleConfigOptions } from './AskarModuleConfig'
import type { AgentContext, DependencyManager, Module } from 'hashmap-credo-core'

import { Store } from '@hyperledger/aries-askar-shared'
import { CredoError, InjectionSymbols } from 'hashmap-credo-core'

import { AskarMultiWalletDatabaseScheme, AskarModuleConfig } from './AskarModuleConfig'
import { AskarStorageService } from './storage'
import { assertAskarWallet } from './utils/assertAskarWallet'
import { AskarProfileWallet, AskarWallet } from './wallet'

export class AskarModule implements Module {
  public readonly config: AskarModuleConfig

  public constructor(config: AskarModuleConfigOptions) {
    this.config = new AskarModuleConfig(config)
  }

  public register(dependencyManager: DependencyManager) {
    console.log('🔍 AskarModule.register() called')

    dependencyManager.registerInstance(AskarModuleConfig, this.config)
    console.log('🔍 AskarModuleConfig registered')

    if (dependencyManager.isRegistered(InjectionSymbols.Wallet)) {
      console.log('🔍 Wallet already registered - throwing error')
      throw new CredoError('There is an instance of Wallet already registered')
    } else {
      console.log('🔍 Registering AskarWallet with InjectionSymbols.Wallet')
      dependencyManager.registerContextScoped(InjectionSymbols.Wallet, AskarWallet)
      console.log('🔍 AskarWallet registered successfully')

      // If the multiWalletDatabaseScheme is set to ProfilePerWallet, we want to register the AskarProfileWallet
      if (this.config.multiWalletDatabaseScheme === AskarMultiWalletDatabaseScheme.ProfilePerWallet) {
        console.log('🔍 Registering AskarProfileWallet for ProfilePerWallet scheme')
        dependencyManager.registerContextScoped(AskarProfileWallet)
      }
    }

    if (dependencyManager.isRegistered(InjectionSymbols.StorageService)) {
      console.log('🔍 StorageService already registered - throwing error')
      throw new CredoError('There is an instance of StorageService already registered')
    } else {
      console.log('🔍 Registering AskarStorageService')
      dependencyManager.registerSingleton(InjectionSymbols.StorageService, AskarStorageService)
      console.log('🔍 AskarStorageService registered successfully')
    }

    console.log('🔍 AskarModule.register() completed - checking final state')
    console.log('🔍 Final wallet registration check:', dependencyManager.isRegistered(InjectionSymbols.Wallet))
    console.log('🔍 Final storage registration check:', dependencyManager.isRegistered(InjectionSymbols.StorageService))
  }

  public async initialize(agentContext: AgentContext): Promise<void> {
    // We MUST use an askar wallet here
    assertAskarWallet(agentContext.wallet)

    const wallet = agentContext.wallet

    // Register the Askar store instance on the dependency manager
    // This allows it to be re-used for tenants
    agentContext.dependencyManager.registerInstance(Store, agentContext.wallet.store)

    // If the multiWalletDatabaseScheme is set to ProfilePerWallet, we want to register the AskarProfileWallet
    // and return that as the wallet for all tenants, but not for the main agent, that should use the AskarWallet
    if (this.config.multiWalletDatabaseScheme === AskarMultiWalletDatabaseScheme.ProfilePerWallet) {
      agentContext.dependencyManager.container.register(InjectionSymbols.Wallet, {
        useFactory: (container) => {
          // If the container is the same as the root dependency manager container
          // it means we are in the main agent, and we should use the root wallet
          if (container === agentContext.dependencyManager.container) {
            return wallet
          }

          // Otherwise we want to return the AskarProfileWallet
          return container.resolve(AskarProfileWallet)
        },
      })
    }
  }
}
