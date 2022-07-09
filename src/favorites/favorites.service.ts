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

  create(createFavoriteInput: CreateFavoriteInput) {}

  findAll() {}

  findOne(id: string) {}

  update(updateFavoriteInput: UpdateFavoriteInput) {}

  remove(id: string) {}
}
