import type { ActionMenuState } from './ActionMenuState'
import type { ActionMenuRecord } from './repository'
import type { BaseEvent } from 'hashmap-credo-core'

/**
 * @public
 */
export enum ActionMenuEventTypes {
  ActionMenuStateChanged = 'ActionMenuStateChanged',
}

/**
 * @public
 */
export interface ActionMenuStateChangedEvent extends BaseEvent {
  type: typeof ActionMenuEventTypes.ActionMenuStateChanged
  payload: {
    actionMenuRecord: ActionMenuRecord
    previousState: ActionMenuState | null
  }
}
