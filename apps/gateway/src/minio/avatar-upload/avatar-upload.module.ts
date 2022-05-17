import { Module } from '@nestjs/common';
import { MinioClientModule } from '../minio.module';
import { AvatarUploadController } from './avatar-upload.controller';
import { AvatarUploadService } from './avatar-upload.service';

@Module({
  imports: [MinioClientModule],
  controllers: [AvatarUploadController],
  providers: [AvatarUploadService],
})
export class AvatarUploadModule {}
