import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { ConfigService } from './common/configs/config.service';
import { FriendModule } from './friend/friend.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AuthModule,
    FriendModule,
    UserModule,
    GraphQLModule.forRoot({
      include: [FriendModule, UserModule, AuthModule],
      debug: true,
      playground: true,
      disableHealthCheck: true,
      autoSchemaFile: join(__dirname, 'src/schema.gql'),
      formatError: (error: GraphQLError) => {
        return {
          message: error.message,
          success: false,
          status: error.extensions?.code,
        };
      },
    }),
  ],
  providers: [ConfigService],
})
export class AppModule {}
