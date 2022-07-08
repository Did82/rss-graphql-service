import { Module } from '@nestjs/common';
import { BandsService } from './bands.service';
import { BandsResolver } from './bands.resolver';
import { BandsAPI } from '../datasources/bands.api';

@Module({
  providers: [BandsResolver, BandsService, BandsAPI],
})
export class BandsModule {}
