import { CreateUser } from './createUser'
import { Request, Response } from 'express'

//Controller
export class CreateUserController {
    private useCase: CreateUser;

    constructor(createUser: CreateUser) {
        this.useCase = createUser;
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


    const users = await this.useCase.execute({ first_name, last_name });
    console.log('Controller users result', users);

    res.status(200).json(users);

    }
}