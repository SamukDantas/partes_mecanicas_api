import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndicadorModule } from './indicador/indicador.module';
import { OperadorMidiasModule } from './operador_midias/operador_midias.module';
import { VolanteModule } from './volante/volante.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'postgres',
      database: process.env.POSTGRES_DB || 'test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    IndicadorModule,
    OperadorMidiasModule,
    VolanteModule,
  ],
})
export class AppModule {}
