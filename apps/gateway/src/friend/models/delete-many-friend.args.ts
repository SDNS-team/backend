import { ArgsType, Field } from '@nestjs/graphql';
import { FriendWhereInput } from './friend-where.input';

@ArgsType()
export class DeleteManyFriendArgs {
  @Field(_type => FriendWhereInput, { nullable: true })
  where?: FriendWhereInput;
}
