import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { GqlAuthGuard } from '../auth/token/guards/gql-auth.guard';
import { FriendService } from './friend.service';
import { CreateOneFriendArgs, FindManyFriendArgs, Friend } from './models';

@Resolver(() => Friend)
export class FriendResolver {
  constructor(private readonly friendService: FriendService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(_returns => Friend)
  createFriend(@Args() args: CreateOneFriendArgs): Observable<Friend> {
    return this.friendService.create({
      ...args,
    });
  }

  @UseGuards(GqlAuthGuard)
  @Query(_returns => [Friend], { name: 'friends' })
  findMany(@Args() args: FindManyFriendArgs): Observable<Friend[]> {
    return this.friendService.findMany({ ...args });
  }

  // @Query(() => Friend, { name: 'friendUnique' })
  // async findUnique(@Args() args: FindUniqueFriendArgs) {
  //   return this.friendService.findUnique({ ...args });
  // }
}
