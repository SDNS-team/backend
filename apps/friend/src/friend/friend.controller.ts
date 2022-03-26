import { Controller, UsePipes } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { FindManyFriendArgs } from '../../../gateway/src/friend/models/find-many-friend.args'; // TODO: переделать на интерфейс или dto
import { TransformPipe } from '../common/pipes/transform.pipe';
import { CreateOneFriendArgsDto } from './dto/create-one-friend-args.dto';
import { FriendService } from './friend.service';

@Controller('friends')
export class FriendController {
  constructor(private readonly friendService: FriendService) {}

  @GrpcMethod(FriendService.name, 'findMany')
  async findMany(args: FindManyFriendArgs) {
    const result = await this.friendService.findMany({ ...args });
    return {
      values: result,
    };
  }

  @GrpcMethod(FriendService.name, 'create')
  @UsePipes(new TransformPipe())
  async create(args: CreateOneFriendArgsDto) {
    return await this.friendService.create(args);
  }
}
