import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class OperadorMidias {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
}
