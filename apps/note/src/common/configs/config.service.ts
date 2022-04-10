import { Injectable } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { get } from 'env-var';

@Injectable()
export class ConfigService {
  get host(): string {
    return get('NOTE_HOST').required().asString();
  }

  get port(): number {
    return get('NOTE_PORT').required().asPortNumber();
  }

  get staticUrl(): string {
    return get('NOTE_STATIC_URL').required().asUrlString();
  }

  get appName(): string {
    return get('NOTE_APP_NAME').required().asString();
  }

  get isProduction(): boolean {
    return get('NODE_ENV').required().asString() === 'production';
  }

  get microserviceOptions(): MicroserviceOptions {
    return {
      transport: Transport.TCP,
      options: {
        host: this.host,
        port: this.port,
      },
    };
  }
}
