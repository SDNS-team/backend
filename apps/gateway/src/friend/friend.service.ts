import { ForbiddenException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { plainToClass } from 'class-transformer';
import { catchError, map, mergeMap, Observable, throwError, throwIfEmpty, timeout } from 'rxjs';
import { MicroserviceName } from '../common/enums/microservice-name.enum';
import { FriendDto } from './dtos/friend.dto';
import { Friend, FriendCreateArgs, FriendEditArgs, FriendFindManyArgs, FriendFindOneArgs, FriendRemoveArgs } from './models';

// TODO: поиграться с таймаутами и вынести в конфиг константой
@Injectable()
export class FriendService {
  constructor(@Inject(MicroserviceName.FRIEND_PACKAGE) private client: ClientProxy) {}

  findMany(args: FriendFindManyArgs): Observable<FriendDto[]> {
    return this.client.send<Friend[]>({ cmd: 'findMany' }, args).pipe(
      timeout(5000),
      catchError(error => throwError(() => new ForbiddenException(error.message))),
      map(friends => plainToClass(FriendDto, friends)),
    );
  }

  findFirst(args: FriendFindOneArgs): Observable<FriendDto> {
    return this.client.send<Friend>({ cmd: 'findFirst' }, args).pipe(
      timeout(5000),
      catchError(error => throwError(() => new ForbiddenException(error.message))),
      throwIfEmpty(() => new NotFoundException('User not found')),
      map(friend => plainToClass(FriendDto, friend)),
    );
  }

  create(args: FriendCreateArgs): Observable<FriendDto> {
    return this.client.send<Friend>({ cmd: 'create' }, args).pipe(
      timeout(5000),
      catchError(error => throwError(() => new ForbiddenException(error.message))),
      map(friend => plainToClass(FriendDto, friend)),
    );
  }

  update(args: FriendEditArgs): Observable<FriendDto> {
    return this.findFirst({
      where: args.where,
    }).pipe(
      mergeMap(() =>
        this.client.send<Friend>({ cmd: 'update' }, args).pipe(
          timeout(5000),
          catchError(error => throwError(() => new ForbiddenException(error.message))),
          map(friend => plainToClass(FriendDto, friend)),
        ),
      ),
    );
  }

  remove(args: FriendRemoveArgs): Observable<boolean> {
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
