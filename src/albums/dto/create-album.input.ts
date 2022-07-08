import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAlbumInput {
  @Field()
  name: string;

  @Field()
  released: number;

  @Field({ nullable: true })
  artists: string[];

  @Field({ nullable: true })
  bands: string[];

  @Field({ nullable: true })
  tracks: string[];

  @Field({ nullable: true })
  genres: string[];

  @Field({ nullable: true })
  image: string;
}
