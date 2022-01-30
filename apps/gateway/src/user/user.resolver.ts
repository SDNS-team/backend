import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { FindFirstUserArgs } from '../../../../libs/models/user/find-first-user.args';
import { User } from '../../../../libs/models/user/user.model';
import { GqlAuthGuard } from '../auth/graphql/gql-auth.guard';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => User, { name: 'user' })
  async findFirst(@Args() args: FindFirstUserArgs): Promise<User | undefined> {
    const result = await this.userService.findFirst({ ...args });
    return result;
  }
}
