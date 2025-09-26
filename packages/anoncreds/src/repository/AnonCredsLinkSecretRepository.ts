import type { AgentContext } from 'credo-hmd2v-5.17-core'

import { Repository, InjectionSymbols, StorageService, EventEmitter, injectable, inject } from 'credo-hmd2v-5.17-core'

import { AnonCredsLinkSecretRecord } from './AnonCredsLinkSecretRecord'

@injectable()
export class AnonCredsLinkSecretRepository extends Repository<AnonCredsLinkSecretRecord> {
  public constructor(
    @inject(InjectionSymbols.StorageService) storageService: StorageService<AnonCredsLinkSecretRecord>,
    eventEmitter: EventEmitter
  ) {
    super(AnonCredsLinkSecretRecord, storageService, eventEmitter)
  }

  public async getDefault(agentContext: AgentContext) {
    return this.getSingleByQuery(agentContext, { isDefault: true })
  }

  public async findDefault(agentContext: AgentContext) {
    return this.findSingleByQuery(agentContext, { isDefault: true })
  }

  public async getByLinkSecretId(agentContext: AgentContext, linkSecretId: string) {
    return this.getSingleByQuery(agentContext, { linkSecretId })
  }

  public async findByLinkSecretId(agentContext: AgentContext, linkSecretId: string) {
    return this.findSingleByQuery(agentContext, { linkSecretId })
  }
}
