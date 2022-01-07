import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FindManyFriendArgs } from 'src/@generated/friend/find-many-friend.args';
import { FindUniqueFriendArgs } from 'src/@generated/friend/find-unique-friend.args';
import { FriendCreateInput } from 'src/@generated/friend/friend-create.input';
import { Friend } from '../@generated/friend/friend.model';
import { FriendService } from './friend.service';

@Resolver(() => Friend)
export class FriendResolver {
  constructor(private readonly friendService: FriendService) {}

  @Mutation(() => Friend)
  createFriend(@Args('createFriend') createFriendInput: FriendCreateInput) {
    return this.friendService.create({
      data: createFriendInput,
    });
  }

  @Query(() => [Friend], { name: 'friends' })
  async findMany(@Args() args: FindManyFriendArgs): Promise<Friend[]> {
    const result = await this.friendService.findMany({ ...args });
    return result;
  }

  @Query(() => Friend, { name: 'friendUnique' })
  async findUnique(@Args() args: FindUniqueFriendArgs) {
    return this.friendService.findUnique({ ...args });
  }
}
