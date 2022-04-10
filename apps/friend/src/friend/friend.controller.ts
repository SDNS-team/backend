import { Controller } from '@nestjs/common';
import { MessagePattern, RpcException } from '@nestjs/microservices';
import { Friend, Prisma } from '@prisma/client/generated/friend';
import { EMPTY } from 'rxjs';
import { ConfigService } from '../common/configs/config.service';
import { FriendService } from './friend.service';

import FriendFindFirstArgs = Prisma.FriendFindFirstArgs;
import FriendCreateArgs = Prisma.FriendCreateArgs;
import FriendUpdateArgs = Prisma.FriendUpdateArgs;
import FriendFindManyArgs = Prisma.FriendFindManyArgs;
import FriendDeleteArgs = Prisma.FriendDeleteArgs;

// TODO: Удалить DTO
@Controller('friends')
export class FriendController {
  constructor(private readonly friendService: FriendService, private readonly configService: ConfigService) {}

  @MessagePattern({ cmd: 'findMany' })
  async findMany(args: FriendFindManyArgs): Promise<Friend[]> {
    return await this.friendService.findMany({ ...args });
  }

  @MessagePattern({ cmd: 'findFirst' })
  async findFirst(args: FriendFindFirstArgs): Promise<typeof EMPTY | Friend> {
    const friend = await this.friendService.findFirst({ ...args });
    if (!friend || friend.deleted) {
      return EMPTY;
    }
    return friend;
  }

  @MessagePattern({ cmd: 'create' })
  async create(args: FriendCreateArgs): Promise<Friend> {
    return await this.friendService.create(args);
  }

  @MessagePattern({ cmd: 'update' })
  async update(args: FriendUpdateArgs): Promise<Friend> {
    return await this.friendService.update(args);
  }

  @MessagePattern({ cmd: 'delete' })
  async delete(args: FriendDeleteArgs): Promise<boolean> {
    try {
      await this.friendService.delete(args);
      return true;
    } catch (error) {
      if (!this.configService.isProduction && error instanceof Error) {
        throw new RpcException(error.message);
      }
      return false;
    }
  }
}
