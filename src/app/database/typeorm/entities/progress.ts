import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";
import { Student } from './student'
import { Level } from './level'
import { Skill } from './skill'

@Entity()
export class Progress extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @ManyToOne(() => Student, student =>student.progresses)
    student: Student;

    @ManyToOne(() => Level, level => level.progresses)
    level: Level;

    @ManyToOne(() => Skill, skill => skill.progresses)
    skill: Skill;

} 