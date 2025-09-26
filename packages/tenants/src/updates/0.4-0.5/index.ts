import type { BaseAgent } from 'hmd2v-credo-core'

import { migrateTenantRecordToV0_5 } from './tenantRecord'

export async function updateTenantsModuleV0_4ToV0_5<Agent extends BaseAgent>(agent: Agent): Promise<void> {
  await migrateTenantRecordToV0_5(agent)
}
