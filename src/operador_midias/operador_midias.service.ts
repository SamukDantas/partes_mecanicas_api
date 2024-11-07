import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OperadorMidias } from './operador_midias.entity';

@Injectable()
export class OperadorMidiasService {
  constructor(
    @InjectRepository(OperadorMidias)
    private operadorMidiasRepository: Repository<OperadorMidias>,
  ) {}

  async findAll(): Promise<OperadorMidias[]> {
    return this.operadorMidiasRepository.find();
  }

  async create(operadorMidias: OperadorMidias): Promise<OperadorMidias> {
    return this.operadorMidiasRepository.save(operadorMidias);
  }
}
