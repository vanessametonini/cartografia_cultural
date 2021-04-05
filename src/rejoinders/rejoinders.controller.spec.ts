import { Test, TestingModule } from '@nestjs/testing';
import { RejoindersController } from './rejoinders.controller';
import { RejoindersService } from './rejoinders.service';

describe('RejoindersController', () => {
  let controller: RejoindersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RejoindersController],
      providers: [RejoindersService],
    }).compile();

    controller = module.get<RejoindersController>(RejoindersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
