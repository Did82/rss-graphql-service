import { RESTDataSource } from 'apollo-datasource-rest';
import { Band, CreateBandInput, UpdateBandInput } from '../graphql';

export class BandsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3003/v1/bands';
  }

  async getBands(): Promise<Band[]> {
    return await this.get('bands');
  }

  async getBand(id: string): Promise<Band> {
    return await this.get(`bands/${encodeURIComponent(id)}`);
  }

  async createBand(band: CreateBandInput): Promise<Band> {
    return await this.post('bands', band);
  }

  async updateBand(band: UpdateBandInput): Promise<Band> {
    return await this.put(`bands/${encodeURIComponent(band.id)}`, band);
  }

  async deleteBand(id: string): Promise<Band> {
    return await this.delete(`bands/${encodeURIComponent(id)}`);
  }
}
