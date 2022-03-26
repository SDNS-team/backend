import { ArgsType, Field } from '@nestjs/graphql';
import { FriendWhereUniqueInput } from './friend-where-unique.input';

@ArgsType()
export class DeleteOneFriendArgs {
  @Field(_type => FriendWhereUniqueInput, { nullable: false })
  where!: FriendWhereUniqueInput;
}
