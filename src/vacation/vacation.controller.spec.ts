import { Test, TestingModule } from '@nestjs/testing';
import { VacationController } from './vacation.controller';

describe('Vacation Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [VacationController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: VacationController = module.get<VacationController>(VacationController);
    expect(controller).toBeDefined();
  });
});
