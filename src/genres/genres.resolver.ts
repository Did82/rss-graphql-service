import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GenresService } from './genres.service';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';

@Resolver('Genre')
export class GenresResolver {
  constructor(private readonly genresService: GenresService) {}

  @Mutation('createGenre')
  create(@Args('createGenreInput') createGenreInput: CreateGenreInput) {
    return this.genresService.create(createGenreInput);
  }

  @Query('genres')
  findAll() {
    return this.genresService.findAll();
  }

  @Query('genre')
  findOne(@Args('id') id: number) {
    return this.genresService.findOne(id);
  }

  @Mutation('updateGenre')
  update(@Args('updateGenreInput') updateGenreInput: UpdateGenreInput) {
    return this.genresService.update(updateGenreInput.id, updateGenreInput);
  }

  @Mutation('removeGenre')
  remove(@Args('id') id: number) {
    return this.genresService.remove(id);
  }
}
