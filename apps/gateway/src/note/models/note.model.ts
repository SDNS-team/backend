import { Field, ID, ObjectType } from '@nestjs/graphql';

// TODO: вынести в общий класс id, createdAt, updatedAt, deleted. C friend также
@ObjectType()
export class Note {
  @Field(_type => ID, { nullable: false })
  id!: string;

  @Field(_type => Date, { nullable: false })
  createdAt!: Date;

  @Field(_type => Date, { nullable: false })
  updatedAt!: Date;

  @Field(_type => Boolean, { nullable: false, defaultValue: false })
  deleted!: boolean;

  @Field(_type => String, { nullable: false })
  friendId!: string;

  @Field(_type => String, { nullable: false })
  description!: string;
}
