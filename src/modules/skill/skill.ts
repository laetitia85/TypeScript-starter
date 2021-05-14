interface ISkill {
    id:number
    name:string
    description: string
    categoryId: number
}

export type SkillProps = {
    id:number
    name:string
    description: string
    categoryId: number
}

export class Skill implements ISkill{
    public id: number
    public name: string
    public description: string
    public categoryId: number

    constructor (props: SkillProps) {
        this.id = props.id;
        this.name = props.name
        this.description = props.description
        this.categoryId = props.categoryId
    }
}