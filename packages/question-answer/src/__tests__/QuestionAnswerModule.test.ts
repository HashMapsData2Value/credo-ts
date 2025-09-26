import type { DependencyManager, FeatureRegistry } from 'hmd2v-credo-core'

import { Protocol } from 'hmd2v-credo-core'
import {
  QuestionAnswerModule,
  QuestionAnswerRepository,
  QuestionAnswerRole,
  QuestionAnswerService,
} from 'hmd2v-credo-question-answer'

const dependencyManager = {
  registerInstance: jest.fn(),
  registerSingleton: jest.fn(),
  registerContextScoped: jest.fn(),
} as unknown as DependencyManager

const featureRegistry = {
  register: jest.fn(),
} as unknown as FeatureRegistry

describe('QuestionAnswerModule', () => {
  test('registers dependencies on the dependency manager', () => {
    const questionAnswerModule = new QuestionAnswerModule()
    questionAnswerModule.register(dependencyManager, featureRegistry)

    expect(dependencyManager.registerSingleton).toHaveBeenCalledTimes(2)
    expect(dependencyManager.registerSingleton).toHaveBeenCalledWith(QuestionAnswerService)
    expect(dependencyManager.registerSingleton).toHaveBeenCalledWith(QuestionAnswerRepository)

    expect(featureRegistry.register).toHaveBeenCalledTimes(1)
    expect(featureRegistry.register).toHaveBeenCalledWith(
      new Protocol({
        id: 'https://didcomm.org/questionanswer/1.0',
        roles: [QuestionAnswerRole.Questioner, QuestionAnswerRole.Responder],
      })
    )
  })
})
