import { Resolver, Query, ResolveField, Parent, Mutation, Args, Int } from '@nestjs/graphql';
import { Quiz } from './quiz.model';
import { QuizzesService } from './quizzes.service';

import { Question } from './question.model';
import { QuestionInput } from './question.input';

@Resolver(of => Quiz)
export class QuizzesResolver {
    constructor(private readonly quizzesService: QuizzesService) {}

    @Query(returns => [Quiz])
    async quizzes() {
      return this.quizzesService.findAll();
    }

    @ResolveField(returns => [Question])
    async questions(@Parent() quiz: Quiz) {
      const { id } = quiz;

      return this.quizzesService.questions(id);
    }

    @Mutation(returns => Quiz)
    async toggleShuffleAnswers(@Args({ name: 'quizId', type: () => Int }) quizId: number) {
      return this.quizzesService.toggleShuffleAnswers(quizId);
    }

    @Mutation(returns => Question)
    async addQuestion(@Args('question') question: QuestionInput) {
      return this.quizzesService.addQuestion(question);
    }
}
