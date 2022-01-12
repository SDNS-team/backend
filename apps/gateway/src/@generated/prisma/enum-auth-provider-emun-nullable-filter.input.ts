import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthProviderEmun } from './auth-provider-emun.enum';
import { NestedEnumAuthProviderEmunNullableFilter } from './nested-enum-auth-provider-emun-nullable-filter.input';

@InputType()
export class EnumAuthProviderEmunNullableFilter {

    @Field(() => AuthProviderEmun, {nullable:true})
    equals?: keyof typeof AuthProviderEmun;

    @Field(() => [AuthProviderEmun], {nullable:true})
    in?: Array<keyof typeof AuthProviderEmun>;

    @Field(() => [AuthProviderEmun], {nullable:true})
    notIn?: Array<keyof typeof AuthProviderEmun>;

    @Field(() => NestedEnumAuthProviderEmunNullableFilter, {nullable:true})
    not?: NestedEnumAuthProviderEmunNullableFilter;
}
