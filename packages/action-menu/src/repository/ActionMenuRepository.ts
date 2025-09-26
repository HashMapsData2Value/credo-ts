import { EventEmitter, InjectionSymbols, inject, injectable, Repository, StorageService } from 'credo-hmd2v-5.17-core'

import { ActionMenuRecord } from './ActionMenuRecord'

/**
 * @internal
 */
@injectable()
export class ActionMenuRepository extends Repository<ActionMenuRecord> {
  public constructor(
    @inject(InjectionSymbols.StorageService) storageService: StorageService<ActionMenuRecord>,
    eventEmitter: EventEmitter
  ) {
    super(ActionMenuRecord, storageService, eventEmitter)
  }
}
