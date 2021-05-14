import { skillProps } from './skillTypes'

export class SkillRepo  {
    private entities : any

    constructor(entities: any) {
        this.entities = entities
    }

    public async create(skillProps: skillProps) {
        const SkillEntity = this.entities.Skill
        // return await SkillEntity.find();

        return await SkillEntity.create({ name: skillProps.name, description: skillProps.description, categoryId: skillProps.categoryId }).save()
    }
} 