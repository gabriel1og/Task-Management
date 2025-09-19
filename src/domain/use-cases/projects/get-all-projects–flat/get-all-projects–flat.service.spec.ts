import { Test, TestingModule } from '@nestjs/testing';
import { GetAllProjects–flatService } from './get-all-projects–flat.service';

describe('GetAllProjects–flatService', () => {
  let service: GetAllProjects–flatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAllProjects–flatService],
    }).compile();

    service = module.get<GetAllProjects–flatService>(GetAllProjects–flatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
