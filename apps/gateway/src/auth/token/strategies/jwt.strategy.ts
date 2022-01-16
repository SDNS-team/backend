import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { ConfigService } from '../../../common/configs/config.service';
import { JwtPayloadType } from '../types/jwt-payload.type';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(public readonly configService: ConfigService) {
    super(configService.jwtStrategyOptions);
  }

  async validate(payload: JwtPayloadType) {
    return { id: payload.id, username: payload.username };
  }
}
