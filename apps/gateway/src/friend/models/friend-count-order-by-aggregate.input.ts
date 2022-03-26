import { SortOrder } from '@models/prisma/sort-order.enum';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FriendCountOrderByAggregateInput {
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
}
