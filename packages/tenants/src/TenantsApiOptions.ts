import type { TenantAgent } from './TenantAgent'
import type { TenantConfig } from './models/TenantConfig'
import type { ModulesMap, UpdateAssistantUpdateOptions } from 'credo-hmd2v-5.17-core'

export interface GetTenantAgentOptions {
  tenantId: string
}

export type WithTenantAgentCallback<AgentModules extends ModulesMap, Return> = (
  tenantAgent: TenantAgent<AgentModules>
) => Promise<Return>

export interface CreateTenantOptions {
  config: Omit<TenantConfig, 'walletConfig'>
}

export interface UpdateTenantStorageOptions {
  tenantId: string
  updateOptions?: UpdateAssistantUpdateOptions
}
