import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FriendService {
  constructor(private prisma: PrismaService) {}

  update = this.prisma.friend.update;
  delete = this.prisma.friend.delete;
  findUnique = this.prisma.friend.findUnique;
  findMany = this.prisma.friend.findMany;
  findFirst = this.prisma.friend.findFirst;
  count = this.prisma.friend.count;
  create = this.prisma.friend.create;
}
