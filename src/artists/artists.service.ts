import { Injectable } from '@nestjs/common';
import { CreateArtistInput } from './dto/create-artist.input';
import { UpdateArtistInput } from './dto/update-artist.input';
import axios from 'axios';
import { ListArtistsInput } from './dto/list-artists.input';

@Injectable()
export class ArtistsService {
  private client;
  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:3002/v1/artists',
    });
  }

  async create(createArtistInput: CreateArtistInput) {
    this.client
      .post('/', createArtistInput)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err.message);
        return null;
      });
  }

  async findAll(paginationQuery: ListArtistsInput) {
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

  async update(updateArtistInput: UpdateArtistInput) {
    this.client
      .put('/', updateArtistInput)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err.message);
        return null;
      });
  }

  async remove(id: string) {
    this.client
      .delete(`/${id}`)
      .then((res) => {
        return res.status === 200;
      })
      .catch((err) => {
        console.error(err.message);
        return false;
      });
  }
}
