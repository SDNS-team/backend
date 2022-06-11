import { Injectable } from '@nestjs/common';
import { firstValueFrom, mergeMap, Observable } from 'rxjs';
import { UserSession } from '../common/interfaces/user-session.interface';
import { FriendQueryService } from '../friend/friend-query.service';
import { NoteDto } from './dtos/note.dto';
import { NoteCreateArgs, NoteRemoveArgs } from './models';
import { NoteQueryService } from './note-query.service';

@Injectable()
export class NoteService {
  constructor(private readonly friendQueryService: FriendQueryService, private readonly noteQueryService: NoteQueryService) {}

  create(args: NoteCreateArgs, session: UserSession): Observable<NoteDto> {
    return this.friendQueryService
      .findFirst({
        where: {
          id: args.data.friendId,
          userId: session.uid,
        },
      })
      .pipe(mergeMap(() => this.noteQueryService.create(args)));
  }

  async remove(args: NoteRemoveArgs, session: UserSession): Promise<Observable<boolean>> {
    const note = await firstValueFrom(
      this.noteQueryService.findFirst({
        where: {
          id: args.where.id,
        },
      }),
    );

    return this.friendQueryService
      .findFirst({
        select: { id: true },
        where: {
          userId: session.uid,
          id: note.friendId,
        },
      })
      .pipe(
        mergeMap(() =>
          this.noteQueryService.delete({
            where: {
              id: note.id,
            },
          }),
        ),
      );
  }
}
