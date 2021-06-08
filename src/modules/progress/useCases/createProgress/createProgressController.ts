import { CreateProgress } from './createProgress'
import { Request, Response } from 'express'

//Controller
export class CreateProgressController {
    private useCase: CreateProgress;

    constructor(createProgress: CreateProgress) {
        this.useCase = createProgress;
    }

    public async execute(req: Request, res: Response) {

    const { student, skill, level } = req.body

    if (!student) {
        return res.status(400).json({
            error: {
                message: 'Student is required'
            }
        });
    }

    if (!level) {
        return res.status(400).json({
            error: {
                message: 'Level is required'
            }
        });
    }

    if (!skill) {
        return res.status(400).json({
            error: {
                message: 'Skill is required'
            }
        });
    }

    const progress = await this.useCase.execute({ student, skill, level });
    console.log('Controller progress result', progress);

    res.status(200).json(progress);

    }
}