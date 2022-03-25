import { Injectable } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { get } from 'env-var';
import { join } from 'path';

@Injectable()
export class ConfigService {
  get host(): string {
    return get('FRIEND_HOST').required().asString(); // TODO: Я конечно не уверен, но при вызове он что каждый раз ходит в файл?
  }

  get port(): number {
    return get('FRIEND_PORT').required().asPortNumber();
  }

  get staticUrl(): string {
    return get('FRIEND_STATIC_URL').required().asUrlString();
  }

  get appName(): string {
    return get('FRIEND_APP_NAME').required().asString();
  }

  get isProduction(): boolean {
    return get('NODE_ENV').required().asString() === 'production';
  }

  get microserviceOptions(): MicroserviceOptions {
    return {
      transport: Transport.GRPC,
      options: {
        url: `${this.host}:${this.port}`,
        package: 'friend',
        protoPath: join(__dirname, './assets/__proto/friend.proto'),
        loader: { keepCase: true },
      },
    };
  }
}
