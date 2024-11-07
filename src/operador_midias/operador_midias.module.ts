import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperadorMidias } from './operador_midias.entity';
import { OperadorMidiasController } from './operador_midias.controller';
import { OperadorMidiasService } from './operador_midias.service';

@Module({
  imports: [TypeOrmModule.forFeature([OperadorMidias])],
  controllers: [OperadorMidiasController],
  providers: [OperadorMidiasService],
})
export class OperadorMidiasModule {}
