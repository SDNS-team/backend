import { ArgsType, Field, Int } from '@nestjs/graphql';
import { FriendCountAggregateInput } from './friend-count-aggregate.input';
import { FriendMaxAggregateInput } from './friend-max-aggregate.input';
import { FriendMinAggregateInput } from './friend-min-aggregate.input';
import { FriendOrderByWithAggregationInput } from './friend-order-by-with-aggregation.input';
import { FriendScalarFieldEnum } from './friend-scalar-field.enum';
import { FriendScalarWhereWithAggregatesInput } from './friend-scalar-where-with-aggregates.input';
import { FriendWhereInput } from './friend-where.input';

@ArgsType()
export class FriendGroupByArgs {
  @Field(_type => FriendWhereInput, { nullable: true })
  where?: FriendWhereInput;

  @Field(_type => [FriendOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<FriendOrderByWithAggregationInput>;

  @Field(_type => [FriendScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof FriendScalarFieldEnum>;

  @Field(_type => FriendScalarWhereWithAggregatesInput, { nullable: true })
  having?: FriendScalarWhereWithAggregatesInput;

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
