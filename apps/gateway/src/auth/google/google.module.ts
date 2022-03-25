import { Module } from '@nestjs/common';
import { UserModule } from '../../user/user.module';
import { TokenModule } from '../token/token.module';
import { GoogleController } from './google.controller';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [TokenModule, UserModule],
  controllers: [GoogleController],
  providers: [GoogleStrategy],
})
export class GoogleModule {}
