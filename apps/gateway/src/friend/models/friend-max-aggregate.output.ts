import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FriendMaxAggregate {
  @Field(_type => String, { nullable: true })
  id?: string;

  @Field(_type => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(_type => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(_type => Boolean, { nullable: true })
  deleted?: boolean;

  @Field(_type => String, { nullable: true })
  name?: string;

  @Field(_type => Date, { nullable: true })
  birthday?: Date | string;

  @Field(_type => String, { nullable: true })
  description?: string;
}
