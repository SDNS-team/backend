import { ArgsType, Field } from '@nestjs/graphql';
import { FriendWhereUniqueInput } from '.';

@ArgsType()
export class FriendRemoveArgs {
  @Field(_type => FriendWhereUniqueInput, { nullable: false })
  where!: FriendWhereUniqueInput;
}
