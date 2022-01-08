import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { join } from 'path';
import { ConfigService } from './common/configs/config.service';
import { FriendModule } from './friends/friend.module';

@Module({
  imports: [
    FriendModule,
    GraphQLModule.forRoot({
      include: [FriendModule],
      debug: true,
      playground: true,
      disableHealthCheck: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      formatError: (error: GraphQLError) => {
        return {
          message: error.message,
          success: false,
          status: error.extensions?.code,
        };
      },
    }),
  ],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule {}
