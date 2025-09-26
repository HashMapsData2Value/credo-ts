import type { AckMessageOptions } from 'credo-hmd2v-5.17-core'

import { AckMessage, IsValidMessageType, parseMessageType } from 'credo-hmd2v-5.17-core'

export class V1PresentationAckMessage extends AckMessage {
  public readonly allowDidSovPrefix = true

  public constructor(options: AckMessageOptions) {
    super(options)
  }

  @IsValidMessageType(V1PresentationAckMessage.type)
  public readonly type = V1PresentationAckMessage.type.messageTypeUri
  public static readonly type = parseMessageType('https://didcomm.org/present-proof/1.0/ack')
}
