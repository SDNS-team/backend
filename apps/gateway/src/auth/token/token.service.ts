import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import * as randomToken from 'rand-token';
import { UserService } from '../../user/user.service';

@Injectable()
export class TokenService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
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
    const refreshToken = randomToken.generate(16);
    await this.userService.update({
      data: {
        refreshToken: {
          set: refreshToken,
        },
      },
      where: {
        id: userId,
      },
    });
    return refreshToken;
  }
}
