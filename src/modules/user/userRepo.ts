import { userProps } from './userTypes'

export class UserRepo  {
    private entities : any

    constructor(entities: any) {
        this.entities = entities
    }

    public async create(userProps: userProps) {
        const UserEntity = this.entities.User

        return await UserEntity.create({ firstname: userProps.firstname, lastname: userProps.lastname, 
            username: userProps.username, email: userProps.email, password: userProps.password}).save()
    }
} 