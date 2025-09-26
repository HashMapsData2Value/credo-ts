import { CredoError } from 'hmd2v-credo-core'

export class AnonCredsError extends CredoError {
  public constructor(message: string, { cause }: { cause?: Error } = {}) {
    super(message, { cause })
  }
}
