import { skillProps } from './skillTypes'
// import {getConnection} from "typeorm";
// import { Skill } from './skill'


export class SkillRepo  {

    private entities : any

    constructor(entities: any) {
        this.entities = entities
    }

    public async create(skillProps: skillProps) {
        const SkillEntity = this.entities.Skill
        
        return await SkillEntity.create({ name: skillProps.name, description: skillProps.description}).save()
    }

    public async getSkillById(skillId: number) {
        const SkillEntity = this.entities.skill

        return await SkillEntity.findOne(skillId)
    }
}


// await  getConnection()
//         .createQueryBuilder()
//         .relation(Skill, "categories")
//         .of(Skill)
//         .add(skillProps.categoryId);

// const SkillEntity = this.entities.Skill.create ({
//     name: "name",
//     description: "description",
//     category: "categoryId"
// })