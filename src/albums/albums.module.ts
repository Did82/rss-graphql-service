import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsResolver } from './albums.resolver';
import { AlbumsAPI } from '../datasources/albums.api';

@Module({
  providers: [AlbumsResolver, AlbumsService, AlbumsAPI],
})
export class AlbumsModule {}
