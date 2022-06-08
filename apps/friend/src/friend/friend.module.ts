import { Module } from '@nestjs/common';
import { ConfigService } from '../common/configs/config.service';
import { PrismaModule } from '../prisma/prisma.module';
import { FriendController } from './friend.controller';
import { FriendService } from './friend.service';

@Module({
  imports: [PrismaModule],
  controllers: [FriendController],
  providers: [FriendService, ConfigService],
})
export class FriendModule {}
