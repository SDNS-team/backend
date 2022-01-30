import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/client/generated/user';
import { AuthSession } from './graphql/gql-auth.decorator';
import { GqlRefreshGuard } from './graphql/gql-refresh.guard';
import { Tokens } from './token/models/token.model';
import { TokenService } from './token/token.service';

@Resolver('auth')
export class AuthResolver {
  constructor(private readonly tokenService: TokenService) {}

  @UseGuards(GqlRefreshGuard)
  @Query(() => Tokens, { name: 'refresh' })
  async refresh(@AuthSession() user: User) {
    const tokens = await this.tokenService.login(user); // TODO: Почему-то можно передать не тот тип
    return tokens;
  }
}
