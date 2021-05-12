import { Router, Request, Response} from 'express'
import { skillRouter } from '../../modules/skill/skillRouter'
import { categoryRouter } from '../../modules/category/categoryRouter'

const V1Router: Router = Router();

V1Router.get('/', (_: Request, response: Response) => {
    response.json({message: 'Hello world !'});
})

V1Router.use('/skills', skillRouter)
V1Router.use('/categories', categoryRouter)

// V1Router.post('/user', (_: Request, res: Response) => {
//     res.json({message: 'test !'});
//     // res.status(200).send('test')
// })

export { V1Router }