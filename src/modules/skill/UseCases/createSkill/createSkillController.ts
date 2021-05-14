import { CreateSkill } from './createSkill'
import { Request, Response } from 'express'

//Controller
export class CreateSkillController {
    private useCase: CreateSkill;

    constructor(createSkill: CreateSkill) {
        this.useCase = createSkill;
    }

    public async execute(req: Request, res: Response) {

    const { name, description, categoryId } = req.body

    if (!name) {
        return res.status(400).json({
            error: {
                message: 'Name is required'
            }
        });
    }

    if (!description) {
        return res.status(400).json({
            error: {
                message: 'Description is required'
            }
        });
    }

    
    if (!categoryId) {
        return res.status(400).json({
            error: {
                message: 'SkillId is required'
            }
        });
    }


    const skills = await this.useCase.execute({ name, description, categoryId });
    console.log('Controller skills result', skills);

    res.status(200).json(skills);

    }
}