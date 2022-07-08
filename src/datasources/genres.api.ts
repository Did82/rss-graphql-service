import { RESTDataSource } from 'apollo-datasource-rest';
import { CreateGenreInput, Genre, UpdateGenreInput } from '../graphql';
import { ListGenreEntity } from '../genres/entities/list-genre.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GenresAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3001/v1/genres';
  }

  async getGenres(paginationQuery): Promise<ListGenreEntity> {
    const { limit, offset } = paginationQuery;
    return await this.get(`?limit=${limit}&offset=${offset}`);
  }

  async getGenre(id: string): Promise<Genre> {
    return await this.get(`genres/${encodeURIComponent(id)}`);
  }

  async createGenre(genre: CreateGenreInput): Promise<Genre> {
    return await this.post('genres', JSON.stringify(genre));
  }

  async updateGenre(genre: UpdateGenreInput): Promise<Genre> {
    return await this.put(`genres/${encodeURIComponent(genre.id)}`, genre);
  }

  async deleteGenre(id: string): Promise<Genre> {
    return await this.delete(`genres/${encodeURIComponent(id)}`);
  }
}
