import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ListTracksInput {
  @Field()
  limit: number;

  @Field()
  offset: number;
}
