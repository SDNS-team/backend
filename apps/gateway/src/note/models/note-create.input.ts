import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NoteCreateInput {
  @Field(_type => String, { nullable: false })
  friendId!: string;

  @Field(_type => String, { nullable: false })
  description: string;
}
