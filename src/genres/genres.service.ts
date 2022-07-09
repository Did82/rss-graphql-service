import { Injectable } from '@nestjs/common';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';
import { ListGenreInput } from './dto/lists-genre.input';
import axios from 'axios';

@Injectable()
export class GenresService {
  private client: any;
  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:3001/v1/genres',
    });
  }

  async create(createGenreInput: CreateGenreInput) {
    this.client
      .post('', createGenreInput)
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        } else {
          return null;
        }
      })
      .catch((error) => {
        console.error(error.message);
        return null;
      });
  }

  async findAll(paginationQuery: ListGenreInput) {
    try {
      const { limit, offset } = paginationQuery;
      const response = await this.client.get(
        `?limit=${limit}&offset=${offset}`,
      );
      if (response.status === 200) {
        return response.data;
      } else {
        return null;
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const response = await this.client.get(`/${id}`);
      if (response.status === 200) {
        return response.data;
      } else {
        return null;
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  async update(updateGenreInput: UpdateGenreInput) {
    this.client
      .put(`/${updateGenreInput.id}`, updateGenreInput)
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        } else {
          return null;
        }
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  async remove(id: string) {
    this.client
      .delete(`/${id}`)
      .then((response) => {
        return response.status === 200;
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
