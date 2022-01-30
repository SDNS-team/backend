import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Friend {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  deleted!: boolean;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Date, { nullable: false })
  birthday!: Date;

  @Field(() => String, { nullable: true })
  description!: string | null;
}

@ObjectType()
export class FriendResponse {
  @Field(() => [Friend], { nullable: true })
  values: Friend[];
}
