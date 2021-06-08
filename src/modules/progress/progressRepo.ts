import { progressProps } from './progressTypes'

export class ProgressRepo  {
    private entities : any

    constructor(entities: any) {
        this.entities = entities
    }

    public async create(progressProps: progressProps) {
        const ProgressEntity = this.entities.Progress

        return await ProgressEntity.create({student: progressProps.student, skill : progressProps.skill, level: progressProps.level}).save()
    }
} 