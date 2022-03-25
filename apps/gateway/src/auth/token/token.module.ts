import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '../../common/configs/config.module';
import { ConfigService } from '../../common/configs/config.service';
import { UserModule } from '../../user/user.module';
import { JwtStrategy } from './strategies/jwt.strategy';
import { RefreshStrategy } from './strategies/refresh.strategy';
import { TokenService } from './token.service';

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => configService.jwtModuleOptions,
      inject: [ConfigService],
    }),
  ],
  providers: [ConfigService, JwtStrategy, RefreshStrategy, TokenService],
  exports: [TokenService],
})
export class TokenModule {}
