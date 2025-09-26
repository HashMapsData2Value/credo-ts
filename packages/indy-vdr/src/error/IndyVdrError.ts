import { CredoError } from 'credo-hmd2v-5.17-core'

export class IndyVdrError extends CredoError {
  public constructor(message: string, { cause }: { cause?: Error } = {}) {
    super(message, { cause })
  }
}
