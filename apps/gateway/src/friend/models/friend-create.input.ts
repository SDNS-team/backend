import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FriendCreateInput {
  @Field(_type => String, { nullable: false })
  name!: string;

  @Field(_type => Date, { nullable: false })
  birthday!: Date;

  @Field(_type => String, { nullable: true })
  description?: string;

  @Field(_type => String, { nullable: false })
  userId!: string;
}
