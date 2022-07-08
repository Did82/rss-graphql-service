import { RESTDataSource } from 'apollo-datasource-rest';
import { Album, CreateAlbumInput, UpdateAlbumInput } from '../graphql';

export class AlbumsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3005/v1/albums';
  }

  async getAlbums(): Promise<Album[]> {
    return await this.get('albums');
  }

  async getAlbum(id: string): Promise<Album> {
    return await this.get(`albums/${encodeURIComponent(id)}`);
  }

  async createAlbum(album: CreateAlbumInput): Promise<Album> {
    return await this.post('albums', album);
  }

  async updateAlbum(album: UpdateAlbumInput): Promise<Album> {
    return await this.put(`albums/${encodeURIComponent(album.id)}`, album);
  }

  async deleteAlbum(id: string): Promise<Album> {
    return await this.delete(`albums/${encodeURIComponent(id)}`);
  }
}
