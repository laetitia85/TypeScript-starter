interface IProgress {
    id:number
    date: Date
    
}

export type ProgressProps = {
    id:number
    date:Date
    
}

export class Progress implements IProgress{
    public id: number
    public date: Date
   

    constructor (props: ProgressProps) {
        this.id = props.id;
        this.date = props.date
       
    }
}