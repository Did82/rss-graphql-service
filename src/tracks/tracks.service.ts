import { Injectable } from '@nestjs/common';
import { CreateTrackInput } from './dto/create-track.input';
import { UpdateTrackInput } from './dto/update-track.input';
import axios from 'axios';
import { ListTracksInput } from './dto/list-track.input';

@Injectable()
export class TracksService {
  private client;
  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:3006/v1/genres',
    });
  }

  async create(createTrackInput: CreateTrackInput) {
    this.client
      .post('/', createTrackInput)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async findAll(paginationQuery: ListTracksInput) {
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
      const response = await this.client.get(`/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async update(updateTrackInput: UpdateTrackInput) {
    this.client
      .put(`/${updateTrackInput.id}`, updateTrackInput)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async remove(id: string) {
    this.client
      .delete(`/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
