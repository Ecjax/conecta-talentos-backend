import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { EmpresasModule } from './empresas/empresas.module';
import { OfertasLaboralesModule } from './ofertas_laborales/ofertas_laborales.module';

@Module({
  imports: [EstudiantesModule, EmpresasModule, OfertasLaboralesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
