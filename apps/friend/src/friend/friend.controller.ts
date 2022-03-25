import { FindManyFriendArgs } from '@models/friend/find-many-friend.args';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { FriendService } from './friend.service';

@Controller('friends')
export class FriendController {
  constructor(private readonly friendService: FriendService) {}

  @GrpcMethod('FriendService', 'findMany')
  async findMany(args: FindManyFriendArgs) {
    const result = await this.friendService.findMany({ ...args });
    return {
      values: result,
    };
  }
}
