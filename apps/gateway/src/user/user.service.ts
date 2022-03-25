import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { User } from '@prisma/client/generated/user';
import { Observable } from 'rxjs';
import { CreateOneUserArgs } from '../../../../libs/models/user/create-one-user.args';
import { FindFirstUserArgs } from '../../../../libs/models/user/find-first-user.args';
import { FindManyUserArgs } from '../../../../libs/models/user/find-many-user.args';
import { UpdateOneUserArgs } from '../../../../libs/models/user/update-one-user.args';
import { UserResponse } from './models/user.model';

interface UserRemoteService {
  findMany(args: FindManyUserArgs): Observable<UserResponse>;
  findFirst(args: FindFirstUserArgs): Observable<User>;
  create(args: CreateOneUserArgs): Observable<User>;
  update(args: UpdateOneUserArgs): Observable<User>;
}

@Injectable()
export class UserService implements OnModuleInit {
  private userRemoteService: UserRemoteService;

  constructor(@Inject('USER_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.userRemoteService =
      this.client.getService<UserRemoteService>('UserService');
  }

  findMany(args: FindManyUserArgs): Observable<UserResponse> {
    return this.userRemoteService.findMany(args);
  }

  findFirst(args: FindFirstUserArgs): Observable<User> {
    return this.userRemoteService.findFirst({ ...args });
  }

  create(args: CreateOneUserArgs): Observable<User> {
    return this.userRemoteService.create(args);
  }

  update(args: UpdateOneUserArgs): Observable<User> {
    return this.userRemoteService.update(args);
  }
}
