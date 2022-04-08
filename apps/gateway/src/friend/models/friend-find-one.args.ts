import { ArgsType, Field } from '@nestjs/graphql';
import { FriendFindOneWhereInput } from '.';

@ArgsType()
export class FriendFindOneArgs {
  @Field(_type => FriendFindOneWhereInput, { nullable: true })
  where?: FriendFindOneWhereInput;
}
