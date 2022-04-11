import { ForbiddenException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Prisma } from '@prisma/client/generated/friend';
import { plainToClass } from 'class-transformer';
import { catchError, map, mergeMap, Observable, throwError, throwIfEmpty, timeout } from 'rxjs';
import { Session } from '../auth/token/types/session.type';
import { MicroserviceName } from '../common/enums/microservice-name.enum';
import { UserService } from '../user/user.service';
import { FriendDto } from './dtos/friend.dto';
import { Friend } from './models';

import FriendFindFirstArgs = Prisma.FriendFindFirstArgs;
import FriendCreateArgs = Prisma.FriendCreateArgs;
import FriendUpdateArgs = Prisma.FriendUpdateArgs;
import FriendFindManyArgs = Prisma.FriendFindManyArgs;
import FriendDeleteArgs = Prisma.FriendDeleteArgs;

// TODO: поиграться с таймаутами и вынести в конфиг константой
// TODO: Сделать поиск только по текущему пользователю
@Injectable()
export class FriendService {
  constructor(@Inject(MicroserviceName.FRIEND_PACKAGE) private readonly client: ClientProxy, private readonly userService: UserService) {}

  findMany(args: FriendFindManyArgs, session: Session): Observable<FriendDto[]> {
    // TODO: можно ли это написать красивее?
    const query: FriendFindManyArgs = {
      ...args,
      where: {
        ...args.where,
        userId: session.id,
      },
    };

    return this.client.send<Friend[]>({ cmd: 'findMany' }, query).pipe(
      timeout(5000),
      catchError(error => throwError(() => new ForbiddenException(error.message))),
      map(friends => plainToClass(FriendDto, friends)),
    );
  }

  findFirst(args: FriendFindFirstArgs): Observable<FriendDto> {
    return this.client.send<Friend>({ cmd: 'findFirst' }, args).pipe(
      timeout(5000),
      catchError(error => throwError(() => new ForbiddenException(error.message))),
      throwIfEmpty(() => new NotFoundException('Friend not found')),
      map(friend => plainToClass(FriendDto, friend)),
    );
  }

  create(args: FriendCreateArgs): Observable<FriendDto> {
    return this.userService
      .findFirst({
        where: {
          id: args.data.userId,
        },
      })
      .pipe(
        mergeMap(() =>
          this.client.send<Friend>({ cmd: 'create' }, args).pipe(
            timeout(5000),
            catchError(error => throwError(() => new ForbiddenException(error.message))),
            map(friend => plainToClass(FriendDto, friend)),
          ),
        ),
      );
  }

  update(args: FriendUpdateArgs): Observable<FriendDto> {
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

  remove(args: FriendDeleteArgs): Observable<boolean> {
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
