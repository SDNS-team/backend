import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deleted = "deleted",
    name = "name",
    provider = "provider",
    providerId = "providerId",
    email = "email",
    refreshToken = "refreshToken"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
