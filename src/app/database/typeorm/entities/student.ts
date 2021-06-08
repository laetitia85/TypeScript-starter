import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity, OneToOne, JoinColumn} from "typeorm";
import { Progress } from './progress';
import { User } from './user'

@Entity()
export class Student extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @OneToMany(() => Progress, progress => progress.student)
    progresses: Progress[];

    @OneToOne(() => User, user => user.student)
    @JoinColumn() user: User

} 