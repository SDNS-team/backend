import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { ConfigModule } from '../common/configs/config.module';
import { ConfigService } from '../common/configs/config.service';
import { MicroserviceName } from '../common/enums/microservice-name.enum';
import { FriendResolver } from './friend.resolver';
import { FriendService } from './friend.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: MicroserviceName.FRIEND_PACKAGE,
        useFactory: (configService: ConfigService) => configService.friendMicroserviceOptions,
        inject: [ConfigService],
        imports: [ConfigModule],
      },
    ]),
  ],
  providers: [FriendService, FriendResolver],
  exports: [ClientsModule, FriendService],
})
export class FriendModule {}
