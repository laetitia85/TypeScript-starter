import { Router } from 'express'
import { createProgressController } from './useCases/createProgress/'

const progressRouter: Router = Router();

// progressRouter.get('/', (req, res) => {
//     res.json('Progress');
// })

progressRouter.post('/', (req, res) => createProgressController.execute(req, res))

export { progressRouter }