import { ArgsType, Field } from '@nestjs/graphql';
import { FriendCreateManyInput } from './friend-create-many.input';

@ArgsType()
export class CreateManyFriendArgs {
  @Field(_type => [FriendCreateManyInput], { nullable: false })
  data!: Array<FriendCreateManyInput>;

  @Field(_type => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
