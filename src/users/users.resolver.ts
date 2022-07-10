import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation('registerUser')
  async registerUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ) {
    return await this.usersService.register(createUserInput);
  }

  @Query('user')
  findOne(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation('loginUser')
  async login(@Args('loginUserInput') loginUserInput: CreateUserInput) {
    return await this.usersService.login(loginUserInput);
  }
}
