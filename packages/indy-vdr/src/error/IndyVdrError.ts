import { CredoError } from 'hashmap-credo-core'

export class IndyVdrError extends CredoError {
  public constructor(message: string, { cause }: { cause?: Error } = {}) {
    super(message, { cause })
  }
}
