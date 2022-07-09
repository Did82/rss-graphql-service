import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ListBandsInput {
  @Field()
  limit: number;

  @Field()
  offset: number;
}
