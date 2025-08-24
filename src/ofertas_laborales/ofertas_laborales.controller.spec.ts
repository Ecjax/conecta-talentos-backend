import { Test, TestingModule } from '@nestjs/testing';
import { OfertasLaboralesController } from './ofertas_laborales.controller';
import { OfertasLaboralesService } from './ofertas_laborales.service';

describe('OfertasLaboralesController', () => {
  let controller: OfertasLaboralesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfertasLaboralesController],
      providers: [OfertasLaboralesService],
    }).compile();

    controller = module.get<OfertasLaboralesController>(OfertasLaboralesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

