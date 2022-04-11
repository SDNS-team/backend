import { ForbiddenException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Prisma, User } from '@prisma/client/generated/user';
import { plainToClass } from 'class-transformer';
import { catchError, map, mergeMap, Observable, throwError, throwIfEmpty, timeout } from 'rxjs';
import { MicroserviceName } from '../common/enums/microservice-name.enum';
import { UserDto } from './dtos/user.dto';

import UserFindFirstArgs = Prisma.UserFindFirstArgs;
import UserCreateArgs = Prisma.UserCreateArgs;
import UserUpdateArgs = Prisma.UserUpdateArgs;

@Injectable()
export class UserService {
  constructor(@Inject(MicroserviceName.USER_PACKAGE) private readonly client: ClientProxy) {}

  findFirst(args: UserFindFirstArgs): Observable<UserDto> {
    return this.client.send<User>({ cmd: 'findFirst' }, args).pipe(
      timeout(5000),
      catchError(error => throwError(() => new ForbiddenException(error.message))),
      throwIfEmpty(() => new NotFoundException('User not found')),
      map(user => plainToClass(UserDto, user)),
    );
  }

  update(args: UserUpdateArgs): Observable<UserDto> {
    return this.findFirst({
      where: args.where,
    }).pipe(
      mergeMap(() =>
        this.client.send<User>({ cmd: 'update' }, args).pipe(
          timeout(5000),
          catchError(error => throwError(() => new ForbiddenException(error.message))),
          map(user => plainToClass(UserDto, user)),
        ),
      ),
    );
  }

  create(args: UserCreateArgs): Observable<UserDto> {
    return this.client.send<User>({ cmd: 'create' }, args).pipe(
      timeout(5000),
      catchError(error => throwError(() => new ForbiddenException(error.message))),
      map(user => plainToClass(UserDto, user)),
    );
  }
}
