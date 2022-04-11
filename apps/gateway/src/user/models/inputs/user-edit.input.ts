import { StringFieldUpdateOperationsInput } from '@models/prisma';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserEditInput {
  @Field(_type => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;
}
