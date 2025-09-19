import { Test, TestingModule } from '@nestjs/testing';
import { CreateUser–flatService } from './create-user–flat.service';

describe('CreateUser–flatService', () => {
  let service: CreateUser–flatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateUser–flatService],
    }).compile();

    service = module.get<CreateUser–flatService>(CreateUser–flatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
