import { Injectable } from '@nestjs/common';
import { ConfigService } from './common/configs/config.service';

@Injectable()
export class AppService {
  constructor(readonly configService: ConfigService) {}

  getHello(): string {
    return 'Hello World!' + this.configService.port;
  }
}
