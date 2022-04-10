import { CreateOneUserArgs } from '@models/user/create-one-user.args';
import { FindFirstUserArgs } from '@models/user/find-first-user.args';
import { FindManyUserArgs } from '@models/user/find-many-user.args';
import { UpdateOneUserArgs } from '@models/user/update-one-user.args';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { User } from '@prisma/client/generated/user';
import { Observable } from 'rxjs';
import { MicroserviceName } from '../common/enums/microservice-name.enum';
import { UserResponse } from './models/user.model';

interface UserGrpcService {
  findMany(args: FindManyUserArgs): Observable<UserResponse>;
  findFirst(args: FindFirstUserArgs): Observable<User>;
  create(args: CreateOneUserArgs): Observable<User>;
  update(args: UpdateOneUserArgs): Observable<User>;
}

@Injectable()
export class UserService implements OnModuleInit {
  private userGrpcService: UserGrpcService;

  constructor(@Inject(MicroserviceName.USER_PACKAGE) private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.userGrpcService = this.client.getService<UserGrpcService>('UserService');
  }

  findMany(args: FindManyUserArgs): Observable<UserResponse> {
    return this.userGrpcService.findMany(args);
  }

  findFirst(args: FindFirstUserArgs): Observable<User> {
    return this.userGrpcService.findFirst({ ...args });
  }

  create(args: CreateOneUserArgs): Observable<User> {
    return this.userGrpcService.create(args);
  }

  update(args: UpdateOneUserArgs): Observable<User> {
    return this.userGrpcService.update(args);
  }
}
