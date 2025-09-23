import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  
  //to make UsersService available outside of this module
  exports: [UsersService],
})
export class UsersModule {}
