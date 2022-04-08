import { Type } from 'class-transformer';

export class FriendDto {
  id: string;

  @Type(_is => Date)
  createdAt: Date;

  @Type(_is => Date)
  updatedAt: Date;

  deleted: boolean;

  name: string;

  @Type(_is => Date)
  birthday: Date;

  description?: string;
}
