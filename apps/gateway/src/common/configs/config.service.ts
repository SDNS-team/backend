import { Injectable } from '@nestjs/common';
import { ClientOptions, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';
import { get } from 'env-var';
import * as path from 'path';
import { join } from 'path';

dotenv.config({
  path: path.join(__dirname, '.env'),
});

@Injectable()
export class ConfigService {
  get nodeEnv(): string {
    return get('NODE_ENV').required().asString();
  }

  get host(): string {
    return get('HOST').required().asString();
  }

  get port(): number {
    return get('PORT').required().asPortNumber();
  }

  get staticUrl(): string {
    return get('STATIC_URL').required().asUrlString();
  }

  get appName(): string {
    return get('APP_NAME').required().asString();
  }

  get isProduction(): boolean {
    return get('NODE_ENV').required().asString() === 'production';
  }

  get friendMicroserviceOptions(): ClientOptions {
    return {
      transport: Transport.GRPC,
      options: {
        url: `${get('FRIEND_HOST').required().asString()}:${get('FRIEND_PORT')
          .required()
          .asPortNumber()}`,
        package: 'friend',
        protoPath: join(__dirname, 'assets/__proto/friend.proto'),
        loader: { keepCase: true },
      },
    };
  }
}
