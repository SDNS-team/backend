import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { User } from '@prisma/client/generated/user';
import { Observable } from 'rxjs';
import { CreateOneUserArgs } from '../@generated/user/create-one-user.args';
import { FindFirstUserArgs } from '../@generated/user/find-first-user.args';
import { FindManyUserArgs } from '../@generated/user/find-many-user.args';
import { UpdateOneUserArgs } from '../@generated/user/update-one-user.args';
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

  async findFirst(args: FindFirstUserArgs): Promise<User | undefined> {
    return await this.userRemoteService.findFirst({ ...args }).toPromise();
  }

  async create(args: CreateOneUserArgs): Promise<User | undefined> {
    return await this.userRemoteService.create(args).toPromise();
  }

  async update(args: UpdateOneUserArgs): Promise<User | undefined> {
    return await this.userRemoteService.update(args).toPromise();
  }
}
