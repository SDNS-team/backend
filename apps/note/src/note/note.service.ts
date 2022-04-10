import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NoteService {
  constructor(private readonly prisma: PrismaService) {}

  findFirst = this.prisma.note.findFirst;
  findMany = this.prisma.note.findMany;
  create = this.prisma.note.create;
  delete = this.prisma.note.delete;
}
