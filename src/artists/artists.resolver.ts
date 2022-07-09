import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ArtistsService } from './artists.service';
import { CreateArtistInput } from './dto/create-artist.input';
import { UpdateArtistInput } from './dto/update-artist.input';
import { ListAlbumResponse } from '../albums/entities/album.entity';
import { ListArtistsInput } from './dto/list-artists.input';

@Resolver('Artist')
export class ArtistsResolver {
  constructor(private readonly artistsService: ArtistsService) {}

  @Mutation('createArtist')
  create(@Args('createArtistInput') createArtistInput: CreateArtistInput) {
    return this.artistsService.create(createArtistInput);
  }

  @Query('artists')
  findAll(
    @Args() paginationQuery: ListArtistsInput,
  ): Promise<ListAlbumResponse> {
    return this.artistsService.findAll(paginationQuery);
  }

  @Query('artist')
  findOne(@Args('id') id: string) {
    return this.artistsService.findOne(id);
  }

  @Mutation('updateArtist')
  update(@Args('updateArtistInput') updateArtistInput: UpdateArtistInput) {
    return this.artistsService.update(updateArtistInput);
  }

  @Mutation('removeArtist')
  remove(@Args('id') id: string) {
    return this.artistsService.remove(id);
  }
}
