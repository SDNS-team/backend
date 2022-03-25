import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import R from 'ramda';
import { map, Observable } from 'rxjs';
import { FindFirstUserArgs } from '../../../../libs/models/user/find-first-user.args';
import { User } from '../../../../libs/models/user/user.model';
import { GqlAuthGuard } from '../auth/graphql/gql-auth.guard';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => User, { name: 'user' })
  findFirst(@Args() args: FindFirstUserArgs): Observable<User> {
    return this.userService.findFirst({ ...args }).pipe(
      map((it) => {
        if (R.isEmpty(it)) throw new NotFoundException('User not found');
        return it;
      }),
    );
  }
}
