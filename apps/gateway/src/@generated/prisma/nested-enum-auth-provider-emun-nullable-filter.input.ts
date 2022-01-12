import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthProviderEmun } from './auth-provider-emun.enum';

@InputType()
export class NestedEnumAuthProviderEmunNullableFilter {

    @Field(() => AuthProviderEmun, {nullable:true})
    equals?: keyof typeof AuthProviderEmun;

    @Field(() => [AuthProviderEmun], {nullable:true})
    in?: Array<keyof typeof AuthProviderEmun>;

    @Field(() => [AuthProviderEmun], {nullable:true})
    notIn?: Array<keyof typeof AuthProviderEmun>;

    @Field(() => NestedEnumAuthProviderEmunNullableFilter, {nullable:true})
    not?: NestedEnumAuthProviderEmunNullableFilter;
}
