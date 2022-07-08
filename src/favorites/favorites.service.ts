import { Injectable } from '@nestjs/common';
import { CreateFavoriteInput } from './dto/create-favorite.input';
import { UpdateFavoriteInput } from './dto/update-favorite.input';
import { FavoritesAPI } from '../datasources/favorites.api';

@Injectable()
export class FavoritesService {
  constructor(private readonly favoritesAPI: FavoritesAPI) {}

  create(createFavoriteInput: CreateFavoriteInput) {
    return this.favoritesAPI.createFavorite(createFavoriteInput);
  }

  findAll() {
    return this.favoritesAPI.getFavorites();
  }

  findOne(id: string) {
    return this.favoritesAPI.getFavorite(id);
  }

  update(updateFavoriteInput: UpdateFavoriteInput) {
    return this.favoritesAPI.updateFavorite(updateFavoriteInput);
  }

  remove(id: string) {
    return this.favoritesAPI.deleteFavorite(id);
  }
}
