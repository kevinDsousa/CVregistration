import { Test, TestingModule } from '@nestjs/testing';
import { CurriculoController } from './curriculo.controller';
import { CurriculoService } from './curriculo.service';

describe('CurriculoController', () => {
  let controller: CurriculoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurriculoController],
      providers: [CurriculoService],
    }).compile();

    controller = module.get<CurriculoController>(CurriculoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
