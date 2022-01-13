import {
  Controller,
  Get,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
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
    if (!req.user) {
      throw new UnauthorizedException();
    }

    const tokens = await this.tokenService.login(req.user); // TODO: Пофиксить тип
    res.send(tokens);
    return tokens;
  }
}
