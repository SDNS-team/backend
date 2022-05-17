import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AvatarUploadService } from './avatar-upload.service';

@Controller('avatar-upload')
export class AvatarUploadController {
  constructor(private imageUploadService: AvatarUploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadAvatar(@UploadedFile() file: Express.Multer.File) {
    return await this.imageUploadService.uploadAvatar(file);
  }
}
