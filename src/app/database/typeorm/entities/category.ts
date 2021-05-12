import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from "typeorm";
import { Skill } from './skill'

@Entity()
export class Category extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    name: string;

    @Column("text")
    description: string;

    @OneToMany(() => Category, category => category.skills)
    skills: Skill[];

}