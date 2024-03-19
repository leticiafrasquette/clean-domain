import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Answer } from '../entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'

interface AnswerQuestionUseCaseRequest {
    instructorId: UniqueEntityID
    questionId: UniqueEntityID
    content: string
    createdAt: Date
}

export class AnswerQuestionUseCase {
    constructor(
        private answerRepository: AnswersRepository
    ) {}

    async execute({instructorId, questionId, content, createdAt} : AnswerQuestionUseCaseRequest) {
    const answer = new Answer({
      content, 
      authorId: instructorId, 
      questionId,
      createdAt: new Date()
    })

    await this.answerRepository.create(answer)

     return answer
    }
}

