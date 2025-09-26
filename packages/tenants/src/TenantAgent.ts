import type { AgentContext, DefaultAgentModules, ModulesMap } from 'credo-hmd2v-5.17-core'

import { CredoError, BaseAgent } from 'credo-hmd2v-5.17-core'

export class TenantAgent<AgentModules extends ModulesMap = DefaultAgentModules> extends BaseAgent<AgentModules> {
  private sessionHasEnded = false

  public constructor(agentContext: AgentContext) {
    super(agentContext.config, agentContext.dependencyManager)
  }

  public async initialize() {
    if (this.sessionHasEnded) {
      throw new CredoError("Can't initialize agent after tenant sessions has been ended.")
    }

    await super.initialize()
    this._isInitialized = true
  }

  public async endSession() {
    this.logger.trace(
      `Ending session for agent context with contextCorrelationId '${this.agentContext.contextCorrelationId}'`
    )
    await this.agentContext.endSession()
    this._isInitialized = false
    this.sessionHasEnded = true
  }
}
