import { Router, Request, Response} from 'express'

const V1Router: Router = Router();

V1Router.get('/', (_: Request, response: Response) => {
    response.json({message: 'Hello world !'});
})

export { V1Router }