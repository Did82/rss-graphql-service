import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AlbumsService } from './albums.service';
import { CreateAlbumInput } from './dto/create-album.input';
import { UpdateAlbumInput } from './dto/update-album.input';
import { ListAlbumInput } from './dto/list-album.input';

@Resolver('Album')
export class AlbumsResolver {
  constructor(private readonly albumsService: AlbumsService) {}

  @Mutation('createAlbum')
  create(@Args('createAlbumInput') createAlbumInput: CreateAlbumInput) {
    return this.albumsService.create(createAlbumInput);
  }

  @Query('albums')
  findAll(@Args() paginationQuery?: ListAlbumInput) {
    return this.albumsService.findAll(paginationQuery);
  }

  @Query('album')
  findOne(@Args('id') id: string) {
    return this.albumsService.findOne(id);
  }

  @Mutation('updateAlbum')
  update(@Args('updateAlbumInput') updateAlbumInput: UpdateAlbumInput) {
    return this.albumsService.update(updateAlbumInput);
  }

  @Mutation('removeAlbum')
  remove(@Args('id') id: string) {
    return this.albumsService.remove(id);
  }
}
