import { createServer } from './app/http/app'
import { createConnection } from 'typeorm'

import { typeORMConfig } from './app/database/typeorm'

console.log(typeORMConfig);

createConnection(typeORMConfig).then(_ => {
   createServer();
})

// import { User } from './app/database/typeorm/entities/user'
// import { Category } from './app/database/typeorm/entities/category'
// import { Skill } from './app/database/typeorm/entities/skill'
// import { Level} from './app/database/typeorm/entities/level'
// import { Progress} from './app/database/typeorm/entities/progress'

// createConnection({
//     type: 'mysql',
//     host: 'localhost',
//     port: 3306,
//     username: 'root',
//     password: "",
//     database: 'skilltree_dev',
//     synchronize: true,
//     logging: true,
//     entities: [User, Category, Skill, Level, Progress],
// }).then(conn => {
//     // console.log("connection etablished")
//     let user = new User();
//     user.firstName = "Laetitia"
//     user.lastName = "de Bardin";

//     return conn.manager
//     .save(user)
//     .then(user => {
//         console.log("User has been saved. User id is", user.id);
//     });

// }).catch(error => console.log(error));

createServer();


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

// interface IUser {
//     id : number
//     name : string
//     first_name : string
//     email : string
//     password : number
//     getUser : () => string         
// }

// type userProps = {
//     id : number
//     name : string
//     first_name : string
//     email : string
//     password : number
// }

// class User implements IUser{
//     public id : number
//     public name : string
//     public first_name : string
//     public email : string
//     public password : number

//     constructor(props :  userProps ) {
//         this.id = props.id
//         this.name = props.name;
//         this.first_name = props.first_name;
//         this.email = props.email;
//         this.password = props.password;

//     }

//     public getUser() : string {
//         return `User : ${this.name},`
//     }
// }

// const userProps = {
//     id : 1,
//     name: "de Bardin",
//     first_name: "Laetitia",
//     email: "laetitia@gmail.com",
//     password: 12345678
// }

// const user1 : User = new User(userProps);

// console.log(user1.getUser())