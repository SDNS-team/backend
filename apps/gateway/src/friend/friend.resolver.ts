import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { FriendDto } from './dtos/friend.dto';
import { FriendService } from './friend.service';
import { Friend, FriendCreateArgs, FriendEditArgs, FriendFindManyArgs, FriendFindOneArgs, FriendRemoveArgs } from './models';

// @UseGuards(GqlAuthGuard)
@Resolver(() => Friend)
export class FriendResolver {
  constructor(private readonly friendService: FriendService) {}

  @Query(_returns => Friend, { name: 'findOneFriend' })
  findFirst(@Args() args: FriendFindOneArgs): Observable<FriendDto> {
    return this.friendService.findFirst({ ...args });
  }

  @Query(_returns => [Friend], { name: 'findManyFriend' })
  findManyFriend(@Args() args: FriendFindManyArgs): Observable<FriendDto[]> {
    return this.friendService.findMany({ ...args });
  }

  @Mutation(_returns => Friend, { name: 'createFriend' })
  create(@Args() args: FriendCreateArgs): Observable<FriendDto> {
    return this.friendService.create({ ...args });
  }

  @Mutation(_returns => Friend, { name: 'editFriend' })
  editFriend(@Args() args: FriendEditArgs): Observable<FriendDto> {
    return this.friendService.update({
      ...args,
    });
  }

  @Mutation(_returns => Boolean)
  removeFriend(@Args() args: FriendRemoveArgs): Observable<boolean> {
    return this.friendService.remove({
      ...args,
    });
  }
}
