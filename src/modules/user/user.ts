interface IUser {
    id:number
    first_name:string
    last_name:string
}


export type UserProps = {
    id:number
    first_name:string
    last_name:string
}

export class User implements IUser{
    public id: number
    public first_name: string
    public last_name:string

    constructor (props: UserProps) {
        this.id = props.id;
        this.first_name = props.first_name
        this.last_name = props.last_name
    }
}