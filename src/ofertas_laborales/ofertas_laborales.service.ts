import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOfertasLaboraleDto } from './dto/create-ofertas_laborale.dto';
import { UpdateOfertasLaboraleDto } from './dto/update-ofertas_laborale.dto';
import { Empresa } from 'src/empresas/entities/empresa.entity';
import { Postulacion } from 'src/models/postulacion';
import { OfertasLaborales } from './entities/ofertas_laborale.entity';

@Injectable()
export class OfertasLaboralesService {
  ofertasLaborales: OfertasLaborales [] = [];
  postulaciones: Postulacion [] = [];

  create(createOfertasLaboraleDto: CreateOfertasLaboraleDto) {
    const encontrado = this.ofertasLaborales.find(
      (element) =>
        element.cargo === createOfertasLaboraleDto.cargo,
    );
    if (encontrado) {
      return null;
    } else {
      const ofertaLaboral: OfertasLaborales = new OfertasLaborales();
      ofertaLaboral.id = this.ofertasLaborales.length + 1;
      ofertaLaboral.empresa = createOfertasLaboraleDto.empresa;
      ofertaLaboral.fechaCreacion = createOfertasLaboraleDto.fechaCreacion;
      ofertaLaboral.descripcion = createOfertasLaboraleDto.descripcion;
      ofertaLaboral.cargo = createOfertasLaboraleDto.cargo;
      ofertaLaboral.region = createOfertasLaboraleDto.region;
      ofertaLaboral.tipo = createOfertasLaboraleDto.tipo;
      ofertaLaboral.estado = createOfertasLaboraleDto.estado;
      ofertaLaboral.postulaciones = createOfertasLaboraleDto.postulaciones;
      this.ofertasLaborales.push(ofertaLaboral);
      return ofertaLaboral;
    }
  }

 findAll(empresa: string, estado?: string) {
    let ofertaLaboral: OfertasLaborales[] = [];
     if (empresa) {
      ofertaLaboral = this.ofertasLaborales.filter((element) =>
        element.cargo.includes(empresa),);
    return ofertaLaboral; `This action returns all ofertasLaborales`;
    }
    if(estado){
       ofertaLaboral = ofertaLaboral.filter(
        (elemant) => elemant.estado == estado,);
    }
    return ofertaLaboral;
  }
   
  findOne(id: number) {
    const encontrado = this.ofertasLaborales.find((element) => element.id === id);
      if (encontrado){
       return encontrado;
      }else{       
       throw new NotFoundException (`Oferta Laboral no encontrada`);
      } 
  }

  update(id: number, updateOfertasLaboraleDto: UpdateOfertasLaboraleDto) {
      const encontrado = this.ofertasLaborales.find((element) => element.id == id);
    if (encontrado) {
      encontrado.estado = updateOfertasLaboraleDto.estado;
     return encontrado;
    } else {
      return null;
    }
  }
    
  remove(id: number) {
    const encontrado = this.ofertasLaborales.find((element) => element.id === id);
    if (encontrado) {
      const index = this.ofertasLaborales.indexOf(encontrado);
      this.ofertasLaborales.splice(index, 1);
      return encontrado;
    } else {
      return null;
    }
  }
}

