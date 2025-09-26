import type { DrpcRecord } from './repository'
import type { BaseEvent } from 'credo-hmd2v-5.17-core'

export enum DrpcRequestEventTypes {
  DrpcRequestStateChanged = 'DrpcRequestStateChanged',
}
export interface DrpcRequestStateChangedEvent extends BaseEvent {
  type: typeof DrpcRequestEventTypes.DrpcRequestStateChanged
  payload: {
    drpcMessageRecord: DrpcRecord
  }
}
