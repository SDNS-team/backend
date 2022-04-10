import { Module } from '@nestjs/common';
import { ConfigService } from './common/configs/config.service';
import { NoteModule } from './note/note.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, NoteModule],
  providers: [ConfigService],
})
export class AppModule {}
