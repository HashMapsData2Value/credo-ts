import type { AgentContext, Key } from 'hmd2v-credo-core'

import { Repository, StorageService, InjectionSymbols, EventEmitter, inject, injectable } from 'hmd2v-credo-core'

import { TenantRoutingRecord } from './TenantRoutingRecord'

@injectable()
export class TenantRoutingRepository extends Repository<TenantRoutingRecord> {
  public constructor(
    @inject(InjectionSymbols.StorageService) storageService: StorageService<TenantRoutingRecord>,
    eventEmitter: EventEmitter
  ) {
    super(TenantRoutingRecord, storageService, eventEmitter)
  }

  public findByRecipientKey(agentContext: AgentContext, key: Key) {
    return this.findSingleByQuery(agentContext, {
      recipientKeyFingerprint: key.fingerprint,
    })
  }
}
