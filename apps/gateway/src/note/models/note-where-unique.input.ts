import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NoteWhereUniqueInput {
  @Field(_type => String, { nullable: true })
  id?: string;
}
