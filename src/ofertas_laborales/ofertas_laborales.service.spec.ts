import { Test, TestingModule } from '@nestjs/testing';
import { OfertasLaboralesService } from './ofertas_laborales.service';

describe('OfertasLaboralesService', () => {
  let service: OfertasLaboralesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfertasLaboralesService],
    }).compile();

    service = module.get<OfertasLaboralesService>(OfertasLaboralesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
