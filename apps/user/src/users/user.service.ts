import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  findMany = this.prisma.user.findMany;
  findFirst = this.prisma.user.findFirst;
  create = this.prisma.user.create;
  update = this.prisma.user.update;
}
