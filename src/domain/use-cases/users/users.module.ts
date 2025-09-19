import { Module } from '@nestjs/common';
import { CreateUser–flatService } from './create-user–flat/create-user–flat.service';
import { GetUserById–flatService } from './get-user-by-id–flat/get-user-by-id–flat.service';

@Module({
  providers: [CreateUser–flatService, GetUserById–flatService]
})
export class UsersModule {}
