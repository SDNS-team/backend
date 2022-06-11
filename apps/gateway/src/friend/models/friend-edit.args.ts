import { ArgsType, Field } from '@nestjs/graphql';
import { FriendEditInput, FriendWhereUniqueInput } from '.';

@ArgsType()
export class FriendEditArgs {
  @Field(_type => FriendEditInput)
  data!: FriendEditInput;

  @Field(_type => FriendWhereUniqueInput)
  where!: FriendWhereUniqueInput;
}
