import { Test, TestingModule } from '@nestjs/testing';
import { MicrocreditController } from './microcredit.controller';
import { MicrocreditService } from './microcredit.service';

describe('MicrocreditController', () => {
  let controller: MicrocreditController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MicrocreditController],
      providers: [MicrocreditService],
    }).compile();

    controller = module.get<MicrocreditController>(MicrocreditController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
