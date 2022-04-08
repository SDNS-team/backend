import { ArgsType, Field } from '@nestjs/graphql';
import { FriendCreateInput } from '.';

@ArgsType()
export class FriendCreateArgs {
  @Field(_type => FriendCreateInput, { nullable: false })
  data!: FriendCreateInput;
}
