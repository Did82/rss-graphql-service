import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import axios from 'axios';
import { LoginUserInput } from './dto/login-user.input';

@Injectable()
export class UsersService {
  private client;
  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:3004/v1/users',
    });
  }

  async register(createUserInput: CreateUserInput) {
    const user = { ...createUserInput };
    return await this.client
      .post('/register', user)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err.message);
        return null;
      });
  }

  findOne(id: string) {
    try {
      const response = this.client.get(`/${id}`);
      return response.data;
    } catch (error) {
      console.error(error.message);
    }
  }

  async login(loginUserInput: LoginUserInput) {
    const user = { ...loginUserInput };
    return await this.client
      .post('/login', user)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err.message);
        return null;
      });
  }
}
