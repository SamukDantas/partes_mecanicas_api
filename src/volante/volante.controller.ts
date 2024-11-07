import { Controller, Get, Post, Body } from '@nestjs/common';
import { VolanteService } from './volante.service';
import { Volante } from './volante.entity';

@Controller('volantes')
export class VolanteController {
  constructor(private readonly volanteService: VolanteService) {}

  @Get()
  async findAll(): Promise<Volante[]> {
    return this.volanteService.findAll();
  }

  @Post()
  async create(@Body() volante: Volante): Promise<Volante> {
    return this.volanteService.create(volante);
  }
}
