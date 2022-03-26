import {
  BoolFieldUpdateOperationsInput,
  DateTimeFieldUpdateOperationsInput,
  NullableStringFieldUpdateOperationsInput,
  StringFieldUpdateOperationsInput,
} from '@models/prisma';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FriendUncheckedUpdateInput {
  @Field(_type => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(_type => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(_type => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(_type => BoolFieldUpdateOperationsInput, { nullable: true })
  deleted?: BoolFieldUpdateOperationsInput;

  @Field(_type => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(_type => DateTimeFieldUpdateOperationsInput, { nullable: true })
  birthday?: DateTimeFieldUpdateOperationsInput;

  @Field(_type => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: NullableStringFieldUpdateOperationsInput;
}
