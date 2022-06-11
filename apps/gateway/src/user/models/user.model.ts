import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String)
  uid!: string;

  @Field(() => String, { nullable: true })
  email!: string | null;

  @Field(() => Boolean)
  emailVerified!: boolean;

  @Field(() => String, { nullable: true })
  displayName!: string | null;

  @Field(() => String, { nullable: true })
  photoURL!: string | null;

  @Field(() => String, { nullable: true })
  phoneNumber!: string | null;
}
