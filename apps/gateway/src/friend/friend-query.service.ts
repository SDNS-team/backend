import { ForbiddenException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Friend, Prisma } from '@prisma/client/generated/friend';
import { plainToClass, plainToInstance } from 'class-transformer';
import { catchError, map, Observable, throwError, throwIfEmpty, timeout } from 'rxjs';
import { MicroserviceName } from '../common/enums/microservice-name.enum';
import { FriendDto } from './dtos/friend.dto';

@Injectable()
export class FriendQueryService {
  constructor(@Inject(MicroserviceName.FRIEND_PACKAGE) private readonly client: ClientProxy) {}

  findFirst(args: Prisma.FriendFindFirstArgs): Observable<FriendDto> {
    return this.client.send<Friend, Prisma.FriendFindFirstArgs>({ cmd: 'findFirst' }, args).pipe(
      timeout(5000),
      catchError(error => throwError(() => new ForbiddenException(error.message))),
      throwIfEmpty(() => new NotFoundException('Friend not found')),
      map(friend => plainToInstance(FriendDto, friend)),
    );
  }

  findMany(args: Prisma.FriendFindManyArgs): Observable<FriendDto[]> {
    return this.client.send<Friend[], Prisma.FriendFindManyArgs>({ cmd: 'findMany' }, args).pipe(
      timeout(5000),
      catchError(error => throwError(() => new ForbiddenException(error.message))),
      map(friends => plainToInstance(FriendDto, friends)),
    );
  }

  create(args: Prisma.FriendCreateArgs): Observable<FriendDto> {
    return this.client.send<Friend, Prisma.FriendCreateArgs>({ cmd: 'create' }, args).pipe(
      timeout(5000),
      catchError(error => throwError(() => new ForbiddenException(error.message))),
      map(friend => plainToInstance(FriendDto, friend)),
    );
  }

  update(args: Prisma.FriendUpdateArgs): Observable<FriendDto> {
    return this.client.send<Friend, Prisma.FriendUpdateArgs>({ cmd: 'update' }, args).pipe(
      timeout(5000),
      catchError(error => throwError(() => new ForbiddenException(error.message))),
      map(friend => plainToClass(FriendDto, friend)),
    );
  }

  delete(args: Prisma.FriendDeleteArgs): Observable<boolean> {
    return this.client.send<boolean, Prisma.FriendDeleteArgs>({ cmd: 'delete' }, args).pipe(
      timeout(5000),
      catchError(error => throwError(() => new ForbiddenException(error.message))),
    );
  }
}
