import { Injectable } from '@nestjs/common';
import { MinioService } from 'nestjs-minio-client';
import { v4 as uuidv4 } from 'uuid';
import { ConfigService } from '../common/configs/config.service';

@Injectable()
export class MinioClientService {
  constructor(private readonly minio: MinioService, public readonly configService: ConfigService) {}

  public async upload(file: Express.Multer.File, bucketName: string) {
    const extension = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
    const fileName = uuidv4() + extension;
    const metaData = {
      'Content-Type': file.mimetype,
    };
    await this.minio.client.putObject(bucketName, fileName, file.buffer, metaData);
    return fileName;
  }

  async delete(bucketName: string, objetName: string) {
    await this.minio.client.removeObject(bucketName, objetName);
  }
}
