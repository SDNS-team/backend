import { ArgsType, Field } from '@nestjs/graphql';
import { FriendWhereUniqueInput } from './friend-where-unique.input';

@ArgsType()
export class FindUniqueFriendArgs {
  @Field(_type => FriendWhereUniqueInput, { nullable: false })
  where!: FriendWhereUniqueInput;
}
