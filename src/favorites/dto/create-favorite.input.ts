import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateFavoriteInput {
  @Field()
  userId: string;

  @Field()
  bands: string[];

  @Field()
  genres: string[];

  @Field()
  artists: string[];

  @Field()
  tracks: string[];
}
