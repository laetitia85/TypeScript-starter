import { CreateProgress } from './createProgress'
import { Request, Response } from 'express'

//Controller
export class CreateProgressController {
    private useCase: CreateProgress;

    constructor(createProgress: CreateProgress) {
        this.useCase = createProgress;
    }

    public async execute(req: Request, res: Response) {

    const { date } = req.body

    if (!date) {
        return res.status(400).json({
            error: {
                message: 'Date is required'
            }
        });
    }

    const progresses = await this.useCase.execute({ date });
    console.log('Controller progresses result', progresses);

    res.status(200).json(progresses);

    }
}