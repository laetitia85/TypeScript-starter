interface IUser {
    id:number
    firstname: string;
    lastname: string;
    username: string;
    email:string
    password:string
}

export type UserProps = {
    id:number
    firstname: string;
    lastname: string;
    username: string;
    email:string
    password:string
}

export class User implements IUser{
    public id: number;
    public firstname: string;
    public lastname: string;
    public username: string;
    public email: string
    public password:string
   
    constructor (props: UserProps) {
        this.id = props.id;
        this.firstname = props.firstname;
        this.lastname = props.lastname;
        this.username = props.username;
        this.email = props.email;
        this.password = props.password;
    }
}