import { Module } from '@nestjs/common';
import { ConfigService } from './common/configs/config.service';
import { FriendModule } from './friends/friend.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, FriendModule],
  providers: [ConfigService],
})
export class AppModule {}
