import { Injectable } from '@nestjs/common';
import { CreateArtistInput } from './dto/create-artist.input';
import { UpdateArtistInput } from './dto/update-artist.input';
import { ArtistsAPI } from '../datasources/artists.api';

@Injectable()
export class ArtistsService {
  constructor(private readonly artistsAPI: ArtistsAPI) {}

  create(createArtistInput: CreateArtistInput) {
    return this.artistsAPI.createArtist(createArtistInput);
  }

  findAll() {
    return this.artistsAPI.getArtists();
  }

  findOne(id: string) {
    return this.artistsAPI.getArtist(id);
  }

  update(updateArtistInput: UpdateArtistInput) {
    return this.artistsAPI.updateArtist(updateArtistInput);
  }

  remove(id: string) {
    return this.artistsAPI.deleteArtist(id);
  }
}
