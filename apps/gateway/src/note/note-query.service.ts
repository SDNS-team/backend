import { ForbiddenException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Prisma } from '@prisma/client/generated/note';
import { plainToClass, plainToInstance } from 'class-transformer';
import { catchError, map, Observable, throwError, throwIfEmpty, timeout } from 'rxjs';
import { MicroserviceName } from '../common/enums/microservice-name.enum';
import { NoteDto } from './dtos/note.dto';
import { Note } from './models';

@Injectable()
export class NoteQueryService {
  constructor(@Inject(MicroserviceName.NOTE_PACKAGE) private readonly client: ClientProxy) {}

  findFirst(args: Prisma.NoteFindFirstArgs): Observable<NoteDto> {
    return this.client.send<Note, Prisma.NoteFindFirstArgs>({ cmd: 'findFirst' }, args).pipe(
      timeout(5000),
      catchError(error => throwError(() => new ForbiddenException(error.message))),
      throwIfEmpty(() => new NotFoundException('Note not found')),
      map(note => plainToInstance(NoteDto, note)),
    );
  }

  findMany(args: Prisma.NoteFindManyArgs): Observable<NoteDto[]> {
    return this.client.send<Note[], Prisma.NoteFindManyArgs>({ cmd: 'findMany' }, args).pipe(
      timeout(5000),
      catchError(error => throwError(() => new ForbiddenException(error.message))),
      map(notes => plainToInstance(NoteDto, notes)),
    );
  }

  create(args: Prisma.NoteCreateArgs): Observable<NoteDto> {
    return this.client.send<Note, Prisma.NoteCreateArgs>({ cmd: 'create' }, args).pipe(
      timeout(5000),
      catchError(error => throwError(() => new ForbiddenException(error.message))),
      map(note => plainToInstance(NoteDto, note)),
    );
  }

  update(args: Prisma.NoteUpdateArgs): Observable<NoteDto> {
    return this.client.send<Note, Prisma.NoteUpdateArgs>({ cmd: 'update' }, args).pipe(
      timeout(5000),
      catchError(error => throwError(() => new ForbiddenException(error.message))),
      map(note => plainToClass(NoteDto, note)),
    );
  }

  delete(args: Prisma.NoteDeleteArgs): Observable<boolean> {
    return this.client.send<boolean, Prisma.NoteDeleteArgs>({ cmd: 'delete' }, args).pipe(
      timeout(5000),
      catchError(error => throwError(() => new ForbiddenException(error.message))),
    );
  }
}
