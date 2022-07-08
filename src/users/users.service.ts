import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UsersAPI } from '../datasources/users.api';

@Injectable()
export class UsersService {
  constructor(private readonly usersAPI: UsersAPI) {}

  register(createUserInput: CreateUserInput) {
    return this.usersAPI.registerUser(createUserInput);
  }

  findAll() {
    return this.usersAPI.getUsers();
  }

  findOne(id: string) {
    return this.usersAPI.getUser(id);
  }

  update(updateUserInput: UpdateUserInput) {
    return this.usersAPI.updateUser(updateUserInput);
  }

  remove(id: string) {
    return this.usersAPI.deleteUser(id);
  }

  login(email: string, password: string) {
    return this.usersAPI.loginUser(email, password);
  }
}
