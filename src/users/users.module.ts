import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UsersAPI } from '../datasources/users.api';

@Module({
  providers: [UsersResolver, UsersService, UsersAPI],
})
export class UsersModule {}
