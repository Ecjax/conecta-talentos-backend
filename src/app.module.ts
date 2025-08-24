import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { EmpresasModule } from './empresas/empresas.module';

@Module({
  imports: [EstudiantesModule, EmpresasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
