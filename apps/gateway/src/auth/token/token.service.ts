import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { from, switchMap } from 'rxjs';
import { ConfigService } from '../../common/configs/config.service';
import { UserService } from '../../user/user.service';
import { Session } from './types/session.type';
import { TokensType } from './types/tokens.type';

@Injectable()
export class TokenService {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  public login(body: Session): TokensType {
    return {
      accessToken: this.createAccessToken(body),
      refreshToken: this.createRefreshToken(body),
    };
  }

  private createAccessToken({ id, name: username }: Session): string {
    return this.jwtService.sign({ id, username });
  }

  private createRefreshToken(session: Session): string {
    const refreshToken = this.jwtService.sign({ id: session.id }, this.configService.refreshSignOptions);

    from(bcrypt.genSalt(10))
      .pipe(
        switchMap(salt => bcrypt.hash(refreshToken.slice(-30), salt)),
        switchMap(hash =>
          this.userService.update({
            data: {
              hashRefreshToken: {
                set: hash,
              },
            },
            where: {
              id: session.id,
            },
          }),
        ),
      )
      .subscribe();

    return refreshToken;
  }

  public async validateRefreshToken(refreshToken: string, hashRefreshToken: string): Promise<boolean> {
    return await bcrypt.compare(refreshToken.slice(-30), hashRefreshToken);
  }
}
