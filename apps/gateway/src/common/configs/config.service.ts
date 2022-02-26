import { Injectable } from '@nestjs/common';
import { JwtModuleOptions, JwtSignOptions } from '@nestjs/jwt';
import { ClientOptions, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';
import { get } from 'env-var';
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

  get userMicroserviceOptions(): ClientOptions {
    return {
      transport: Transport.GRPC,
      options: {
        url: `${get('USER_HOST').required().asString()}:${get('USER_PORT')
          .required()
          .asPortNumber()}`,
        package: 'user',
        protoPath: join(__dirname, 'assets/__proto/user.proto'),
        loader: { keepCase: true },
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
}
