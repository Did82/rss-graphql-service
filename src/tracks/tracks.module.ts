import { Module } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { TracksResolver } from './tracks.resolver';
import { TracksAPI } from '../datasources/tracks.api';

@Module({
  providers: [TracksResolver, TracksService, TracksAPI],
})
export class TracksModule {}
