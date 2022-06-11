import { Field, GraphQLISODateTime, ID, InputType } from '@nestjs/graphql';

@InputType()
export class FriendCreateInput {
  @Field(_type => ID)
  name!: string;

  @Field(_type => GraphQLISODateTime)
  birthday!: Date;

  @Field(_type => String, { nullable: true })
  description?: string;
}
