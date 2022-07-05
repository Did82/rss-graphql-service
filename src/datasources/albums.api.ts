import { RESTDataSource } from 'apollo-datasource-rest';
import { Album } from '../graphql';

export class AlbumsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3005/v1/albums';
  }

  async getAlbums(): Promise<Album[]> {
    const albums = await this.get('albums');
    return albums;
  }

  async getAlbum(id: number): Promise<Album> {
    const album = await this.get(`albums/${encodeURIComponent(id)}`);
    return album;
  }

  async createAlbum(album: Album): Promise<Album> {
    const newAlbum = await this.post('albums', album);
    return newAlbum;
  }

  async updateAlbum(album: Album): Promise<Album> {
    const updatedAlbum = await this.put(
      `albums/${encodeURIComponent(album.id)}`,
      album,
    );
    return updatedAlbum;
  }

  async deleteAlbum(id: number): Promise<Album> {
    const deletedAlbum = await this.delete(`albums/${encodeURIComponent(id)}`);
    return deletedAlbum;
  }
}
