import { forwardRef, Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { ConfigModule } from '../common/configs/config.module';
import { ConfigService } from '../common/configs/config.service';
import { MicroserviceName } from '../common/enums/microservice-name.enum';
import { FriendModule } from '../friend/friend.module';
import { FriendService } from '../friend/friend.service';
import { NoteResolver } from './note.resolver';
import { NoteService } from './note.service';

@Module({
  imports: [
    forwardRef(() => FriendModule), // TODO: убрать циклическую зависимость
    ClientsModule.registerAsync([
      {
        name: MicroserviceName.NOTE_PACKAGE,
        useFactory: (configService: ConfigService) => configService.noteMicroserviceOptions,
        inject: [ConfigService],
        imports: [ConfigModule],
      },
    ]),
  ],
  providers: [NoteService, NoteResolver, FriendService],
  exports: [ClientsModule, NoteService],
})
export class NoteModule {}
