import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from "typeorm";
import { Progress } from './progress'

@Entity()
export class Level extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number: number;

    @Column()
    name: string;

    @OneToMany(() => Level, level => level.progresses)
    progresses: Progress[];

} 