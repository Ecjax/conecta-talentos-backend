import { Module } from '@nestjs/common';
import { OfertasLaboralesService } from './ofertas_laborales.service';
import { OfertasLaboralesController } from './ofertas_laborales.controller';

@Module({
  controllers: [OfertasLaboralesController],
  providers: [OfertasLaboralesService],
})
export class OfertasLaboralesModule {}
