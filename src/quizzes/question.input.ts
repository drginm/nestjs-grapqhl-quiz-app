import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class QuestionInput {
  @Field(type => Int)
  readonly quizId: number;

  @Field()
  readonly text: string;

  @Field({ nullable: true })
  readonly isMarkDown: boolean;
}
