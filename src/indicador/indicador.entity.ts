import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Indicador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
}
