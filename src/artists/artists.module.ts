import { Module } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { ArtistsResolver } from './artists.resolver';
import { ArtistsAPI } from '../datasources/artists.api';

@Module({
  providers: [ArtistsResolver, ArtistsService, ArtistsAPI],
})
export class ArtistsModule {}
