import {Entity, PrimaryGeneratedColumn, Column, OneToOne, BaseEntity} from "typeorm";
import { Student } from './student'

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

  @OneToOne(() => Student, student => student.user)
  student: Student

} 