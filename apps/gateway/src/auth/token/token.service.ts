import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcryptjs';
import { ConfigService } from '../../common/configs/config.service';
import { UserService } from '../../user/user.service';
import { BodyLoginType } from './types/login.type';
import { TokensType } from './types/tokens.type';

@Injectable()
export class TokenService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
    private configService: ConfigService,
  ) {}

  async refresh(userId: string) {
    const user = await this.userService.findFirst({
      where: {
        id: {
          equals: userId,
        },
      },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    return await this.login(user);
  }

  async login(body: BodyLoginType): Promise<TokensType> {
    console.log(
      '🚀 ~ file: token.service.ts ~ line 34 ~ TokenService ~ login ~ user',
      body,
    );
    const accessToken = this.jwtService.sign({
      username: body.name,
      id: body.id,
    });
    const refreshToken = await this.getRefreshToken(body.id);
    return {
      accessToken,
      refreshToken,
    };
  }

  async getRefreshToken(userId: string): Promise<string> {
    const refreshToken = this.jwtService.sign(
      { id: userId },
      this.configService.refreshSignOptions,
    );
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(refreshToken.slice(-30), salt); // NOTE: Костыль, max length bcrypt 72 bytes
    await this.userService.update({
      data: {
        hashRefreshToken: {
          set: hash,
        },
      },
      where: {
        id: userId,
      },
    });

    return refreshToken;
  }

  async validateRefreshToken(
    refreshToken: string,
    hashRefreshToken: string,
  ): Promise<boolean> {
    return await bcrypt.compare(refreshToken.slice(-30), hashRefreshToken);
  }
}
