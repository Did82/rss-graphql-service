import { Injectable } from '@nestjs/common';
import { CreateTrackInput } from './dto/create-track.input';
import { UpdateTrackInput } from './dto/update-track.input';
import { TracksAPI } from '../datasources/tracks.api';

@Injectable()
export class TracksService {
  constructor(private readonly tracksAPI: TracksAPI) {}
  create(createTrackInput: CreateTrackInput) {
    return this.tracksAPI.createTrack(createTrackInput);
  }

  findAll() {
    return this.tracksAPI.getTracks();
  }

  findOne(id: string) {
    return this.tracksAPI.getTrack(id);
  }

  update(updateTrackInput: UpdateTrackInput) {
    return this.tracksAPI.updateTrack(updateTrackInput);
  }

  remove(id: string) {
    return this.tracksAPI.deleteTrack(id);
  }
}
