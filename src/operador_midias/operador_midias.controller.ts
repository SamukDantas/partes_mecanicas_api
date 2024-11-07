import { Controller, Get, Post, Body } from '@nestjs/common';
import { OperadorMidiasService } from './operador_midias.service';
import { OperadorMidias } from './operador_midias.entity';

@Controller('operadores_midias')
export class OperadorMidiasController {
  constructor(private readonly operadorMidiasService: OperadorMidiasService) {}

  @Get()
  async findAll(): Promise<OperadorMidias[]> {
    return this.operadorMidiasService.findAll();
  }

  @Post()
  async create(
    @Body() operadorMidias: OperadorMidias,
  ): Promise<OperadorMidias> {
    return this.operadorMidiasService.create(operadorMidias);
  }
}
