import type { AgentContext, Key } from 'hashmap-credo-core'

import { Repository, StorageService, InjectionSymbols, EventEmitter, inject, injectable } from 'hashmap-credo-core'

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
