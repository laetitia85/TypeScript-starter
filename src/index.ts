// interface ISkill {
//     name : string
//     description : string
//     value? : number
//     getSkill : () => string         //method getSkill est une fonction qui renvoie un string//
// }

// type skillProps = {
//     name : string
//     description : string
//     value? : number
// }

// class Skill implements ISkill{
//     public name : string;
//     public description : string;
//     public value? : number;

//     constructor(props :  skillProps ) {
//         this.name = props.name;
//         this.description = props.description;
//         this.value = props.value;

//         // if(props.value) this.value = props.value
//     }

//     public getSkill() : string {
//         return `Skill : ${this.name}`
//     }
// }

// const skillProps = {
//     name: "Collaborer à la gestion...",
//     description: "Collaborer à la description...",
// }

// const skill1 : Skill = new Skill(skillProps);

// console.log(skill1.getSkill())

interface IUser {
    id : number
    name : string
    first_name : string
    email : string
    password : number
    getUser : () => string         
}

type userProps = {
    id : number
    name : string
    first_name : string
    email : string
    password : number
}

class User implements IUser{
    public id : number
    public name : string
    public first_name : string
    public email : string
    public password : number

    constructor(props :  userProps ) {
        this.id = props.id
        this.name = props.name;
        this.first_name = props.first_name;
        this.email = props.email;
        this.password = props.password;

    }

    public getUser() : string {
        return `User : ${this.name},`
    }
}

const userProps = {
    id : 1,
    name: "de Bardin",
    first_name: "Laetitia",
    email: "laetitia@gmail.com",
    password: 12345678
}

const user1 : User = new User(userProps);

console.log(user1.getUser())