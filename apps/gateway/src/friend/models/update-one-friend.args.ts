import { ArgsType, Field } from '@nestjs/graphql';
import { FriendUpdateInput } from './friend-update.input';
import { FriendWhereUniqueInput } from './friend-where-unique.input';

@ArgsType()
export class UpdateOneFriendArgs {
  @Field(_type => FriendUpdateInput, { nullable: false })
  data!: FriendUpdateInput;

  @Field(_type => FriendWhereUniqueInput, { nullable: false })
  where!: FriendWhereUniqueInput;
}
