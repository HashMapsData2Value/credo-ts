import type { AgentContext } from 'credo-hmd2v-5.17-core'

import { Repository, InjectionSymbols, StorageService, EventEmitter, injectable, inject } from 'credo-hmd2v-5.17-core'

import { AnonCredsKeyCorrectnessProofRecord } from './AnonCredsKeyCorrectnessProofRecord'

@injectable()
export class AnonCredsKeyCorrectnessProofRepository extends Repository<AnonCredsKeyCorrectnessProofRecord> {
  public constructor(
    @inject(InjectionSymbols.StorageService) storageService: StorageService<AnonCredsKeyCorrectnessProofRecord>,
    eventEmitter: EventEmitter
  ) {
    super(AnonCredsKeyCorrectnessProofRecord, storageService, eventEmitter)
  }

  public async getByCredentialDefinitionId(agentContext: AgentContext, credentialDefinitionId: string) {
    return this.getSingleByQuery(agentContext, { credentialDefinitionId })
  }

  public async findByCredentialDefinitionId(agentContext: AgentContext, credentialDefinitionId: string) {
    return this.findSingleByQuery(agentContext, { credentialDefinitionId })
  }
}
