import { RESTDataSource } from 'apollo-datasource-rest';
import { Artist, CreateArtistInput, UpdateArtistInput } from '../graphql';

export class ArtistsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3002/v1/artists';
  }

  async getArtists(): Promise<Artist[]> {
    return await this.get('artists');
  }

  async getArtist(id: string): Promise<Artist> {
    return await this.get(`artists/${encodeURIComponent(id)}`);
  }

  async createArtist(artist: CreateArtistInput): Promise<Artist> {
    return await this.post('artists', artist);
  }

  async updateArtist(artist: UpdateArtistInput): Promise<Artist> {
    return await this.put(`artists/${encodeURIComponent(artist.id)}`, artist);
  }

  async deleteArtist(id: string): Promise<boolean> {
    return await this.delete(`artists/${encodeURIComponent(id)}`);
  }
}
