import { Field, ObjectType } from '@nestjs/graphql';
import { FriendCountAggregate } from './friend-count-aggregate.output';
import { FriendMaxAggregate } from './friend-max-aggregate.output';
import { FriendMinAggregate } from './friend-min-aggregate.output';

@ObjectType()
export class AggregateFriend {
  @Field(_type => FriendCountAggregate, { nullable: true })
  _count?: FriendCountAggregate;

  @Field(_type => FriendMinAggregate, { nullable: true })
  _min?: FriendMinAggregate;

  @Field(_type => FriendMaxAggregate, { nullable: true })
  _max?: FriendMaxAggregate;
}
