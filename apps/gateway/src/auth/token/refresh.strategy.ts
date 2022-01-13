import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { ConfigService } from '../../common/configs/config.service';
import { TokenService } from './token.service';
import { RefreshPayload } from './types/refresh-payload.type';

@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor(
    public readonly configService: ConfigService,
    public readonly tokenService: TokenService,
  ) {
    super(configService.refreshStrategyOptions);
  }

  async validate(
    req: Request,
    payload: RefreshPayload,
    done: VerifiedCallback,
  ) {
    const token = ExtractJwt.fromAuthHeaderAsBearerToken()(req);
    if (!token) {
      return done(new UnauthorizedException());
    }
    const validateStatus = await this.tokenService.validateRefreshToken(
      payload.id,
      token,
    );
    console.log(
      '🚀 ~ file: refresh.strategy.ts ~ line 31 ~ RefreshStrategy ~ classRefreshStrategyextendsPassportStrategy ~ validateStatus',
      validateStatus,
    );
    if (!validateStatus) {
      return done(new UnauthorizedException()); // TODO: Переделать на throw
    }
    return { id: payload.id };
  }
}
