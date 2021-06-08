import { levelProps } from './levelTypes'

export class LevelRepo  {
    private entities : any

    constructor(entities: any) {
        this.entities = entities
    }

    public async create(levelProps: levelProps) {
        const LevelEntity = this.entities.Level

        return await LevelEntity.create({ name: levelProps.name, number: levelProps.number}).save()
    }

    public async getLevelById(levelId: number) {
        const LevelEntity = this.entities.level

        return await LevelEntity.findOne(levelId)
    }
} 