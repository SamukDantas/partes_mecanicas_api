import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Volante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
}
