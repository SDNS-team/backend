import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthProviderEmun } from './auth-provider-emun.enum';

@InputType()
export class NullableEnumAuthProviderEmunFieldUpdateOperationsInput {

    @Field(() => AuthProviderEmun, {nullable:true})
    set?: keyof typeof AuthProviderEmun;
}
