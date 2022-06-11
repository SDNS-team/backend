import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { FirebaseModule } from './firebase/firebase.module';

@Module({
  imports: [PassportModule, FirebaseModule],
})
export class AuthModule {}
