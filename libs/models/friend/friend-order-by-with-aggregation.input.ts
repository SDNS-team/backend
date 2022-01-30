import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FriendCountOrderByAggregateInput } from './friend-count-order-by-aggregate.input';
import { FriendMaxOrderByAggregateInput } from './friend-max-order-by-aggregate.input';
import { FriendMinOrderByAggregateInput } from './friend-min-order-by-aggregate.input';

@InputType()
export class FriendOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    birthday?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => FriendCountOrderByAggregateInput, {nullable:true})
    _count?: FriendCountOrderByAggregateInput;

    @Field(() => FriendMaxOrderByAggregateInput, {nullable:true})
    _max?: FriendMaxOrderByAggregateInput;

    @Field(() => FriendMinOrderByAggregateInput, {nullable:true})
    _min?: FriendMinOrderByAggregateInput;
}
