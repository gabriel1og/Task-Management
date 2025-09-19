import { Test, TestingModule } from '@nestjs/testing';
import { GetTaskById–flatService } from './get-task-by-id–flat.service';

describe('GetTaskById–flatService', () => {
  let service: GetTaskById–flatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetTaskById–flatService],
    }).compile();

    service = module.get<GetTaskById–flatService>(GetTaskById–flatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
