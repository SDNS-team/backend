import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { User } from '@prisma/client/generated/user';
import { CreateOneUserArgs } from '../../../../libs/models/user/create-one-user.args';
import { FindFirstUserArgs } from '../../../../libs/models/user/find-first-user.args';
import { FindManyUserArgs } from '../../../../libs/models/user/find-many-user.args';
import { UpdateOneUserArgs } from '../../../../libs/models/user/update-one-user.args';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod('UserService', 'findMany')
  async findMany(args: FindManyUserArgs) {
    const result = await this.userService.findMany(args);
    return {
      values: result,
    };
  }

  @GrpcMethod('UserService', 'findFirst')
  async findFirst(args: FindFirstUserArgs): Promise<Partial<User>> {
    const user = await this.userService.findFirst(args);
    return user || {};
  }

  @GrpcMethod('UserService', 'create')
  async create(args: CreateOneUserArgs): Promise<User> {
    return await this.userService.create(args);
  }

  @GrpcMethod('UserService', 'update')
  async update(args: UpdateOneUserArgs): Promise<User> {
    return await this.userService.update(args);
  }
}
