import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FavoritesService } from './favorites.service';
import { CreateFavoriteInput } from './dto/create-favorite.input';
import { UpdateFavoriteInput } from './dto/update-favorite.input';

@Resolver('Favorite')
export class FavoritesResolver {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Mutation('createFavorite')
  create(
    @Args('createFavoriteInput') createFavoriteInput: CreateFavoriteInput,
  ) {
    return this.favoritesService.create(createFavoriteInput);
  }

  @Query('favorites')
  findAll() {
    return this.favoritesService.findAll();
  }

  @Query('favorite')
  findOne(@Args('id') id: string) {
    return this.favoritesService.findOne(id);
  }

  @Mutation('updateFavorite')
  update(
    @Args('updateFavoriteInput') updateFavoriteInput: UpdateFavoriteInput,
  ) {
    return this.favoritesService.update(updateFavoriteInput);
  }

  @Mutation('removeFavorite')
  remove(@Args('id') id: string) {
    return this.favoritesService.remove(id);
  }
}
