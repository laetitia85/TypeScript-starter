import { Router, Request, Response, NextFunction} from 'express'

const V1Router: Router = Router();

V1Router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json('Hello World');
})

export { V1Router }