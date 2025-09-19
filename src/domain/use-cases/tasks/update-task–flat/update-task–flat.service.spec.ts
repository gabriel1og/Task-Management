import { Test, TestingModule } from '@nestjs/testing';
import { UpdateTask–flatService } from './update-task–flat.service';

describe('UpdateTask–flatService', () => {
  let service: UpdateTask–flatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateTask–flatService],
    }).compile();

    service = module.get<UpdateTask–flatService>(UpdateTask–flatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
