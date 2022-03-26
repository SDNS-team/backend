import { ArgsType, Field, Int } from '@nestjs/graphql';
import { FriendOrderByWithRelationInput } from './friend-order-by-with-relation.input';
import { FriendScalarFieldEnum } from './friend-scalar-field.enum';
import { FriendWhereUniqueInput } from './friend-where-unique.input';
import { FriendWhereInput } from './friend-where.input';

@ArgsType()
export class FindManyFriendArgs {
  @Field(_type => FriendWhereInput, { nullable: true })
  where?: FriendWhereInput;

  @Field(_type => [FriendOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<FriendOrderByWithRelationInput>;

  @Field(_type => FriendWhereUniqueInput, { nullable: true })
  cursor?: FriendWhereUniqueInput;

  @Field(_type => Int, { nullable: true })
  take?: number;

  @Field(_type => Int, { nullable: true })
  skip?: number;

  @Field(_type => [FriendScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof FriendScalarFieldEnum>;
}
