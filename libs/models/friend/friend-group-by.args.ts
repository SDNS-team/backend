import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendWhereInput } from './friend-where.input';
import { FriendOrderByWithAggregationInput } from './friend-order-by-with-aggregation.input';
import { FriendScalarFieldEnum } from './friend-scalar-field.enum';
import { FriendScalarWhereWithAggregatesInput } from './friend-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FriendCountAggregateInput } from './friend-count-aggregate.input';
import { FriendMinAggregateInput } from './friend-min-aggregate.input';
import { FriendMaxAggregateInput } from './friend-max-aggregate.input';

@ArgsType()
export class FriendGroupByArgs {

    @Field(() => FriendWhereInput, {nullable:true})
    where?: FriendWhereInput;

    @Field(() => [FriendOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FriendOrderByWithAggregationInput>;

    @Field(() => [FriendScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FriendScalarFieldEnum>;

    @Field(() => FriendScalarWhereWithAggregatesInput, {nullable:true})
    having?: FriendScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FriendCountAggregateInput, {nullable:true})
    _count?: FriendCountAggregateInput;

    @Field(() => FriendMinAggregateInput, {nullable:true})
    _min?: FriendMinAggregateInput;

    @Field(() => FriendMaxAggregateInput, {nullable:true})
    _max?: FriendMaxAggregateInput;
}
