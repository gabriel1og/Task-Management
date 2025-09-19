import { Test, TestingModule } from '@nestjs/testing';
import { GetProjectById–flatService } from './get-project-by-id–flat.service';

describe('GetProjectById–flatService', () => {
  let service: GetProjectById–flatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetProjectById–flatService],
    }).compile();

    service = module.get<GetProjectById–flatService>(GetProjectById–flatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
