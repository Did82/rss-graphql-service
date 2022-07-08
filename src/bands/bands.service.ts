import { Injectable } from '@nestjs/common';
import { CreateBandInput } from './dto/create-band.input';
import { UpdateBandInput } from './dto/update-band.input';
import { BandsAPI } from '../datasources/bands.api';

@Injectable()
export class BandsService {
  constructor(private readonly bandsAPI: BandsAPI) {}

  create(createBandInput: CreateBandInput) {
    return this.bandsAPI.createBand(createBandInput);
  }

  findAll() {
    return this.bandsAPI.getBands();
  }

  findOne(id: string) {
    return this.bandsAPI.getBand(id);
  }

  update(updateBandInput: UpdateBandInput) {
    return this.bandsAPI.updateBand(updateBandInput);
  }

  remove(id: string) {
    return this.bandsAPI.deleteBand(id);
  }
}
