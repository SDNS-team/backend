import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { ConfigModule } from '../../common/configs/config.module';
import { ConfigService } from '../../common/configs/config.service';
import { UserService } from '../../user/user.service';
import { TokenModule } from '../token/token.module';
import { GoogleController } from './google.controller';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [
    TokenModule,
    ClientsModule.registerAsync([
      {
        name: 'USER_PACKAGE',
        useFactory: (configService: ConfigService) => configService.userMicroserviceOptions,
        inject: [ConfigService],
        imports: [ConfigModule],
      },
    ]),
  ],
  controllers: [GoogleController],
  providers: [GoogleStrategy, UserService],
})
export class GoogleModule {}
