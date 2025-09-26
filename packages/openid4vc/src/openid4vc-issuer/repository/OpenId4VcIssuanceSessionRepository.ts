import { Repository, StorageService, InjectionSymbols, EventEmitter, inject, injectable } from 'hmd2v-credo-core'

import { OpenId4VcIssuanceSessionRecord } from './OpenId4VcIssuanceSessionRecord'

@injectable()
export class OpenId4VcIssuanceSessionRepository extends Repository<OpenId4VcIssuanceSessionRecord> {
  public constructor(
    @inject(InjectionSymbols.StorageService) storageService: StorageService<OpenId4VcIssuanceSessionRecord>,
    eventEmitter: EventEmitter
  ) {
    super(OpenId4VcIssuanceSessionRecord, storageService, eventEmitter)
  }
}
