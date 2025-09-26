import type { AgentDependencies } from 'credo-hmd2v-5.17-core'

import { EventEmitter } from 'events'
import { WebSocket } from 'ws'

import { NodeFileSystem } from './NodeFileSystem'
import { HttpInboundTransport } from './transport/HttpInboundTransport'
import { WsInboundTransport } from './transport/WsInboundTransport'

const agentDependencies: AgentDependencies = {
  FileSystem: NodeFileSystem,
  fetch,
  EventEmitterClass: EventEmitter,
  WebSocketClass: WebSocket,
}

export { agentDependencies, HttpInboundTransport, WsInboundTransport }
