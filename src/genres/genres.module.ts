import { Module } from '@nestjs/common';
import { GenresService } from './genres.service';
import { GenresResolver } from './genres.resolver';
import { GenresAPI } from '../datasources/genres.api';

@Module({
  providers: [GenresResolver, GenresService, GenresAPI],
})
export class GenresModule {}
