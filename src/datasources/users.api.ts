import { RESTDataSource } from 'apollo-datasource-rest';
import { CreateUserInput, UpdateUserInput, User } from '../graphql';

export class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3004/v1/users';
  }

  async getUsers(): Promise<User[]> {
    return await this.get('users');
  }

  async getUser(id: string): Promise<User> {
    return await this.get(`users/${encodeURIComponent(id)}`);
  }

  async registerUser(user: CreateUserInput): Promise<User> {
    return await this.post('users', user);
  }

  async updateUser(user: UpdateUserInput): Promise<User> {
    return await this.put(`users/${encodeURIComponent(user.id)}`, user);
  }

  async deleteUser(id: string): Promise<User> {
    return await this.delete(`users/${encodeURIComponent(id)}`);
  }

  async loginUser(email: string, password: string): Promise<User> {
    return await this.post('login', { email, password });
  }
}
