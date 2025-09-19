import { Test, TestingModule } from '@nestjs/testing';
import { CreateTask–flatService } from './create-task–flat.service';

describe('CreateTask–flatService', () => {
  let service: CreateTask–flatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateTask–flatService],
    }).compile();

    service = module.get<CreateTask–flatService>(CreateTask–flatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
