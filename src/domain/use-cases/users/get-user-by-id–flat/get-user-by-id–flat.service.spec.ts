import { Test, TestingModule } from '@nestjs/testing';
import { GetUserById–flatService } from './get-user-by-id–flat.service';

describe('GetUserById–flatService', () => {
  let service: GetUserById–flatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetUserById–flatService],
    }).compile();

    service = module.get<GetUserById–flatService>(GetUserById–flatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
