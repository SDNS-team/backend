import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { ConfigModule } from '../common/configs/config.module';
import { ConfigService } from '../common/configs/config.service';
import { MicroserviceName } from '../common/enums/microservice-name.enum';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: MicroserviceName.USER_PACKAGE,
        useFactory: (configService: ConfigService) => configService.userMicroserviceOptions,
        inject: [ConfigService],
        imports: [ConfigModule],
      },
    ]),
  ],
  providers: [UserService, UserResolver],
  exports: [ClientsModule, UserService],
})
export class UserModule {}
