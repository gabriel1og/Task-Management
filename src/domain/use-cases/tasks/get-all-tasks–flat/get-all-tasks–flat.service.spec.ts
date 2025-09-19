import { Test, TestingModule } from '@nestjs/testing';
import { GetAllTasks–flatService } from './get-all-tasks–flat.service';

describe('GetAllTasks–flatService', () => {
  let service: GetAllTasks–flatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAllTasks–flatService],
    }).compile();

    service = module.get<GetAllTasks–flatService>(GetAllTasks–flatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
