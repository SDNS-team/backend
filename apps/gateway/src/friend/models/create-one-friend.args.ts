import { ArgsType, Field } from '@nestjs/graphql';
import { FriendCreateInput } from './friend-create.input';

@ArgsType()
export class CreateOneFriendArgs {
  @Field(_type => FriendCreateInput, { nullable: false })
  data!: FriendCreateInput;
}
