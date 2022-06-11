import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NoteCreateInput {
  @Field(_type => String)
  friendId!: string;

  @Field(_type => String)
  description!: string;
}
