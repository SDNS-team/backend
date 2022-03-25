import { FindManyFriendArgs } from '@models/friend/find-many-friend.args';
import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { GqlAuthGuard } from '../auth/graphql/gql-auth.guard';
import { FriendAppService } from './friend.service';
import { FriendResponse } from './models/friend.model';

@Resolver(() => FriendResponse)
export class FriendResolver {
  constructor(private readonly friendService: FriendAppService) {}

  // @Mutation(() => Friend)
  // createFriend(@Args('createFriend') createFriendInput: FriendCreateInput) {
  //   return this.friendService.create({
  //     data: createFriendInput,
  //   });
  // }

  @UseGuards(GqlAuthGuard)
  @Query(() => FriendResponse, { name: 'friends' })
  async findMany(@Args() args: FindManyFriendArgs): Promise<Observable<FriendResponse>> {
    const result = this.friendService.findMany({ ...args });
    return result;
  }

  // @Query(() => Friend, { name: 'friendUnique' })
  // async findUnique(@Args() args: FindUniqueFriendArgs) {
  //   return this.friendService.findUnique({ ...args });
  // }
}
