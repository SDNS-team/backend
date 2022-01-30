import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FriendCountAggregate } from './friend-count-aggregate.output';
import { FriendMinAggregate } from './friend-min-aggregate.output';
import { FriendMaxAggregate } from './friend-max-aggregate.output';

@ObjectType()
export class AggregateFriend {

    @Field(() => FriendCountAggregate, {nullable:true})
    _count?: FriendCountAggregate;

    @Field(() => FriendMinAggregate, {nullable:true})
    _min?: FriendMinAggregate;

    @Field(() => FriendMaxAggregate, {nullable:true})
    _max?: FriendMaxAggregate;
}
