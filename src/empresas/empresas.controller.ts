import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { Response } from 'express';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('empresas')
export class EmpresasController {
  constructor(private readonly empresasService: EmpresasService) {}


    // Crear Empresa
  @Post()
  create(@Body() createEmpresaDto: CreateEmpresaDto, @Res() response: Response) {
    const empresa = this.empresasService.create(createEmpresaDto);
    if(empresa){
      response.status(201).send(empresa);
    }else{
      response.status(404).send('Empresa ya existe');
    }
  }
    //return this.empresasService.create(createEmpresaDto);

    // Obtener todos los Empresas (optativo por nombre)
    
  @ApiQuery({ name: 'nombre', required: false })
  @Get()
  findAll(@Query ('nombre') nombre: string, @Res() response: Response) {
    const encontrados = this.empresasService.findAll(nombre);
    if (encontrados) {
      response.status(200).send(encontrados);
    } else {
      response.status(404).send('No encontrado');
    }
   // return this.empresasService.findAll();
  }

   // Obtener Empresa por ID
     
  @ApiResponse({ status: 200, description: 'Empresa obtenida' })
  @ApiResponse({ status: 404, description: 'Empresa no existe' })
  @Get(':id')
  findOne(@Param('id') id: string, @Res() response: Response) {
    const encontrado = this.empresasService.findOne(+id);
    if (encontrado) {
      response.status(200).send(encontrado);
    } else {
      response.status(404).send('Empresa no existe');
    }
  }
 
    // Eliminar Empresa
  @ApiResponse({ status: 200, description: 'Estudiante eliminado' })
  @ApiResponse({ status: 404, description: 'Estudiante no existe' })
  @Delete(':id')
  remove(@Param('id') id: string, @Res() response: Response) {
     const encontrado = this.empresasService.remove(+id);
    if (encontrado) {
      response.status(200).send('Empresa eliminada');
    } else {
      response.status(404).send('Empresa no existe');
    }
  }
}
