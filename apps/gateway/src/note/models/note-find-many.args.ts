import { ArgsType, Field, Int } from '@nestjs/graphql';
import { NoteFindManyWhereInput, NoteOrderInput } from '.';

@ArgsType()
export class NoteFindManyArgs {
  @Field(_type => NoteFindManyWhereInput, { nullable: true })
  where?: NoteFindManyWhereInput;

  @Field(_type => NoteOrderInput, { nullable: true })
  orderBy?: NoteOrderInput;

  @Field(_type => Int, { nullable: true })
  take?: number;

  @Field(_type => Int, { nullable: true })
  skip?: number;
}
