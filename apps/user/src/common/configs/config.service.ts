import { Injectable } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';
import { get } from 'env-var';
import * as path from 'path';
import { join } from 'path';

dotenv.config({
  path: path.join(__dirname, '.env'),
});

@Injectable()
export class ConfigService {
  get host(): string {
    return get('USER_HOST').required().asString();
  }

  get port(): number {
    return get('USER_PORT').required().asPortNumber();
  }

  get staticUrl(): string {
    return get('USER_STATIC_URL').required().asUrlString();
  }

  get appName(): string {
    return get('USER_APP_NAME').required().asString();
  }

  get isProduction(): boolean {
    return get('NODE_ENV').required().asString() === 'production';
  }

  get microserviceOptions(): MicroserviceOptions {
    return {
      transport: Transport.GRPC,
      options: {
        url: `${this.host}:${this.port}`,
        package: 'user',
        protoPath: join(__dirname, './assets/__proto/user.proto'),
        loader: { keepCase: true },
      },
    };
  }
}
