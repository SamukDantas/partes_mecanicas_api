import { Controller, Get, Post, Body } from '@nestjs/common';
import { IndicadorService } from './indicador.service';
import { Indicador } from './indicador.entity';

@Controller('indicadores')
export class IndicadorController {
  constructor(private readonly indicadorService: IndicadorService) {}

  @Get()
  async findAll(): Promise<Indicador[]> {
    return this.indicadorService.findAll();
  }

  @Post()
  async create(@Body() indicador: Indicador): Promise<Indicador> {
    return this.indicadorService.create(indicador);
  }
}
