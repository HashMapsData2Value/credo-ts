import type { InitConfig, WalletConfig } from 'credo-hmd2v-5.17-core'

export type TenantConfig = Pick<InitConfig, 'label' | 'connectionImageUrl'> & {
  walletConfig: Pick<WalletConfig, 'id' | 'key' | 'keyDerivationMethod'>
}
