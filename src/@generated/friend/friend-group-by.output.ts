import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FriendCountAggregate } from './friend-count-aggregate.output';
import { FriendMinAggregate } from './friend-min-aggregate.output';
import { FriendMaxAggregate } from './friend-max-aggregate.output';

@ObjectType()
export class FriendGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Boolean, {nullable:false})
    deleted!: boolean;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    birthday!: Date | string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => FriendCountAggregate, {nullable:true})
    _count?: FriendCountAggregate;

    @Field(() => FriendMinAggregate, {nullable:true})
    _min?: FriendMinAggregate;

    @Field(() => FriendMaxAggregate, {nullable:true})
    _max?: FriendMaxAggregate;
}
