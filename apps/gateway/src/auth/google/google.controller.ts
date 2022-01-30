import {
  Controller,
  Get,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client/generated/user';
import { Request, Response } from 'express';
import { TokenService } from '../token/token.service';
import { GoogleOauthGuard } from './google.guard';

@Controller('google') // TODO: Поменять на auth/google в console.cloud.google.com
export class GoogleController {
  constructor(private tokenService: TokenService) {}

  @UseGuards(GoogleOauthGuard)
  @Get()
  async googleAuth() {
    return null;
  }

  @Get('redirect')
  @UseGuards(GoogleOauthGuard)
  async googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
    const user = <User>req.user;
    if (!user) {
      throw new UnauthorizedException();
    }
    const tokens = await this.tokenService.login({
      id: user.id,
      name: user.name,
    });
    res.send(tokens);
    return tokens;
  }
}
