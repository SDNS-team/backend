import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { FirebaseAuthGuard } from '../auth/firebase/firebase.guard';
import { AuthSession } from '../common/decorators/auth-session.decorator';
import { UserSession } from '../common/interfaces/user-session.interface';
import { Note } from '../note/models';
import { NoteQueryService } from '../note/note-query.service';
import { FriendService } from './friend.service';
import { Friend, FriendCreateArgs, FriendEditArgs, FriendFindManyArgs, FriendRemoveArgs } from './models';

@UseGuards(FirebaseAuthGuard)
@Resolver(() => Friend)
export class FriendResolver {
  constructor(private readonly friendService: FriendService, private readonly noteQueryService: NoteQueryService) {}

  @Query(_returns => [Friend], { description: 'Find friends current user' })
  findManyFriend(@Args() args: FriendFindManyArgs, @AuthSession() session: UserSession): Observable<Friend[]> {
    return this.friendService.findMany(args, session);
  }

  @Mutation(_returns => Friend)
  createFriend(@Args() args: FriendCreateArgs, @AuthSession() session: UserSession): Observable<Friend> {
    return this.friendService.create(args, session);
  }

  @Mutation(_returns => Friend)
  editFriend(@Args() args: FriendEditArgs, @AuthSession() session: UserSession): Observable<Friend> {
    return this.friendService.edit(args, session);
  }

  @Mutation(_returns => Boolean)
  removeFriend(@Args() args: FriendRemoveArgs, @AuthSession() session: UserSession): Observable<boolean> {
    return this.friendService.remove(args, session);
  }

  @ResolveField(_returns => [Note])
  async notes(@Parent() friend: Friend) {
    return this.noteQueryService.findMany({
      where: {
        friendId: {
          equals: friend.id,
        },
      },
    });
  }
}
