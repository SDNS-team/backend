import { Module } from '@nestjs/common';
import { FirebaseAuthStrategy } from './firebase.strategy';

@Module({
  providers: [FirebaseAuthStrategy],
  exports: [FirebaseAuthStrategy],
})
export class FirebaseModule {}
