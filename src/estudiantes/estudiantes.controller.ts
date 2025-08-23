import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query, forwardRef, Inject } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { Response } from 'express';

@Controller('estudiantes')
export class EstudiantesController {
  constructor (private readonly estudiantesService: EstudiantesService) {}
  
    // Crear Estudiante

  @Post()
  create(@Body() createEstudianteDto: CreateEstudianteDto, @Res() response: Response) {
    const estudiante = this.estudiantesService.create(createEstudianteDto);
    if(estudiante){
      response.status(201).send(estudiante);
    }else{
      response.status(404).send('Estudiante ya existe');
    }
  }
    //return this.estudiantesService.create(createEstudianteDto);

    // Obtener todos los Estudiantes (optativo por nombre)

  @ApiQuery({ name: 'nombre', required: false })
  @Get()
  findAll(@Query ('nombre') nombre: string, @Res() response: Response){
    const encontrados = this.estudiantesService.findAll(nombre);
    if (encontrados) {
      response.status(200).send(encontrados);
    } else {
      response.status(404).send('No encontrado');
    }
  }
   // Obtener Estuadiante por ID
   
  @ApiResponse({ status: 200, description: 'Estudiante obtenido' })
  @ApiResponse({ status: 404, description: 'Estudiante no existe' })
  @Get(':id')
  findOne(@Param('id') id: string, @Res() response: Response) {
    const encontrado = this.estudiantesService.findOne(+id);
    if (encontrado) {
      response.status(200).send(encontrado);
    } else {
      response.status(404).send('Estudiante no existe');
    }
  }

  // Modificar Estuadiante

  @ApiResponse({ status: 200, description: 'Estudiante actualizado' })
  @ApiResponse({ status: 404, description: 'Estudiante no existe' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstudianteDto: UpdateEstudianteDto, @Res() response: Response,) {
    const encontrado = this.estudiantesService.update(+id, updateEstudianteDto);
    if(encontrado){
        response.status(200).send(encontrado);
    } else {
      response.status(404).send('Estudiante no existe');
    }
  }

   // Eliminar Estuadiante
  @ApiResponse({ status: 200, description: 'Estudiante eliminado' })
  @ApiResponse({ status: 404, description: 'Estudiante no existe' })
  @Delete(':id')
  remove(@Param('id') id: string, @Res() response: Response) {
    const encontrado = this.estudiantesService.remove(+id);
    if (encontrado) {
      response.status(200).send('Estudiante eliminado');
    } else {
      response.status(404).send('Estudiante no existe');
    }
  }
}
