import { ArgsType, Field, Int } from '@nestjs/graphql';
import { FriendFindManyWhereInput } from '.';
import { FriendOrderInput } from './friend-order.input';

@ArgsType()
export class FriendFindManyArgs {
  @Field(_type => FriendFindManyWhereInput, { nullable: true })
  where?: FriendFindManyWhereInput;

  @Field(_type => FriendOrderInput, { nullable: true })
  orderBy?: FriendOrderInput;

  @Field(_type => Int, { nullable: true })
  take?: number;

  @Field(_type => Int, { nullable: true })
  skip?: number;
}
