import { Field, InputType } from '@nestjs/graphql';
import { Genre } from '../../graphql';

@InputType()
export class ListGenreInput {
  // @Field()
  // items: Genre[];

  @Field()
  limit: number;

  @Field()
  offset: number;

  // @Field()
  // total: number;
}
