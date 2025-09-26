import type { ProblemReportErrorOptions, PresentationProblemReportReason } from 'hashmap-credo-core'

import { ProblemReportError } from 'hashmap-credo-core'

import { V1PresentationProblemReportMessage } from '../messages'

interface V1PresentationProblemReportErrorOptions extends ProblemReportErrorOptions {
  problemCode: PresentationProblemReportReason
}

export class V1PresentationProblemReportError extends ProblemReportError {
  public problemReport: V1PresentationProblemReportMessage

  public constructor(public message: string, { problemCode }: V1PresentationProblemReportErrorOptions) {
    super(message, { problemCode })
    this.problemReport = new V1PresentationProblemReportMessage({
      description: {
        en: message,
        code: problemCode,
      },
    })
  }
}
