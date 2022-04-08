import { ArgsType, Field } from '@nestjs/graphql';
import { FriendEditInput, FriendWhereUniqueInput } from '.';

@ArgsType()
export class FriendEditArgs {
  @Field(_type => FriendEditInput, { nullable: false })
  data!: FriendEditInput;

  @Field(_type => FriendWhereUniqueInput, { nullable: false })
  where!: FriendWhereUniqueInput;
}
