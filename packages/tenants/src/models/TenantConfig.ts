import type { InitConfig, WalletConfig } from 'hashmap-credo-core'

export type TenantConfig = Pick<InitConfig, 'label' | 'connectionImageUrl'> & {
  walletConfig: Pick<WalletConfig, 'id' | 'key' | 'keyDerivationMethod'>
}
