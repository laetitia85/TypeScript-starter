interface IStudent {
    id:number
    first_name:string
    last_name:string
}


export type StudentProps = {
    id:number
    first_name:string
    last_name:string
}

export class Student implements IStudent{
    public id: number
    public first_name: string
    public last_name:string

    constructor (props: StudentProps) {
        this.id = props.id;
        this.first_name = props.first_name
        this.last_name = props.last_name
    }
}