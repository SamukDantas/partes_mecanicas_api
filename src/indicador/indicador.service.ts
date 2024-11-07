import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Indicador } from './indicador.entity';

@Injectable()
export class IndicadorService {
  constructor(
    @InjectRepository(Indicador)
    private indicadorRepository: Repository<Indicador>,
  ) {}

  async findAll(): Promise<Indicador[]> {
    return this.indicadorRepository.find();
  }

  async create(indicador: Indicador): Promise<Indicador> {
    return this.indicadorRepository.save(indicador);
  }
}
