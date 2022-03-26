import { ArgsType, Field } from '@nestjs/graphql';
import { FriendCreateInput } from './friend-create.input';
import { FriendUpdateInput } from './friend-update.input';
import { FriendWhereUniqueInput } from './friend-where-unique.input';

@ArgsType()
export class UpsertOneFriendArgs {
  @Field(_type => FriendWhereUniqueInput, { nullable: false })
  where!: FriendWhereUniqueInput;

  @Field(_type => FriendCreateInput, { nullable: false })
  create!: FriendCreateInput;

  @Field(_type => FriendUpdateInput, { nullable: false })
  update!: FriendUpdateInput;
}
