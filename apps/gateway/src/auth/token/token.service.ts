import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import { ConfigService } from '../../common/configs/config.service';
import { UserService } from '../../user/user.service';

@Injectable()
export class TokenService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
    private configService: ConfigService,
  ) {}

  async login(user: User) {
    const accessToken = this.jwtService.sign({ username: 'test', id: user.id });
    const refreshToken = await this.getRefreshToken(user.id);
    return {
      accessToken,
      refreshToken,
    };
  }

  public async getRefreshToken(userId: string): Promise<string> {
    const refreshToken = this.jwtService.sign(
      { id: userId },
      this.configService.refreshSignOptions,
    );
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(refreshToken.slice(72), salt); // NOTE: Костыль, max length bcrypt 72 bytes
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

  public async validateRefreshToken(
    userId: string,
    refreshToken: string,
  ): Promise<boolean> {
    const user = await this.userService.findFirst({
      where: {
        id: {
          equals: userId,
        },
      },
    });
    if (!user || !user.hashRefreshToken) {
      return false;
    }
    return await bcrypt.compare(refreshToken.slice(72), user.hashRefreshToken);
  }
}
