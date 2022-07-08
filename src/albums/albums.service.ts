import { Injectable } from '@nestjs/common';
import { CreateAlbumInput } from './dto/create-album.input';
import { UpdateAlbumInput } from './dto/update-album.input';
import { AlbumsAPI } from '../datasources/albums.api';

@Injectable()
export class AlbumsService {
  constructor(private readonly albumsAPI: AlbumsAPI) {}

  create(createAlbumInput: CreateAlbumInput) {
    return this.albumsAPI.createAlbum(createAlbumInput);
  }

  findAll() {
    return this.albumsAPI.getAlbums();
  }

  findOne(id: string) {
    return this.albumsAPI.getAlbum(id);
  }

  update(updateAlbumInput: UpdateAlbumInput) {
    return this.albumsAPI.updateAlbum(updateAlbumInput);
  }

  remove(id: string) {
    return this.albumsAPI.deleteAlbum(id);
  }
}
