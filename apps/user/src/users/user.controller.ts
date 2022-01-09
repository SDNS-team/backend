import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { FindManyUserArgs } from '../../../gateway/src/@generated/user/find-many-user.args';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod('UserService', 'findMany')
  async findMany(args: FindManyUserArgs) {
    const result = await this.userService.findMany({ ...args });
    return {
      values: result,
    };
  }
}
