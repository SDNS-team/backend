import { FindFirstUserArgs } from '@models/user/find-first-user.args';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  it('findFirst', async () => {
    const query: FindFirstUserArgs = {
      where: {
        name: {
          equals: 'test',
        },
      },
    };
    // TODO: не понял как тип указать
    const result: any = {
      id: 'id',
      name: 'test',
    };

    jest.spyOn(userService, 'findFirst').mockImplementation(() => result);

    expect(await userService.findFirst(query)).toBe(result);
  });
});
