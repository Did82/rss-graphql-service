import { Injectable } from '@nestjs/common';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';
import { GenresAPI } from '../datasources/genres.api';
import { ListGenreInput } from './dto/lists-genre.input';
import axios from 'axios';

@Injectable()
export class GenresService {
  private client: any;
  constructor(private readonly genresAPI: GenresAPI) {
    this.client = axios.create({
      baseURL: 'http://localhost:3001/v1/',
    });
  }

  create(createGenreInput: CreateGenreInput) {
    return this.genresAPI.createGenre(createGenreInput);
  }

  async findAll(paginationQuery: ListGenreInput) {
    try {
      const { limit, offset } = paginationQuery;
      const response = await this.client.get(
        `genres?limit=${limit}&offset=${offset}`,
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
    // try {
    //   const { limit, offset } = paginationQuery;
    //   return await this.genresAPI.getGenres({ limit, offset });
    // } catch (error) {
    //   console.log(error);
    // }
  }

  async findOne(id: string) {
    try {
      const response = await this.client.get(`genres/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  update(updateGenreInput: UpdateGenreInput) {
    return this.genresAPI.updateGenre(updateGenreInput);
  }

  remove(id: string) {
    return this.genresAPI.deleteGenre(id);
  }
}
