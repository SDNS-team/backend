import {
  BoolWithAggregatesFilter,
  DateTimeWithAggregatesFilter,
  StringNullableWithAggregatesFilter,
  StringWithAggregatesFilter,
} from '@models/prisma';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FriendScalarWhereWithAggregatesInput {
  @Field(() => [FriendScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<FriendScalarWhereWithAggregatesInput>;

  @Field(() => [FriendScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<FriendScalarWhereWithAggregatesInput>;

  @Field(() => [FriendScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<FriendScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  deleted?: BoolWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  birthday?: DateTimeWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  description?: StringNullableWithAggregatesFilter;
}
