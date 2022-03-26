import { ArgsType, Field, Int } from '@nestjs/graphql';
import { FriendCountAggregateInput } from './friend-count-aggregate.input';
import { FriendMaxAggregateInput } from './friend-max-aggregate.input';
import { FriendMinAggregateInput } from './friend-min-aggregate.input';
import { FriendOrderByWithRelationInput } from './friend-order-by-with-relation.input';
import { FriendWhereUniqueInput } from './friend-where-unique.input';
import { FriendWhereInput } from './friend-where.input';

@ArgsType()
export class FriendAggregateArgs {
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

  @Field(_type => FriendCountAggregateInput, { nullable: true })
  _count?: FriendCountAggregateInput;

  @Field(_type => FriendMinAggregateInput, { nullable: true })
  _min?: FriendMinAggregateInput;

  @Field(_type => FriendMaxAggregateInput, { nullable: true })
  _max?: FriendMaxAggregateInput;
}
