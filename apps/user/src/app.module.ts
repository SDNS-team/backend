import { Module } from '@nestjs/common';
import { ConfigService } from './common/configs/config.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [PrismaModule, UserModule],
  providers: [ConfigService],
})
export class AppModule {}
