import { Type } from 'class-transformer';

// TODO: вынести в общий класс id, createdAt, updatedAt, deleted. C friend также
export class NoteDto {
  id: string;

  @Type(_is => Date)
  createdAt: Date;

  @Type(_is => Date)
  updatedAt: Date;

  deleted: boolean;

  friendId: string;

  description: string;
}
