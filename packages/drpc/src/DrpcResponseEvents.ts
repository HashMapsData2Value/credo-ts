import type { DrpcRecord } from './repository'
import type { BaseEvent } from 'hashmap-credo-core'

export enum DrpcResponseEventTypes {
  DrpcResponseStateChanged = 'DrpcResponseStateChanged',
}
export interface DrpcResponseStateChangedEvent extends BaseEvent {
  type: typeof DrpcResponseEventTypes.DrpcResponseStateChanged
  payload: {
    drpcMessageRecord: DrpcRecord
  }
}
