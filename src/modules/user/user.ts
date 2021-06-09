interface IUser {
    id:number
    email:string
    password:string
}

export type UserProps = {
    id:number
    email:string
    password:string
}

export class User implements IUser{
    public id: number;
    public email: string
    public password:string
   
    constructor (props: UserProps) {
        this.id = props.id;
        this.email = props.email;
        this.password = props.password;
    }
}