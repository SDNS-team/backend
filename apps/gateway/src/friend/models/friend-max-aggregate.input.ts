import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FriendMaxAggregateInput {
  @Field(_type => Boolean, { nullable: true })
  id?: true;

  @Field(_type => Boolean, { nullable: true })
  createdAt?: true;

  @Field(_type => Boolean, { nullable: true })
  updatedAt?: true;

  @Field(_type => Boolean, { nullable: true })
  deleted?: true;

  @Field(_type => Boolean, { nullable: true })
  name?: true;

  @Field(_type => Boolean, { nullable: true })
  birthday?: true;

  @Field(_type => Boolean, { nullable: true })
  description?: true;
}
