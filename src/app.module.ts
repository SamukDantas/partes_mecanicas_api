import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndicadorModule } from './indicador/indicador.module';
import { OperadorMidiasModule } from './operador_midias/operador_midias.module';
import { VolanteModule } from './volante/volante.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      autoLoadEntities: true,
      synchronize: true, // Apenas para desenvolvimento; cuidado ao usar em produção
})

    }),
    IndicadorModule,
    OperadorMidiasModule,
    VolanteModule,
  ],
})
export class AppModule {}
