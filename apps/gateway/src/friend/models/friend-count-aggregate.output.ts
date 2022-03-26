import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FriendCountAggregate {
  @Field(_type => Int, { nullable: false })
  id!: number;

  @Field(_type => Int, { nullable: false })
  createdAt!: number;

  @Field(_type => Int, { nullable: false })
  updatedAt!: number;

  @Field(_type => Int, { nullable: false })
  deleted!: number;

  @Field(_type => Int, { nullable: false })
  name!: number;

  @Field(_type => Int, { nullable: false })
  birthday!: number;

  @Field(_type => Int, { nullable: false })
  description!: number;

  @Field(_type => Int, { nullable: false })
  _all!: number;
}
