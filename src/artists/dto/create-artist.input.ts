import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateArtistInput {
  @Field()
  firstName: string;

  @Field()
  secondName: string;

  @Field()
  middleName: string;

  @Field()
  birthDate: string;

  @Field()
  birthPlace: string;

  @Field()
  country: string;

  @Field()
  instruments: string[];
}
