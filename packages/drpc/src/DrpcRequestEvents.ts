import type { DrpcRecord } from './repository'
import type { BaseEvent } from 'hashmap-credo-core'

export enum DrpcRequestEventTypes {
  DrpcRequestStateChanged = 'DrpcRequestStateChanged',
}
export interface DrpcRequestStateChangedEvent extends BaseEvent {
  type: typeof DrpcRequestEventTypes.DrpcRequestStateChanged
  payload: {
    drpcMessageRecord: DrpcRecord
  }
}
