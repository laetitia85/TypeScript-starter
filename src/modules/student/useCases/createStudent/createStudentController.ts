import { CreateStudent } from './createStudent'
import { Request, Response } from 'express'

//Controller
export class CreateStudentController {
    private useCase: CreateStudent;

    constructor(createStudent: CreateStudent) {
        this.useCase = createStudent;
    }

    public async execute(req: Request, res: Response) {

    const { first_name, last_name} = req.body

    if (!first_name) {
        return res.status(400).json({
            error: {
                message: 'First_name is required'
            }
        });
    }

    if (!last_name) {
        return res.status(400).json({
            error: {
                message: 'Last_name is required'
            }
        });
    }


    const students = await this.useCase.execute({ first_name, last_name });
    console.log('Controller users result', students);

    res.status(200).json(students);

    }
}