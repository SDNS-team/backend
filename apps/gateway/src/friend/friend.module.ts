import { Module } from '@nestjs/common';
import { NoteService } from '../note/note.service';
import { PrismaModule } from '../prisma/prisma.module';
import { FriendResolver } from './friend.resolver';
import { FriendService } from './friend.service';

@Module({
  imports: [PrismaModule],
  providers: [FriendService, FriendResolver, NoteService],
  exports: [FriendService],
})
export class FriendModule {}
