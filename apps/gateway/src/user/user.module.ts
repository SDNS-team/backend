import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { ConfigModule } from '../common/configs/config.module';
import { ConfigService } from '../common/configs/config.service';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      // TODO: Обязательно импортировать в каждый модуль?
      {
        name: 'USER_PACKAGE',
        useFactory: (configService: ConfigService) =>
          configService.userMicroserviceOptions,
        inject: [ConfigService],
        imports: [ConfigModule],
      },
    ]),
  ],
  providers: [UserService, UserResolver],
})
export class UserModule {}
