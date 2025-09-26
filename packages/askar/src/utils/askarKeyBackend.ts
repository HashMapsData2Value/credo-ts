import { KeyBackend as AskarKeyBackend } from '@hyperledger/aries-askar-shared'
import { KeyBackend as CredoKeyBackend } from 'hmd2v-credo-core'

export const convertToAskarKeyBackend = (credoKeyBackend: CredoKeyBackend) => {
  switch (credoKeyBackend) {
    case CredoKeyBackend.Software:
      return AskarKeyBackend.Software
    case CredoKeyBackend.SecureElement:
      return AskarKeyBackend.SecureElement
  }
}
