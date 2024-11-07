import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Volante } from './volante.entity';

@Injectable()
export class VolanteService {
  constructor(
    @InjectRepository(Volante)
    private volanteRepository: Repository<Volante>,
  ) {}

  async findAll(): Promise<Volante[]> {
    return this.volanteRepository.find();
  }

  async create(volante: Volante): Promise<Volante> {
    return this.volanteRepository.save(volante);
  }
}
