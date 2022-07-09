import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TracksService } from './tracks.service';
import { CreateTrackInput } from './dto/create-track.input';
import { UpdateTrackInput } from './dto/update-track.input';
import { ListTracksInput } from './dto/list-track.input';
import { ListTracksResponse } from './entities/track.entity';
import { ListArtistsInput } from '../artists/dto/list-artists.input';

@Resolver('Track')
export class TracksResolver {
  constructor(private readonly tracksService: TracksService) {}

  @Mutation('createTrack')
  create(@Args('createTrackInput') createTrackInput: CreateTrackInput) {
    return this.tracksService.create(createTrackInput);
  }

  @Query('tracks')
  findAll(
    @Args() paginationQuery: ListArtistsInput,
  ): Promise<ListTracksResponse> {
    const { limit = 5, offset = 0 } = paginationQuery;
    return this.tracksService.findAll({ limit, offset });
  }

  @Query('track')
  findOne(@Args('id') id: string) {
    return this.tracksService.findOne(id);
  }

  @Mutation('updateTrack')
  update(@Args('updateTrackInput') updateTrackInput: UpdateTrackInput) {
    return this.tracksService.update(updateTrackInput);
  }

  @Mutation('removeTrack')
  remove(@Args('id') id: string) {
    return this.tracksService.remove(id);
  }
}
