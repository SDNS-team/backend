import { Module } from '@nestjs/common';
import { ConfigService } from '../common/configs/config.service';
import { PrismaModule } from '../prisma/prisma.module';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';

@Module({
  imports: [PrismaModule],
  controllers: [NoteController],
  providers: [NoteService, ConfigService],
})
export class NoteModule {}
