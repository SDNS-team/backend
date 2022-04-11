import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { GqlAuthGuard } from '../auth/token/guards/gql-auth.guard';
import { Session } from '../auth/token/types/session.type';
import { AuthSession } from '../common/decorators/gql-auth.decorator';
import { Note } from '../note/models';
import { NoteService } from '../note/note.service';
import { FriendDto } from './dtos/friend.dto';
import { FriendService } from './friend.service';
import { Friend, FriendCreateArgs, FriendEditArgs, FriendFindManyArgs, FriendFindOneArgs, FriendRemoveArgs } from './models';

@UseGuards(GqlAuthGuard)
@Resolver(() => Friend)
export class FriendResolver {
  constructor(private readonly friendService: FriendService, private readonly noteService: NoteService) {}

  @Query(_returns => Friend, { description: 'Find one friend current user' })
  findOneFriend(@Args() args: FriendFindOneArgs): Observable<FriendDto> {
    return this.friendService.findFirst({ ...args });
  }

  @Query(_returns => [Friend], { description: 'Find friends current user' })
  findManyFriend(@Args() args: FriendFindManyArgs, @AuthSession() session: Session): Observable<FriendDto[]> {
    return this.friendService.findMany({ ...args }, session);
  }

  @Mutation(_returns => Friend)
  createFriend(@Args() args: FriendCreateArgs): Observable<FriendDto> {
    return this.friendService.create({ ...args });
  }

  @Mutation(_returns => Friend)
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

  @ResolveField(_returns => [Note])
  async notes(@Parent() friend: Friend) {
    return this.noteService.findMany({
      where: {
        friendId: {
          equals: friend.id,
        },
      },
    });
  }
}
