import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FriendService {
  constructor(private prisma: PrismaService) {}

  update = this.prisma.friend.update;
  delete = this.prisma.friend.delete;
  findUnique = this.prisma.friend.findUnique;
  findMany = this.prisma.friend.findMany;
  count = this.prisma.friend.count;
  create = this.prisma.friend.create;
}
