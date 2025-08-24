import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query } from '@nestjs/common';
import { OfertasLaboralesService } from './ofertas_laborales.service';
import { CreateOfertasLaboraleDto } from './dto/create-ofertas_laborale.dto';
import { UpdateOfertasLaboraleDto } from './dto/update-ofertas_laborale.dto';
import { Response } from 'express';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { tipoEmpresaEnum } from 'src/empresas/enum/empresaEnum';

@Controller('ofertas-laborales')
export class OfertasLaboralesController {
  constructor(private readonly ofertasLaboralesService: OfertasLaboralesService) {}

  // Crear Oferta Laboral
  @Post()
  create(@Body() createOfertasLaboraleDto: CreateOfertasLaboraleDto, @Res() response: Response) {
    const ofertaLaboral = this.ofertasLaboralesService.create(createOfertasLaboraleDto);
    if(ofertaLaboral){
       response.status(201).send(ofertaLaboral);
    }else{
      response.status(404).send('Oferta laboral ya existe');
    }
   // return this.ofertasLaboralesService.create(createOfertasLaboraleDto);
  }

    // Obtener todos las Ofertas Laborales (optativo por empresa y por estado)
      
  @ApiQuery({ name: 'estado', enum: tipoEmpresaEnum, required: false })
  @ApiQuery({ name: 'empresa', required: false })
  @Get()
  findAll(@Query ('estado') estado: string, @Query ('empresa') empresa: string, @Res() response: Response) {
    const encontrados = this.ofertasLaboralesService.findAll(empresa);
    if (encontrados) {
      response.status(200).send(encontrados);
    } else {
      response.status(404).send('No encontrado');
    }
  }

  // Obtener Oferta Laboral por ID
  @ApiResponse({ status: 200, description: 'Empresa obtenida' })
  @ApiResponse({ status: 404, description: 'Empresa no existe' })
  @Get(':id')
  findOne(@Param('id') id: string, @Res () response: Response) {
    const encontrado = this.ofertasLaboralesService.findOne(+id);
    if (encontrado) {
      response.status(200).send(encontrado);
    } else {
      response.status(404).send('Oferta Laboral no existe');
    }
  }

    // Modificar Oferta Laboral

  @ApiResponse({ status: 200, description: 'Estudiante actualizado' })
  @ApiResponse({ status: 404, description: 'Estudiante no existe' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOfertasLaboraleDto: UpdateOfertasLaboraleDto, @Res () response: Response) {
     const encontrado = this.ofertasLaboralesService.update(+id, updateOfertasLaboraleDto);
    if(encontrado){
        response.status(200).send(encontrado);
    } else {
      response.status(404).send('Oferta Laboral no existe');
    }
    return this.ofertasLaboralesService.update(+id, updateOfertasLaboraleDto);
  }

    // Eliminar Oferta Laboral
  @ApiResponse({ status: 200, description: 'Estudiante eliminado' })
  @ApiResponse({ status: 404, description: 'Estudiante no existe' })
  @Delete(':id')
  remove(@Param('id') id: string, @Res() response: Response) {
    const encontrado = this.ofertasLaboralesService.remove(+id);
    if (encontrado){
      response.status(200).send('Empresa eliminada');
    } else {
      response.status(404).send('Empresa no existe');
    }
  }
}
