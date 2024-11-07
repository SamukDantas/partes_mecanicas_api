import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Volante } from './volante.entity';
import { VolanteController } from './volante.controller';
import { VolanteService } from './volante.service';

@Module({
  imports: [TypeOrmModule.forFeature([Volante])],
  controllers: [VolanteController],
  providers: [VolanteService],
})
export class VolanteModule {}
