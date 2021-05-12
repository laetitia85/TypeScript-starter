import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";
import { User } from './user'
import { Level } from './level'
import { Skill } from './skill'

@Entity()
export class Progress extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: number;

    @ManyToOne(() => Progress,progress =>progress.users)
    users: User;

    @ManyToOne(() => Progress, progress => progress.levels)
    levels: Level;

    @ManyToOne(() => Progress, progress => progress.skills)
    skills: Skill;

} 