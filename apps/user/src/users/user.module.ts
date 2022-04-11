import { Module } from '@nestjs/common';
import { ConfigService } from '../common/configs/config.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, ConfigService],
})
export class UserModule {}
