import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBandInput {
  @Field()
  name: string;

  @Field()
  origin: string;

  @Field({ nullable: true })
  members: string[];

  @Field({ nullable: true })
  website: string;

  @Field({ nullable: true })
  genres: string[];
}
