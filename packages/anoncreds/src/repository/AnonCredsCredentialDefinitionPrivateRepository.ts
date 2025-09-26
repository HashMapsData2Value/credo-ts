import type { AgentContext } from 'hmd2v-credo-core'

import { Repository, InjectionSymbols, StorageService, EventEmitter, injectable, inject } from 'hmd2v-credo-core'

import { AnonCredsCredentialDefinitionPrivateRecord } from './AnonCredsCredentialDefinitionPrivateRecord'

@injectable()
export class AnonCredsCredentialDefinitionPrivateRepository extends Repository<AnonCredsCredentialDefinitionPrivateRecord> {
  public constructor(
    @inject(InjectionSymbols.StorageService) storageService: StorageService<AnonCredsCredentialDefinitionPrivateRecord>,
    eventEmitter: EventEmitter
  ) {
    super(AnonCredsCredentialDefinitionPrivateRecord, storageService, eventEmitter)
  }

  public async getByCredentialDefinitionId(agentContext: AgentContext, credentialDefinitionId: string) {
    return this.getSingleByQuery(agentContext, { credentialDefinitionId })
  }

  public async findByCredentialDefinitionId(agentContext: AgentContext, credentialDefinitionId: string) {
    return this.findSingleByQuery(agentContext, { credentialDefinitionId })
  }
}
