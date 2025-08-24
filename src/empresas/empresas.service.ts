import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';

@Injectable()
export class EmpresasService {
  empresas: Empresa [] = [];
  create(createEmpresaDto: CreateEmpresaDto) {
    const encontrado = this.empresas.find(
      (element) => 
        element.nombre === createEmpresaDto.nombre,
    );
    if(encontrado){
      return null;
    }else{
      const empresa: Empresa = new Empresa ();
        empresa.id = this.empresas.length + 1;
        empresa.nombre = createEmpresaDto.nombre;
        empresa.sitioWeb = createEmpresaDto.sitioWeb;
        empresa.tipo = createEmpresaDto.tipo;
        this.empresas.push(empresa);
        return empresa
    }
  } 
  
  findAll(nombre: string) {
    let empresasFilter: Empresa [] = [];
     if(!nombre){
      return this.empresas;
      }
      if(!nombre){empresasFilter = this.empresas.filter((element) => element.nombre.includes(nombre),)
        }
      return empresasFilter;
  }

  findOne(id: number) {
    const encontrado = this.empresas.find((element) => element.id === id);
    if (encontrado){
      return encontrado;
    }else{       
      throw new NotFoundException (`Empresa no encontrada`);
    }       
  }

  remove(id: number) {
    const encontrado = this.empresas.find((element) => element.id == id);
    if (encontrado) {
      const index = this.empresas.indexOf(encontrado);
      this.empresas.splice(index, 1);
      return encontrado;
    } else {
      return null;
    }
  }
}
