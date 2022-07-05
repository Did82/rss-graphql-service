import { RESTDataSource } from 'apollo-datasource-rest';
import { Favorite } from '../graphql';

class FavoritesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3007/v1/favorites';
  }

  async getFavorites(): Promise<Favorite[]> {
    const favorites = await this.get('favorites');
    return favorites;
  }

  async getFavorite(id: number): Promise<Favorite> {
    const favorite = await this.get(`favorites/${encodeURIComponent(id)}`);
    return favorite;
  }

  async createFavorite(favorite: Favorite): Promise<Favorite> {
    const newFavorite = await this.post('favorites', favorite);
    return newFavorite;
  }

  async updateFavorite(favorite: Favorite): Promise<Favorite> {
    const updatedFavorite = await this.put(
      `favorites/${encodeURIComponent(favorite.id)}`,
      favorite,
    );
    return updatedFavorite;
  }

  async deleteFavorite(id: number): Promise<Favorite> {
    const deletedFavorite = await this.delete(
      `favorites/${encodeURIComponent(id)}`,
    );
    return deletedFavorite;
  }
}
