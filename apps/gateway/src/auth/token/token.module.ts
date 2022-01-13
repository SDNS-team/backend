import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ClientsModule } from '@nestjs/microservices';
import { ConfigModule } from '../../common/configs/config.module';
import { ConfigService } from '../../common/configs/config.service';
import { UserService } from '../../user/user.service';
import { JwtStrategy } from './jwt.strategy';
import { RefreshStrategy } from './refresh.strategy';
import { TokenService } from './token.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) =>
        configService.jwtModuleOptions,
      inject: [ConfigService],
    }),
    ClientsModule.registerAsync([
      {
        name: 'USER_PACKAGE',
        useFactory: (configService: ConfigService) =>
          configService.userMicroserviceOptions,
        inject: [ConfigService],
        imports: [ConfigModule],
      },
    ]),
  ],
  providers: [
    ConfigService,
    JwtStrategy,
    RefreshStrategy,
    TokenService,
    UserService,
  ],
  exports: [TokenService],
})
export class TokenModule {}
