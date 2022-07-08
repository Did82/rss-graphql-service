import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  Info,
} from '@nestjs/graphql';
import { GenresService } from './genres.service';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';
import { ListGenreInput } from './dto/lists-genre.input';
import { Param } from '@nestjs/common';
import * as QueryString from 'querystring';
import { GenresAPI } from '../datasources/genres.api';

@Resolver('Genre')
export class GenresResolver {
  constructor(
    private readonly genresService: GenresService,
    private readonly genresAPI: GenresAPI,
  ) {}

  @Mutation('createGenre')
  create(@Args('createGenreInput') createGenreInput: CreateGenreInput) {
    console.log(createGenreInput);
    return this.genresService.create(createGenreInput);
  }

  @Query('genres')
  async findAll(@Args() paginationQuery?: ListGenreInput) {
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
