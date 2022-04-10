import { ArgsType, Field } from '@nestjs/graphql';
import { NoteWhereUniqueInput } from '.';

@ArgsType()
export class NoteRemoveArgs {
  @Field(_type => NoteWhereUniqueInput, { nullable: false })
  where!: NoteWhereUniqueInput;
}
