import { userProps } from './userTypes'

export class UserRepo  {
    private entities : any

    constructor(entities: any) {
        this.entities = entities
    }

    public async create(userProps: userProps) {
        const UserEntity = this.entities.User

        return await UserEntity.create({ first_name: userProps.first_name, last_name: userProps.last_name}).save()
    }
} 