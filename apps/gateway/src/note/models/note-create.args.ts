import { ArgsType, Field } from '@nestjs/graphql';
import { NoteCreateInput } from '.';

@ArgsType()
export class NoteCreateArgs {
  @Field(_type => NoteCreateInput)
  data!: NoteCreateInput;
}
