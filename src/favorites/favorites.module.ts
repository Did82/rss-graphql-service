import { Module } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoritesResolver } from './favorites.resolver';
import { FavoritesAPI } from '../datasources/favorites.api';

@Module({
  providers: [FavoritesResolver, FavoritesService, FavoritesAPI],
})
export class FavoritesModule {}
