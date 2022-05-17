import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '../../common/configs/config.service';
import { MinioClientService } from '../minio-client.service';

@Injectable()
export class AvatarUploadService {
  constructor(private minioClientService: MinioClientService, public readonly configService: ConfigService) {}

  async uploadAvatar(file: Express.Multer.File) {
    if (!file || !(file.mimetype.includes('jpeg') || file.mimetype.includes('png'))) {
      throw new HttpException('File type not supported', HttpStatus.BAD_REQUEST);
    }
    return {
      fileName: await this.minioClientService.upload(file, this.configService.minioParams.bucketNameForAvatars),
      message: 'Avatar upload successful',
    };
  }
}
