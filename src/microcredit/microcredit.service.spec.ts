import { Test, TestingModule } from '@nestjs/testing';
import { MicrocreditService } from './microcredit.service';

describe('MicrocreditService', () => {
  let service: MicrocreditService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MicrocreditService],
    }).compile();

    service = module.get<MicrocreditService>(MicrocreditService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
