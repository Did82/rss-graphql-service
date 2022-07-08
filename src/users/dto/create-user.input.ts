import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  firstName: string;

  @Field()
  secondName: string;

  @Field()
  password: string;

  @Field()
  email: string;
}
