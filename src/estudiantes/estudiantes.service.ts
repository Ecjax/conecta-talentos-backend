import { Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from 'src/models/estudiante';

@Injectable()
export class EstudiantesService {

  estudiante: Estudiante [] = [];

  create(createEstudianteDto: CreateEstudianteDto): any {
    const new Estudiante: Estudiante[];
    this.estudiante.id = this.estudiante.length+1;
    this.estudiante.push(this.estudiante[]);
  } 
 }

  findAll() {
    return this.estudiante;
  }

  findOne(id: number) {
    return `This action returns a #${id} estudiante`;
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    return `This action updates a #${id} estudiante`;
  }

  remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }
}
