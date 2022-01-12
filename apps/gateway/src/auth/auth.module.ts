import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { GoogleModule } from './google/google.module';
import { TokenModule } from './token/token.module';

@Module({
  imports: [PassportModule, GoogleModule, TokenModule],
})
export class AuthModule {}
