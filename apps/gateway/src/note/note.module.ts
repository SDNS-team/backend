import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { NoteResolver } from './note.resolver';
import { NoteService } from './note.service';

@Module({
  imports: [PrismaModule],
  providers: [NoteService, NoteResolver],
  exports: [NoteService],
})
export class NoteModule {}
