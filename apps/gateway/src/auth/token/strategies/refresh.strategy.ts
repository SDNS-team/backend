import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '../../../common/configs/config.service';
import { UserService } from '../../../user/user.service';
import { TokenService } from '../token.service';
import { RefreshPayloadType } from '../types/refresh-payload.type';

@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor(
    public readonly configService: ConfigService,
    public readonly tokenService: TokenService,
    public readonly userService: UserService,
  ) {
    super(configService.refreshStrategyOptions);
  }

  async validate(req: Request, payload: RefreshPayloadType) {
    const token = ExtractJwt.fromAuthHeaderAsBearerToken()(req);
    if (!token) {
      throw new UnauthorizedException();
    }
    const user = await this.userService.findFirst({
      where: {
        id: {
          equals: payload.id,
        },
      },
    });
    if (!user?.hashRefreshToken) {
      throw new UnauthorizedException();
    }
    const validateStatus = await this.tokenService.validateRefreshToken(
      token,
      user.hashRefreshToken,
    );
    if (!validateStatus) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
