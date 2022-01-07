import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FriendResolver } from './friend.resolver';
import { FriendService } from './friend.service';

@Module({
  imports: [PrismaModule],
  providers: [FriendService, FriendResolver],
})
export class FriendModule {}
