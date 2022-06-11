import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/client/generated/user';
import { AuthSession } from '../common/decorators/auth-session.decorator';
import { GqlRefreshGuard } from './token/guards/gql-refresh.guard';
import { Tokens } from './token/models/tokens.model';
import { TokenService } from './token/token.service';

@Resolver('auth')
export class AuthResolver {
  constructor(private readonly tokenService: TokenService) {}

  @UseGuards(GqlRefreshGuard)
  @Query(() => Tokens, { name: 'refresh' })
  refresh(@AuthSession() user: User) {
    return this.tokenService.login(user);
  }
}
