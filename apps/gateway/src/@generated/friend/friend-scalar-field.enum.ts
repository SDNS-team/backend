import { registerEnumType } from '@nestjs/graphql';

export enum FriendScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deleted = "deleted",
    name = "name",
    birthday = "birthday",
    description = "description"
}


registerEnumType(FriendScalarFieldEnum, { name: 'FriendScalarFieldEnum', description: undefined })
