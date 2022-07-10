import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ListArtistsInput {
  @Field()
  limit: number;

  @Field()
  offset: number;
}
