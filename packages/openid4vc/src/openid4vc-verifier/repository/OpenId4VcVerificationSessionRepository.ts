import { Repository, StorageService, InjectionSymbols, EventEmitter, inject, injectable } from 'credo-hmd2v-5.17-core'

import { OpenId4VcVerificationSessionRecord } from './OpenId4VcVerificationSessionRecord'

@injectable()
export class OpenId4VcVerificationSessionRepository extends Repository<OpenId4VcVerificationSessionRecord> {
  public constructor(
    @inject(InjectionSymbols.StorageService) storageService: StorageService<OpenId4VcVerificationSessionRecord>,
    eventEmitter: EventEmitter
  ) {
    super(OpenId4VcVerificationSessionRecord, storageService, eventEmitter)
  }
}
