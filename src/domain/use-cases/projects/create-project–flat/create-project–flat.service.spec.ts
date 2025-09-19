import { Test, TestingModule } from '@nestjs/testing';
import { CreateProject–flatService } from './create-project–flat.service';

describe('CreateProject–flatService', () => {
  let service: CreateProject–flatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateProject–flatService],
    }).compile();

    service = module.get<CreateProject–flatService>(CreateProject–flatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
