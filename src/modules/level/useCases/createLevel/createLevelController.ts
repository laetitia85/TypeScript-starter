import { CreateLevel } from './createLevel'
import { Request, Response } from 'express'

//Controller
export class CreateLevelController {
    private useCase: CreateLevel;

    constructor(createLevel: CreateLevel) {
        this.useCase = createLevel;
    }

    public async execute(req: Request, res: Response) {

    const { name, number} = req.body

    if (!name) {
        return res.status(400).json({
            error: {
                message: 'Name is required'
            }
        });
    }

    if (!number) {
        return res.status(400).json({
            error: {
                message: 'Number is required'
            }
        });
    }


    const levels = await this.useCase.execute({ name, number });
    console.log('Controller levels result', levels);

    res.status(200).json(levels);

    }
}