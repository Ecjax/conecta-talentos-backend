import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from './entities/estudiante.entity';
import { NotFoundError } from 'rxjs';

@Injectable()
export class EstudiantesService {
  estudiantes: Estudiante [] = [];
  email: string [] = [];

   create(createEstudianteDto: CreateEstudianteDto) {
    const encontrado = this.estudiantes.find(
      (element) => 
        element.email === createEstudianteDto.email,
    );
    if(encontrado){
      return null;
    }else{
      const estudiante: Estudiante = new Estudiante ();
      estudiante.id = this.estudiantes.length + 1;
      estudiante.nombre = createEstudianteDto.nombre;
      estudiante.apellidos = createEstudianteDto.apellidos;
      estudiante.edad = createEstudianteDto.edad;
      estudiante.profesion = createEstudianteDto.profesion;
      estudiante.email = createEstudianteDto.email;
            this.estudiantes.push(estudiante);
      return estudiante
      
    }
  } 
 
    findAll(nombre: string){ 
    let estudiantesFilter: Estudiante [] = [];
    if(!nombre){
    return this.estudiantes;
    }
    if(!nombre){
      estudiantesFilter = this.estudiantes.filter((element) =>
        element.nombre.includes(nombre),
      )
    }
    return estudiantesFilter;
  }

    findOne(id: number) {
    const encontrado = this.estudiantes.find((element) => element.id == id);
      if (encontrado){
         return encontrado;

      }else{       
        throw new NotFoundException (`Estudiante no encontrado`);
      }       
    }

    update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
      const encontrado = this.estudiantes.find((element) => element.id == id);
    if (encontrado) {
      encontrado.nombre = updateEstudianteDto.nombre;
      encontrado.apellidos = updateEstudianteDto.apellidos;
      encontrado.edad = updateEstudianteDto.edad;
      encontrado.profesion = updateEstudianteDto.profesion;
      encontrado.email = updateEstudianteDto.email;
      return encontrado;
    } else {
      return null;
    }
  }
    /*return `This action updates a #${id} estudiante`;
  }*/

    remove(id: number) {
      const encontrado = this.estudiantes.find((element) => element.id == id);
    if (encontrado) {
      const index = this.estudiantes.indexOf(encontrado);
      this.estudiantes.splice(index, 1);
      return encontrado;
    } else {
      return null;
    }
  }
    /*return `This action removes a #${id} estudiante`;
  }*/
}

  /*function findAll() {
  throw new Error('Function not implemented.');
  }*/



