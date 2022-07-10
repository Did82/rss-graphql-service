import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ListGenreInput {
  @Field()
  limit: number;

  @Field()
  offset: number;
}
