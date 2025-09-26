import type { AgentContext } from 'hmd2v-credo-core'

import { Repository, StorageService, InjectionSymbols, EventEmitter, inject, injectable } from 'hmd2v-credo-core'

import { TenantRecord } from './TenantRecord'

@injectable()
export class TenantRepository extends Repository<TenantRecord> {
  public constructor(
    @inject(InjectionSymbols.StorageService) storageService: StorageService<TenantRecord>,
    eventEmitter: EventEmitter
  ) {
    super(TenantRecord, storageService, eventEmitter)
  }

  public async findByLabel(agentContext: AgentContext, label: string): Promise<TenantRecord[]> {
    return this.findByQuery(agentContext, { label })
  }
}
