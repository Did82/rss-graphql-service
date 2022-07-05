import { RESTDataSource } from 'apollo-datasource-rest';
import { Genre } from '../graphql';

export class GenresAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3001/v1/genres';
  }

  async getGenres(): Promise<Genre[]> {
    const genres = await this.get('genres');
    return genres;
  }

  async getGenre(id: number): Promise<Genre> {
    const genre = await this.get(`genres/${encodeURIComponent(id)}`);
    return genre;
  }

  async createGenre(genre: Genre): Promise<Genre> {
    const newGenre = await this.post('genres', genre);
    return newGenre;
  }

  async updateGenre(genre: Genre): Promise<Genre> {
    const updatedGenre = await this.put(
      `genres/${encodeURIComponent(genre.id)}`,
      genre,
    );
    return updatedGenre;
  }

  async deleteGenre(id: number): Promise<Genre> {
    const deletedGenre = await this.delete(`genres/${encodeURIComponent(id)}`);
    return deletedGenre;
  }
}
