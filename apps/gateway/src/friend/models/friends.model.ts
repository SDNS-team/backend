import { Field, ObjectType } from '@nestjs/graphql';
import { Friend } from '.';

@ObjectType()
export class Friends {
  @Field(_type => [Friend], { nullable: false })
  data: Friend[];
}
