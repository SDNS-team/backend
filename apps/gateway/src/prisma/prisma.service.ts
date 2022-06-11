import { INestApplication, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

const FIND_PRISMA_ACTIONS: Prisma.PrismaAction[] = ['findUnique', 'findMany', 'findFirst'];

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super();
  }

  async onModuleInit() {
    this.$use(async (params, next) => {
      if (params.action == 'delete') {
        params.action = 'update';
        params.args['data'] = { deleted: true };
      }
      return next(params);
    });
    this.$use(async (params, next) => {
      if (FIND_PRISMA_ACTIONS.includes(params.action)) {
        if (params.args.where && params.args.where['deleted'] === undefined) {
          params.args.where['deleted'] = false;
        }
      }
      return next(params);
    });
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
