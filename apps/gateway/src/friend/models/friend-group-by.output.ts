import { Field, ObjectType } from '@nestjs/graphql';
import { FriendCountAggregate } from './friend-count-aggregate.output';
import { FriendMaxAggregate } from './friend-max-aggregate.output';
import { FriendMinAggregate } from './friend-min-aggregate.output';

@ObjectType()
export class FriendGroupBy {
  @Field(_type => String, { nullable: false })
  id!: string;

  @Field(_type => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(_type => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(_type => Boolean, { nullable: false })
  deleted!: boolean;

  @Field(_type => String, { nullable: false })
  name!: string;

  @Field(_type => Date, { nullable: false })
  birthday!: Date | string;

  @Field(_type => String, { nullable: true })
  description?: string;

  @Field(_type => FriendCountAggregate, { nullable: true })
  _count?: FriendCountAggregate;

  @Field(_type => FriendMinAggregate, { nullable: true })
  _min?: FriendMinAggregate;

  @Field(_type => FriendMaxAggregate, { nullable: true })
  _max?: FriendMaxAggregate;
}
