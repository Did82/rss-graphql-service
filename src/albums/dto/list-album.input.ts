import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ListAlbumInput {
  @Field()
  limit: number;

  @Field()
  offset: number;
}
