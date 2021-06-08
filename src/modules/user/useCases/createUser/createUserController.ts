import { CreateUser } from './createUser'
import { Request, Response } from 'express'

//Controller
export class CreateUserController {
    private useCase: CreateUser;

    constructor(createUser: CreateUser) {
        this.useCase = createUser;
    }

    public async execute(req: Request, res: Response) {

    const { firstname, lastname, username, email, password } = req.body

    
    if (!firstname) {
        return res.status(400).json({
            error: {
                message: 'Firstname is required'
            }
        });
    }
    
    if (!lastname) {
        return res.status(400).json({
            error: {
                message: 'Lastname is required'
            }
        });
    }
    
    if (!username) {
        return res.status(400).json({
            error: {
                message: 'Username is required'
            }
        });
    }

    if (!email) {
        return res.status(400).json({
            error: {
                message: 'Email is required'
            }
        });
    }

    if (!password) {
        return res.status(400).json({
            error: {
                message: 'Password is required'
            }
        });
    }


    const users = await this.useCase.execute({ firstname, lastname, username, email, password });
    console.log('Controller users result', users);

    res.status(200).json(users);

    }
}