import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { from, switchMap } from 'rxjs';
import { ConfigService } from '../../common/configs/config.service';
import { UserService } from '../../user/user.service';
import { BodyLoginType } from './types/login.type';
import { TokensType } from './types/tokens.type';

@Injectable()
export class TokenService {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  public login(body: BodyLoginType): TokensType {
    return {
      accessToken: this.createAccessToken(body),
      refreshToken: this.createRefreshToken(body),
    };
  }

  private createAccessToken(body: BodyLoginType): string {
    return this.jwtService.sign({ id: body.id, username: body.name });
  }

  private createRefreshToken(body: BodyLoginType): string {
    const refreshToken = this.jwtService.sign(
      { id: body.id },
      this.configService.refreshSignOptions,
    );

    from(bcrypt.genSalt(10))
      .pipe(
        switchMap((salt) => bcrypt.hash(refreshToken.slice(-30), salt)),
        switchMap((hash) =>
          this.userService.update({
            data: {
              hashRefreshToken: {
                set: hash,
              },
            },
            where: {
              id: body.id,
            },
          }),
        ),
      )
      .subscribe();

    return refreshToken;
  }

  async validateRefreshToken(
    refreshToken: string,
    hashRefreshToken: string,
  ): Promise<boolean> {
    return await bcrypt.compare(refreshToken.slice(-30), hashRefreshToken);
  }
}
