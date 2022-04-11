import { Controller, ForbiddenException } from '@nestjs/common';
import { MessagePattern, RpcException } from '@nestjs/microservices';
import { Prisma, User } from '@prisma/client/generated/user';
import { EMPTY } from 'rxjs';
import { ConfigService } from '../common/configs/config.service';
import { UserService } from './user.service';

import UserFindFirstArgs = Prisma.UserFindFirstArgs;
import UserFindManyArgs = Prisma.UserFindManyArgs;
import UserCreateArgs = Prisma.UserCreateArgs;
import UserUpdateArgs = Prisma.UserUpdateArgs;

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService, private readonly configService: ConfigService) {}

  @MessagePattern({ cmd: 'findMany' })
  async findMany(args: UserFindManyArgs): Promise<User[]> {
    return await this.userService.findMany({
      ...args,
      where: {
        ...args.where,
        deleted: false,
      },
    });
  }

  @MessagePattern({ cmd: 'findFirst' })
  async findFirst(args: UserFindFirstArgs): Promise<typeof EMPTY | User> {
    try {
      const user = await this.userService.findFirst({
        ...args,
        where: {
          ...args.where,
          deleted: false,
        },
      });
      if (!user) {
        return EMPTY;
      }
      return user;
    } catch (error) {
      if (!this.configService.isProduction && error instanceof Error) {
        throw new RpcException(error.message);
      }
      throw new RpcException(ForbiddenException);
    }
  }

  @MessagePattern({ cmd: 'create' })
  async create(args: UserCreateArgs): Promise<User> {
    try {
      return await this.userService.create(args);
    } catch (error) {
      if (!this.configService.isProduction && error instanceof Error) {
        throw new RpcException(error.message);
      }
      throw new RpcException(ForbiddenException);
    }
  }

  @MessagePattern({ cmd: 'update' })
  async update(args: UserUpdateArgs): Promise<User> {
    try {
      return await this.userService.update(args);
    } catch (error) {
      if (!this.configService.isProduction && error instanceof Error) {
        throw new RpcException(error.message);
      }
      throw new RpcException(ForbiddenException);
    }
  }
}
