import type { TagsBase } from 'hmd2v-credo-core'

import { BaseRecord, utils } from 'hmd2v-credo-core'

export interface AnonCredsCredentialDefinitionPrivateRecordProps {
  id?: string
  credentialDefinitionId: string
  value: Record<string, unknown>
  createdAt?: Date
}

export type DefaultAnonCredsCredentialDefinitionPrivateTags = {
  credentialDefinitionId: string
}

export class AnonCredsCredentialDefinitionPrivateRecord extends BaseRecord<
  DefaultAnonCredsCredentialDefinitionPrivateTags,
  TagsBase
> {
  public static readonly type = 'AnonCredsCredentialDefinitionPrivateRecord'
  public readonly type = AnonCredsCredentialDefinitionPrivateRecord.type

  public readonly credentialDefinitionId!: string
  public readonly value!: Record<string, unknown> // TODO: Define structure

  public constructor(props: AnonCredsCredentialDefinitionPrivateRecordProps) {
    super()

    if (props) {
      this.id = props.id ?? utils.uuid()
      this.credentialDefinitionId = props.credentialDefinitionId
      this.value = props.value
      this.createdAt = props.createdAt ?? new Date()
    }
  }

  public getTags() {
    return {
      ...this._tags,
      credentialDefinitionId: this.credentialDefinitionId,
    }
  }
}
