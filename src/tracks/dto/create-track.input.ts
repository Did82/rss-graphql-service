import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTrackInput {
  @Field()
  title: string;

  @Field()
  album: string;

  @Field()
  artists: string[];

  @Field()
  bands: string[];

  @Field()
  duration: number;

  @Field()
  released: number;

  @Field()
  genres: string[];
}
