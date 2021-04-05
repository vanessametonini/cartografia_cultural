import { Test, TestingModule } from '@nestjs/testing';
import { RejoindersService } from './rejoinders.service';

describe('RejoindersService', () => {
  let service: RejoindersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RejoindersService],
    }).compile();

    service = module.get<RejoindersService>(RejoindersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
