import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateGenreInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  country: string;

  @Field()
  year: number;
}
