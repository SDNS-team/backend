import { ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { JwtModuleOptions, JwtSignOptions } from '@nestjs/jwt';
import { TcpClientOptions, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';
import { get } from 'env-var';
import { ClientOptions as MinioClientOptions } from 'minio';
import { ExtractJwt, StrategyOptions } from 'passport-jwt';
import * as path from 'path';
import { join } from 'path';

dotenv.config({
  path: path.join(__dirname, '.env'),
});

@Injectable()
export class ConfigService {
  get host(): string {
    return get('GATEWAY_HOST').required().asString();
  }

  get port(): number {
    return get('GATEWAY_PORT').required().asPortNumber();
  }

  get staticUrl(): string {
    return get('GATEWAY_STATIC_URL').required().asUrlString();
  }

  get appName(): string {
    return get('GATEWAY_APP_NAME').required().asString();
  }

  get isProduction(): boolean {
    return get('NODE_ENV').required().asString() === 'production';
  }

  get friendMicroserviceOptions(): TcpClientOptions {
    return {
      transport: Transport.TCP,
      options: {
        host: get('FRIEND_HOST').required().asString(),
        port: get('FRIEND_PORT').required().asPortNumber(),
      },
    };
  }

  get noteMicroserviceOptions(): TcpClientOptions {
    return {
      transport: Transport.TCP,
      options: {
        host: get('NOTE_HOST').required().asString(),
        port: get('NOTE_PORT').required().asPortNumber(),
      },
    };
  }

  get userMicroserviceOptions(): TcpClientOptions {
    return {
      transport: Transport.TCP,
      options: {
        host: get('USER_HOST').required().asString(),
        port: get('USER_PORT').required().asPortNumber(),
      },
    };
  }

  get jwtModuleOptions(): JwtModuleOptions {
    return {
      secret: get('JWT_SECRET').required().asString(),
      signOptions: {
        expiresIn: get('JWT_EXPIRES_IN').required().asInt(),
      },
    };
  }

  get jwtStrategyOptions(): StrategyOptions {
    return {
      ignoreExpiration: false,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: get('JWT_SECRET').required().asString(),
    };
  }

  get refreshStrategyOptions(): StrategyOptions {
    return {
      ignoreExpiration: true,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: get('REFRESH_SECRET').required().asString(),
      passReqToCallback: true,
    };
  }

  get refreshSignOptions(): JwtSignOptions {
    return {
      secret: get('REFRESH_SECRET').required().asString(),
    };
  }

  get gqlOptions(): ApolloDriverConfig {
    return {
      debug: true,
      playground: true,
      disableHealthCheck: true,
      autoSchemaFile: join(__dirname, 'src/schema.gql'),
    };
  }

  get minioClientOptions(): MinioClientOptions {
    return {
      endPoint: get('MINIO_ENDPOINT').required().asString(),
      port: get('MINIO_PORT').required().asPortNumber(),
      useSSL: this.isProduction,
      accessKey: get('MINIO_ROOT_USER').required().asString(),
      secretKey: get('MINIO_ROOT_PASSWORD').required().asString(),
    };
  }

  get minioParams() {
    return {
      bucketNameForAvatars: get('MINIO_AVATAR_BUCKET_NAME').required().asString(),
    };
  }
}
