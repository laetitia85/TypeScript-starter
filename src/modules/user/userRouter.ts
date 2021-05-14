import { Router } from 'express'
import { createUserController } from './useCases/createUser/'

const userRouter: Router = Router();

console.log('User router');

userRouter.get('/', (req, res) => {
    res.json('Users');
})

userRouter.post('/', (req, res) => createUserController.execute(req, res))

export { userRouter }