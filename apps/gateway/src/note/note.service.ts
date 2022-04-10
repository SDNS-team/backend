import { ForbiddenException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Prisma } from '@prisma/client/generated/note';
import { plainToClass } from 'class-transformer';
import { catchError, map, mergeMap, Observable, throwError, throwIfEmpty, timeout } from 'rxjs';
import { MicroserviceName } from '../common/enums/microservice-name.enum';
import { FriendService } from '../friend/friend.service';
import { NoteDto } from './dtos/note.dto';
import { Note, NoteCreateArgs, NoteFindManyArgs, NoteRemoveArgs } from './models';

import NoteFindFirstArgs = Prisma.NoteFindFirstArgs;

@Injectable()
export class NoteService {
  constructor(@Inject(MicroserviceName.NOTE_PACKAGE) private readonly client: ClientProxy, private readonly friendService: FriendService) {}

  findFirst(args: NoteFindFirstArgs): Observable<NoteDto> {
    return this.client.send<Note>({ cmd: 'findFirst' }, args).pipe(
      timeout(5000),
      catchError(error => throwError(() => new ForbiddenException(error.message))),
      throwIfEmpty(() => new NotFoundException('Note not found')),
      map(friend => plainToClass(NoteDto, friend)),
    );
  }

  findMany(args: NoteFindManyArgs): Observable<NoteDto[]> {
    return this.client.send<Note[]>({ cmd: 'findMany' }, args).pipe(
      timeout(5000),
      catchError(error => throwError(() => new ForbiddenException(error.message))),
      map(notes => plainToClass(NoteDto, notes)),
    );
  }

  create(args: NoteCreateArgs): Observable<NoteDto> {
    return this.friendService
      .findFirst({
        where: {
          id: args.data.friendId,
        },
      })
      .pipe(
        mergeMap(() =>
          this.client.send<Note>({ cmd: 'create' }, args).pipe(
            timeout(5000),
            catchError(error => throwError(() => new ForbiddenException(error.message))),
            map(note => plainToClass(NoteDto, note)),
          ),
        ),
      );
  }

  remove(args: NoteRemoveArgs): Observable<boolean> {
    return this.findFirst(args).pipe(
      mergeMap(() =>
        this.client.send<boolean>({ cmd: 'delete' }, args).pipe(
          timeout(5000),
          catchError(error => throwError(() => new ForbiddenException(error.message))),
        ),
      ),
    );
  }
}
