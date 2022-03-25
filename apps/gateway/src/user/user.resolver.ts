import { FindFirstUserArgs } from '@models/user/find-first-user.args';
import { User } from '@models/user/user.model';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import R from 'ramda';
import { map, Observable } from 'rxjs';
import { GqlAuthGuard } from '../auth/token/guards/gql-auth.guard';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => User, { name: 'user' })
  findFirst(@Args() args: FindFirstUserArgs): Observable<User> {
    return this.userService.findFirst({ ...args }).pipe(
      map(it => {
        if (R.isEmpty(it)) throw new NotFoundException('User not found');
        return it;
      }),
    );
  }
}
