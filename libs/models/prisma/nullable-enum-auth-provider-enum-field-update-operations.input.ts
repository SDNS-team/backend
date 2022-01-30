import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthProviderEnum } from './auth-provider.enum';

@InputType()
export class NullableEnumAuthProviderEnumFieldUpdateOperationsInput {

    @Field(() => AuthProviderEnum, {nullable:true})
    set?: keyof typeof AuthProviderEnum;
}
