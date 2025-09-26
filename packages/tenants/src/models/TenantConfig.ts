import type { InitConfig, WalletConfig } from 'hmd2v-credo-core'

export type TenantConfig = Pick<InitConfig, 'label' | 'connectionImageUrl'> & {
  walletConfig: Pick<WalletConfig, 'id' | 'key' | 'keyDerivationMethod'>
}
