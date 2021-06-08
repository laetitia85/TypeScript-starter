interface IProgress {
    id:number
    student: number
    skill : number
    level : number
   
}

export type ProgressProps = {
    id:number
    student: number
    skill : number
    level : number
   
}

export class Progress implements IProgress{
    public id: number
    public student: number
    public skill : number
    public level : number
   
    constructor (props: ProgressProps) {
        this.id = props.id;
        this.student = props.student;
        this.skill = props.skill;
        this.level = props.level;
       
    }
}