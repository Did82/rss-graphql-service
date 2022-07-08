import { RESTDataSource } from 'apollo-datasource-rest';
import { CreateFavoriteInput, Favorite, UpdateFavoriteInput } from '../graphql';

export class FavoritesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3007/v1/favorites';
  }

  async getFavorites(): Promise<Favorite[]> {
    return await this.get('favorites');
  }

  async getFavorite(id: string): Promise<Favorite> {
    return await this.get(`favorites/${encodeURIComponent(id)}`);
  }

  async createFavorite(favorite: CreateFavoriteInput): Promise<Favorite> {
    return await this.post('favorites', favorite);
  }

  async updateFavorite(favorite: UpdateFavoriteInput): Promise<Favorite> {
    return await this.put(
      `favorites/${encodeURIComponent(favorite.id)}`,
      favorite,
    );
  }

  async deleteFavorite(id: string): Promise<Favorite> {
    return await this.delete(`favorites/${encodeURIComponent(id)}`);
  }
}
