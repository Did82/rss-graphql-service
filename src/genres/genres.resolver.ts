import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GenresService } from './genres.service';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';
import { ListGenreInput } from './dto/lists-genre.input';
import { ListAlbumResponse } from '../albums/entities/album.entity';

@Resolver('Genre')
export class GenresResolver {
  constructor(private readonly genresService: GenresService) {}

  @Mutation('createGenre')
  create(@Args('createGenreInput') createGenreInput: CreateGenreInput) {
    return this.genresService.create(createGenreInput);
  }

  @Query('genres')
  async findAll(
    @Args() paginationQuery?: ListGenreInput,
  ): Promise<ListAlbumResponse> {
    const { limit = 5, offset = 0 } = paginationQuery;
    return await this.genresService.findAll({ limit, offset });
  }

  @Query('genre')
  async findOne(@Args('id') id: string) {
    return await this.genresService.findOne(id);
  }

  @Mutation('updateGenre')
  update(@Args('updateGenreInput') updateGenreInput: UpdateGenreInput) {
    return this.genresService.update(updateGenreInput);
  }

  @Mutation('removeGenre')
  remove(@Args('id') id: string) {
    return this.genresService.remove(id);
  }
}
