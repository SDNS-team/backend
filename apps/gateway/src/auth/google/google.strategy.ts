import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { AuthProviderEnum } from '../../common/enums/auth-provider.enum';
import { UserService } from '../../user/user.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(readonly userService: UserService) {
    super({
      // TODO: Вынести в конфиг
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: 'http://localhost:4004/google/redirect',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
  ) {
    const { id, name, emails } = profile;

    if (!emails) {
      throw new UnauthorizedException();
    }

    let user = await this.userService.findFirst({
      where: {
        provider: {
          equals: AuthProviderEnum.GOOGLE,
        },
        providerId: {
          equals: id,
        },
      },
    });

    if (!user?.id) {
      user = await this.userService.create({
        data: {
          provider: AuthProviderEnum.GOOGLE,
          providerId: id,
          name: name?.givenName,
          email: emails[0].value,
        },
      });
    }

    if (!user?.id) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
