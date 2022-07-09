import { Injectable } from '@nestjs/common';
import { CreateBandInput } from './dto/create-band.input';
import { UpdateBandInput } from './dto/update-band.input';
import axios from 'axios';
import { ListBandsInput } from './dto/list-bands.input';

@Injectable()
export class BandsService {
  private client;
  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:3005/v1/albums',
    });
  }

  async create(createBandInput: CreateBandInput) {
    this.client
      .post('/', createBandInput)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err.message);
        return null;
      });
  }

  async findAll(paginationQuery: ListBandsInput) {
    try {
      const { limit, offset } = paginationQuery;
      const response = await this.client.get(
        `?limit=${limit}&offset=${offset}`,
      );
      return response.data;
    } catch (error) {
      console.error(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const response = this.client.get(`/${id}`);
      return response.data;
    } catch (error) {
      console.error(error.message);
    }
  }

  async update(updateBandInput: UpdateBandInput) {
    this.client
      .put(`/${updateBandInput.id}`, updateBandInput)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err.message);
        return null;
      });
  }

  async remove(id: string) {
    this.client
      .delete(`/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err.message);
        return null;
      });
  }
}
