import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './common/configs/config.module';
import { ConfigService } from './common/configs/config.service';
import { FriendModule } from './friend/friend.module';
import { AvatarUploadModule } from './minio/avatar-upload/avatar-upload.module';
import { MinioClientModule } from './minio/minio.module';
import { NoteModule } from './note/note.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AuthModule,
    FriendModule,
    UserModule,
    NoteModule,
    AvatarUploadModule,
    MinioClientModule,
    GraphQLModule.forRootAsync({
      useFactory: (configService: ConfigService) => configService.gqlOptions,
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [ConfigService],
})
export class AppModule {}
