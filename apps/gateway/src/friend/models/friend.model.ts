import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Note } from '../../note/models';

@ObjectType()
export class Friend {
  @Field(_type => ID, { nullable: false })
  id!: string;

  @Field(_type => Date, { nullable: false })
  createdAt!: Date;

  @Field(_type => Date, { nullable: false })
  updatedAt!: Date;

  @Field(_type => Boolean, { nullable: false, defaultValue: false })
  deleted!: boolean;

  @Field(_type => String, { nullable: false })
  name!: string;

  @Field(_type => Date, { nullable: false })
  birthday!: Date;

  @Field(_type => String, { nullable: true })
  description!: string | null;

  @Field(_type => [Note], { nullable: true })
  notes!: Note[] | null;
}
