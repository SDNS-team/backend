import { Args, Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { FindManyFriendArgs } from '../@generated/friend/find-many-friend.args';
import { FriendResponse } from '../@generated/friend/friend.model';
import { FriendAppService } from './friend.service';

@Resolver(() => FriendResponse)
export class FriendResolver {
  constructor(private readonly friendService: FriendAppService) {}

  // @Mutation(() => Friend)
  // createFriend(@Args('createFriend') createFriendInput: FriendCreateInput) {
  //   return this.friendService.create({
  //     data: createFriendInput,
  //   });
  // }

  @Query(() => FriendResponse, { name: 'friends' })
  async findMany(
    @Args() args: FindManyFriendArgs,
  ): Promise<Observable<FriendResponse>> {
    const result = this.friendService.findMany({ ...args });
    return result;
  }

  // @Query(() => Friend, { name: 'friendUnique' })
  // async findUnique(@Args() args: FindUniqueFriendArgs) {
  //   return this.friendService.findUnique({ ...args });
  // }
}
