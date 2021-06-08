import { studentProps } from './studentTypes'

export class StudentRepo  {
    private entities : any

    constructor(entities: any) {
        this.entities = entities
    }

    public async create(studentProps: studentProps) {
        const StudentEntity = this.entities.Student

        return await StudentEntity.create({ first_name: studentProps.first_name, 
            last_name: studentProps.last_name}).save()
    }

    public async getStudentById(studentId: number) {
        const StudentEntity = this.entities.Student

        return await StudentEntity.findOne(studentId)
    }
} 