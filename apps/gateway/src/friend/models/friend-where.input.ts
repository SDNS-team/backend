import { BoolFilter, DateTimeFilter, StringFilter, StringNullableFilter } from '@models/prisma';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FriendWhereInput {
  @Field(_type => [FriendWhereInput], { nullable: true })
  AND?: Array<FriendWhereInput>;

  @Field(_type => [FriendWhereInput], { nullable: true })
  OR?: Array<FriendWhereInput>;

  @Field(_type => [FriendWhereInput], { nullable: true })
  NOT?: Array<FriendWhereInput>;

  @Field(_type => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(_type => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(_type => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(_type => BoolFilter, { nullable: true })
  deleted?: BoolFilter;

  @Field(_type => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(_type => DateTimeFilter, { nullable: true })
  birthday?: DateTimeFilter;

  @Field(_type => StringNullableFilter, { nullable: true })
  description?: StringNullableFilter;
}
