import { RESTDataSource } from 'apollo-datasource-rest';
import { Band } from '../graphql';

export class BandsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3003/v1/bands';
  }

  async getBands(): Promise<Band[]> {
    const bands = await this.get('bands');
    return bands;
  }

  async getBand(id: number): Promise<Band> {
    const band = await this.get(`bands/${encodeURIComponent(id)}`);
    return band;
  }

  async createBand(band: Band): Promise<Band> {
    const newBand = await this.post('bands', band);
    return newBand;
  }

  async updateBand(band: Band): Promise<Band> {
    const updatedBand = await this.put(
      `bands/${encodeURIComponent(band.id)}`,
      band,
    );
    return updatedBand;
  }

  async deleteBand(id: number): Promise<Band> {
    const deletedBand = await this.delete(`bands/${encodeURIComponent(id)}`);
    return deletedBand;
  }
}
