import { Router, Request, Response} from 'express'
import { skillRouter } from '../../modules/skill/skillRouter'
import { categoryRouter } from '../../modules/category/categoryRouter'
import { userRouter } from '../../modules/user/userRouter'
import { levelRouter } from '../../modules/level/levelRouter'

const V1Router: Router = Router();

V1Router.get('/', (_: Request, response: Response) => {
    response.json({message: 'Hello world !'});
})

V1Router.use('/users', userRouter)
V1Router.use('/skills', skillRouter)
V1Router.use('/categories', categoryRouter)
V1Router.use('/levels', levelRouter)


export { V1Router }