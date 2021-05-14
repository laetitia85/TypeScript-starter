import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from "typeorm";
import { Progress } from './progress'

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    // @Column({nullable: true})
    // isActive: boolean;

    @OneToMany(() => User, user => user.progresses)
    progresses: Progress[];

} 