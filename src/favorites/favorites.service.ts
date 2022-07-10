import { Injectable } from '@nestjs/common';
import { CreateFavoriteInput } from './dto/create-favorite.input';
import { UpdateFavoriteInput } from './dto/update-favorite.input';
import axios from 'axios';

@Injectable()
export class FavoritesService {
  private client;
  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:3007/api/v1/favorites',
    });
  }

  create(createFavoriteInput: CreateFavoriteInput) {
    return this.client
      .post('/', createFavoriteInput)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err.message);
        return null;
      });
  }

  findAll() {
    return this.client
      .get('/')
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err.message);
        return null;
      });
  }

  findOne(id: string) {
    return this.client
      .get(`/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err.message);
        return null;
      });
  }

  update(updateFavoriteInput: UpdateFavoriteInput) {
    return this.client
      .put(`/${updateFavoriteInput.id}`, updateFavoriteInput)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err.message);
        return null;
      });
  }

  remove(id: string) {
    return this.client
      .delete(`/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err.message);
        return null;
      });
  }
}
