import { ObjectType, Field, Int } from '@nestjs/graphql';

import { Question } from './question.model';

@ObjectType()
export class Quiz {
  @Field(type => Int)
  readonly id: number;

  @Field()
  readonly title: string;

  @Field()
  readonly description: string;

  @Field()
  readonly shuffleQuestions: boolean;

  @Field()
  readonly shuffleAnswers: boolean;

  @Field(type => [Question], { nullable: true })
  questions: Question[];
}

