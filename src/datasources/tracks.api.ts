import { RESTDataSource } from 'apollo-datasource-rest';
import { CreateTrackInput, Track, UpdateTrackInput } from '../graphql';

export class TracksAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3006/v1/tracks';
  }

  async getTracks(): Promise<Track[]> {
    return await this.get('tracks');
  }

  async getTrack(id: string): Promise<Track> {
    return await this.get(`tracks/${encodeURIComponent(id)}`);
  }

  async createTrack(track: CreateTrackInput): Promise<Track> {
    return await this.post('tracks', track);
  }

  async updateTrack(track: UpdateTrackInput): Promise<Track> {
    return await this.put(`tracks/${encodeURIComponent(track.id)}`, track);
  }

  async deleteTrack(id: string): Promise<Track> {
    return await this.delete(`tracks/${encodeURIComponent(id)}`);
  }
}
