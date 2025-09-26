import type { QuestionAnswerService } from '../services'
import type { MessageHandler, MessageHandlerInboundMessage } from 'hmd2v-credo-core'

import { AnswerMessage } from '../messages'

export class AnswerMessageHandler implements MessageHandler {
  private questionAnswerService: QuestionAnswerService
  public supportedMessages = [AnswerMessage]

  public constructor(questionAnswerService: QuestionAnswerService) {
    this.questionAnswerService = questionAnswerService
  }

  public async handle(messageContext: MessageHandlerInboundMessage<AnswerMessageHandler>) {
    await this.questionAnswerService.receiveAnswer(messageContext)
  }
}
