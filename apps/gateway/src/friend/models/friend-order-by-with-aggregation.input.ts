import { SortOrder } from '@models/prisma/sort-order.enum';
import { Field, InputType } from '@nestjs/graphql';
import { FriendCountOrderByAggregateInput } from './friend-count-order-by-aggregate.input';
import { FriendMaxOrderByAggregateInput } from './friend-max-order-by-aggregate.input';
import { FriendMinOrderByAggregateInput } from './friend-min-order-by-aggregate.input';

@InputType()
export class FriendOrderByWithAggregationInput {
  @Field(_type => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(_type => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(_type => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(_type => SortOrder, { nullable: true })
  deleted?: keyof typeof SortOrder;

  @Field(_type => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(_type => SortOrder, { nullable: true })
  birthday?: keyof typeof SortOrder;

  @Field(_type => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;

  @Field(_type => FriendCountOrderByAggregateInput, { nullable: true })
  _count?: FriendCountOrderByAggregateInput;

  @Field(_type => FriendMaxOrderByAggregateInput, { nullable: true })
  _max?: FriendMaxOrderByAggregateInput;

  @Field(_type => FriendMinOrderByAggregateInput, { nullable: true })
  _min?: FriendMinOrderByAggregateInput;
}
