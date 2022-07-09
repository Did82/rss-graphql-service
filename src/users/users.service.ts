import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import axios from 'axios';

@Injectable()
export class UsersService {
  private client;
  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:3004/v1/users',
    });
  }

  register(createUserInput: CreateUserInput) {}

  findAll() {}

  findOne(id: string) {}

  update(updateUserInput: UpdateUserInput) {}

  remove(id: string) {}

  login(email: string, password: string) {}
}
