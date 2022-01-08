import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from '../grpc-client.options';
import { PrismaModule } from '../prisma/prisma.module';
import { FriendResolver } from './friend.resolver';
import { FriendAppService } from './friend.service';

@Module({
  imports: [
    PrismaModule,
    ClientsModule.register([
      {
        name: 'FRIEND_PACKAGE',
        ...grpcClientOptions,
      },
    ]),
  ],
  providers: [FriendAppService, FriendResolver],
})
export class FriendModule {}
