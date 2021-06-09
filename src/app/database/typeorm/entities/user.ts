import {Entity, PrimaryGeneratedColumn, Column, OneToOne, BaseEntity} from "typeorm";
import { Student } from './student'

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id: number;

    // @Column({unique: true, name: 'username'})
    // username!: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password!: string;

  @OneToOne(() => Student, student => student.user)
  student: Student

} 