import type { ActionMenuState } from './ActionMenuState'
import type { ActionMenuRecord } from './repository'
import type { BaseEvent } from 'credo-hmd2v-5.17-core'

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
