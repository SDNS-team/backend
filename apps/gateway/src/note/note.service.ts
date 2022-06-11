import { Injectable, NotFoundException } from '@nestjs/common';
import { Note } from '@prisma/client';
import { UserSession } from '../common/interfaces/user-session.interface';
import { PrismaService } from '../prisma/prisma.service';
import { NoteCreateArgs, NoteRemoveArgs } from './models';

@Injectable()
export class NoteService {
  constructor(private readonly prisma: PrismaService) {}

  findMany = this.prisma.note.findMany;

  async create(args: NoteCreateArgs, session: UserSession): Promise<Note> {
    const friend = await this.prisma.friend.findFirst({
      where: {
        id: args.data.friendId,
        userId: session.uid,
      },
    });

    if (!friend) {
      throw new NotFoundException('Friend Not Found');
    }

    return this.prisma.note.create(args);
  }

  async remove(args: NoteRemoveArgs, session: UserSession): Promise<boolean> {
    const note = await this.prisma.note.findFirst({
      where: {
        id: args.where.id,
        friend: {
          userId: session.uid,
        },
      },
    });

    if (!note) {
      throw new NotFoundException('Note Not Found');
    }

    await this.prisma.note.delete({
      where: {
        id: note.id,
      },
    });

    return true;
  }
}
