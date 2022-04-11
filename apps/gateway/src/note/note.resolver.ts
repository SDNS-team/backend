import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { GqlAuthGuard } from '../auth/token/guards/gql-auth.guard';
import { NoteDto } from './dtos/note.dto';
import { Note, NoteCreateArgs, NoteRemoveArgs } from './models';
import { NoteService } from './note.service';

@UseGuards(GqlAuthGuard)
@Resolver(() => Note)
export class NoteResolver {
  constructor(private readonly noteService: NoteService) {}

  @Mutation(_returns => Note)
  createNote(@Args() args: NoteCreateArgs): Observable<NoteDto> {
    return this.noteService.create({ ...args });
  }

  @Mutation(_returns => Boolean)
  removeNote(@Args() args: NoteRemoveArgs): Observable<boolean> {
    return this.noteService.remove({
      ...args,
    });
  }
}
