import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { FirebaseAuthGuard } from '../auth/firebase/firebase.guard';
import { AuthSession } from '../common/decorators/auth-session.decorator';
import { UserSession } from '../common/interfaces/user-session.interface';
import { Note, NoteCreateArgs, NoteRemoveArgs } from './models';
import { NoteService } from './note.service';

@UseGuards(FirebaseAuthGuard)
@Resolver(() => Note)
export class NoteResolver {
  constructor(private readonly noteService: NoteService) {}

  @Mutation(_returns => Note)
  createNote(@Args() args: NoteCreateArgs, @AuthSession() session: UserSession): Observable<Note> {
    return this.noteService.create(args, session);
  }

  @Mutation(_returns => Boolean)
  removeNote(@Args() args: NoteRemoveArgs, @AuthSession() session: UserSession): Promise<Observable<boolean>> {
    return this.noteService.remove(args, session);
  }
}
