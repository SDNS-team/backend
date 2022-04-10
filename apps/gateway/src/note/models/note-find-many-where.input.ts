import { DateTimeFilter, StringFilter } from '@models/prisma';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NoteFindManyWhereInput {
  @Field(_type => [NoteFindManyWhereInput], { nullable: true })
  AND?: Array<NoteFindManyWhereInput>;

  @Field(_type => [NoteFindManyWhereInput], { nullable: true })
  OR?: Array<NoteFindManyWhereInput>;

  @Field(_type => [NoteFindManyWhereInput], { nullable: true })
  NOT?: Array<NoteFindManyWhereInput>;

  @Field(_type => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  friendId?: StringFilter;
}
