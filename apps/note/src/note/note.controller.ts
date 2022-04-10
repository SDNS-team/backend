import { Controller, ForbiddenException } from '@nestjs/common';
import { MessagePattern, RpcException } from '@nestjs/microservices';
import { Note, Prisma } from '@prisma/client/generated/note';
import { EMPTY } from 'rxjs';
import { ConfigService } from '../common/configs/config.service';
import { NoteService } from './note.service';

import NoteFindFirstArgs = Prisma.NoteFindFirstArgs;
import NoteFindManyArgs = Prisma.NoteFindManyArgs;
import NoteCreateArgs = Prisma.NoteCreateArgs;
import NoteDeleteArgs = Prisma.NoteDeleteArgs;

@Controller('notes')
export class NoteController {
  constructor(private readonly noteService: NoteService, private readonly configService: ConfigService) {}

  @MessagePattern({ cmd: 'findMany' })
  async findMany(args: NoteFindManyArgs): Promise<Note[]> {
    return await this.noteService.findMany({
      ...args,
      where: {
        ...args.where,
        deleted: false,
      },
    });
  }

  @MessagePattern({ cmd: 'findFirst' })
  async findFirst(args: NoteFindFirstArgs): Promise<typeof EMPTY | Note> {
    try {
      const note = await this.noteService.findFirst({
        ...args,
        where: {
          ...args.where,
          deleted: false,
        },
      });
      if (!note) {
        return EMPTY;
      }
      return note;
    } catch (error) {
      if (!this.configService.isProduction && error instanceof Error) {
        throw new RpcException(error.message);
      }
      throw new RpcException(ForbiddenException);
    }
  }

  @MessagePattern({ cmd: 'create' })
  async create(args: NoteCreateArgs): Promise<Note> {
    try {
      return await this.noteService.create(args);
    } catch (error) {
      if (!this.configService.isProduction && error instanceof Error) {
        throw new RpcException(error.message);
      }
      throw new RpcException(ForbiddenException);
    }
  }

  @MessagePattern({ cmd: 'delete' })
  async delete(args: NoteDeleteArgs): Promise<boolean> {
    try {
      await this.noteService.delete(args);
      return true;
    } catch (error) {
      if (!this.configService.isProduction && error instanceof Error) {
        throw new RpcException(error.message);
      }
      return false;
    }
  }
}
