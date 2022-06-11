import { Injectable, NotFoundException } from '@nestjs/common';
import { Friend } from '@prisma/client';
import { UserSession } from '../common/interfaces/user-session.interface';
import { PrismaService } from '../prisma/prisma.service';
import { FriendCreateArgs, FriendEditArgs, FriendFindManyArgs, FriendRemoveArgs } from './models';

@Injectable()
export class FriendService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany({ where, take, skip, orderBy }: FriendFindManyArgs, session: UserSession): Promise<Friend[]> {
    return this.prisma.friend.findMany({
      where: {
        ...where,
        userId: session.uid,
      },
      take,
      skip,
      orderBy: {
        createdAt: orderBy,
      },
    });
  }

  async create(args: FriendCreateArgs, session: UserSession): Promise<Friend> {
    return this.prisma.friend.create({
      data: {
        ...args,
        userId: session.uid,
      },
    });
  }

  async edit(args: FriendEditArgs, session: UserSession): Promise<Friend> {
    const friend = await this.prisma.friend.findFirst({
      where: {
        ...args.where,
        userId: session.uid,
      },
    });

    if (!friend) {
      throw new NotFoundException('Friend Not Found');
    }

    return this.prisma.friend.update(args);
  }

  async remove(args: FriendRemoveArgs, session: UserSession): Promise<boolean> {
    const friend = await this.prisma.friend.findFirst({
      where: {
        ...args.where,
        userId: session.uid,
      },
    });

    if (!friend) {
      throw new NotFoundException('Friend Not Found');
    }

    await this.prisma.friend.delete(args);
    return true;
  }
}
