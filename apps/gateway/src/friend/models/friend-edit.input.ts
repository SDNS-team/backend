import {
  DateTimeFieldUpdateOperationsInput,
  NullableStringFieldUpdateOperationsInput,
  StringFieldUpdateOperationsInput,
} from '@models/prisma';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FriendEditInput {
  @Field(_type => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(_type => DateTimeFieldUpdateOperationsInput, { nullable: true })
  birthday?: DateTimeFieldUpdateOperationsInput;

  @Field(_type => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: NullableStringFieldUpdateOperationsInput;
}
