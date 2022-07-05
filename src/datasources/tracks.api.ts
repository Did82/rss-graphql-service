import { RESTDataSource } from 'apollo-datasource-rest';
import { Track } from '../graphql';

export class TracksAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3006/v1/tracks';
  }

  async getTracks(): Promise<Track[]> {
    const tracks = await this.get('tracks');
    return tracks;
  }

  async getTrack(id: number): Promise<Track> {
    const track = await this.get(`tracks/${encodeURIComponent(id)}`);
    return track;
  }

  async createTrack(track: Track): Promise<Track> {
    const newTrack = await this.post('tracks', track);
    return newTrack;
  }

  async updateTrack(track: Track): Promise<Track> {
    const updatedTrack = await this.put(
      `tracks/${encodeURIComponent(track.id)}`,
      track,
    );
    return updatedTrack;
  }

  async deleteTrack(id: number): Promise<Track> {
    const deletedTrack = await this.delete(`tracks/${encodeURIComponent(id)}`);
    return deletedTrack;
  }
}
