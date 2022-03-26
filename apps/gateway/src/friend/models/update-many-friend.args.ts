import { ArgsType, Field } from '@nestjs/graphql';
import { FriendUpdateManyMutationInput } from './friend-update-many-mutation.input';
import { FriendWhereInput } from './friend-where.input';

@ArgsType()
export class UpdateManyFriendArgs {
  @Field(_type => FriendUpdateManyMutationInput, { nullable: false })
  data!: FriendUpdateManyMutationInput;

  @Field(_type => FriendWhereInput, { nullable: true })
  where?: FriendWhereInput;
}
