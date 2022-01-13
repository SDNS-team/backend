import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthResolver } from './auth.resolver';
import { GoogleModule } from './google/google.module';
import { TokenModule } from './token/token.module';

@Module({
  imports: [PassportModule, GoogleModule, TokenModule],
  providers: [AuthResolver],
})
export class AuthModule {}
