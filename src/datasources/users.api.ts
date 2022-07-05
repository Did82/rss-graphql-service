import { RESTDataSource } from 'apollo-datasource-rest';
import { User } from '../graphql';

export class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3004/v1/users';
  }

  async getUsers(): Promise<User[]> {
    const users = await this.get('users');
    return users;
  }

  async getUser(id: number): Promise<User> {
    const user = await this.get(`users/${encodeURIComponent(id)}`);
    return user;
  }

  async createUser(user: User): Promise<User> {
    const newUser = await this.post('users', user);
    return newUser;
  }

  async updateUser(user: User): Promise<User> {
    const updatedUser = await this.put(
      `users/${encodeURIComponent(user.id)}`,
      user,
    );
    return updatedUser;
  }

  async deleteUser(id: number): Promise<User> {
    const deletedUser = await this.delete(`users/${encodeURIComponent(id)}`);
    return deletedUser;
  }
}
