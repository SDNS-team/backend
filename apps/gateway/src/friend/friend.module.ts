import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { ConfigModule } from '../common/configs/config.module';
import { ConfigService } from '../common/configs/config.service';
import { FriendResolver } from './friend.resolver';
import { FriendAppService } from './friend.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'FRIEND_PACKAGE',
        useFactory: (configService: ConfigService) =>
          configService.friendMicroserviceOptions,
        inject: [ConfigService],
        imports: [ConfigModule],
      },
    ]),
  ],
  providers: [FriendAppService, FriendResolver],
})
export class FriendModule {}
