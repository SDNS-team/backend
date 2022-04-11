import { Field, ID, ObjectType } from '@nestjs/graphql';
import { AuthProviderEnum } from '.';

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  deleted!: boolean;

  @Field(() => String, { nullable: true })
  name!: string | null;

  @Field(() => AuthProviderEnum, { nullable: true })
  provider!: keyof typeof AuthProviderEnum | null;

  @Field(() => String, { nullable: false })
  email!: string;
}
