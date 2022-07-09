import { Injectable } from '@nestjs/common';
import { CreateAlbumInput } from './dto/create-album.input';
import { UpdateAlbumInput } from './dto/update-album.input';
import axios from 'axios';
import { ListAlbumInput } from './dto/list-album.input';

@Injectable()
export class AlbumsService {
  private client: any;
  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:3005/v1/albums',
    });
  }

  async create(createAlbumInput: CreateAlbumInput) {
    this.client
      .post('/', createAlbumInput)
      .then((res) => {
        if (res.status === 200) {
          return res.data;
        } else {
          return null;
        }
      })
      .catch((err) => {
        console.error(err.message);
        return null;
      });
  }

  async findAll(paginationQuery: ListAlbumInput) {
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
      const response = this.client.get(`/${id}`);
      if (response.status === 200) {
        return response.data;
      } else {
        return null;
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  async update(updateAlbumInput: UpdateAlbumInput) {
    this.client
      .put(`/${updateAlbumInput.id}`, updateAlbumInput)
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
