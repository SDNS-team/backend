import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FriendCreateManyInput {
  @Field(_type => String, { nullable: true })
  id?: string;

  @Field(_type => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(_type => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(_type => Boolean, { nullable: true })
  deleted?: boolean;

  @Field(_type => String, { nullable: false })
  name!: string;

  @Field(_type => Date, { nullable: false })
  birthday!: Date | string;

  @Field(_type => String, { nullable: true })
  description?: string;
}
