import { progressProps } from './progressTypes'

export class ProgressRepo  {
    private entities : any

    constructor(entities: any) {
        this.entities = entities
    }

    public async create(progressProps: progressProps) {
        const ProgressEntity = this.entities.Progress

        return await ProgressEntity.create({ date: progressProps.date }).save()
    }
} 