import { Router } from 'express'
import { createLevelController } from './useCases/createLevel/'

const levelRouter: Router = Router();

console.log('Level router');

levelRouter.get('/', (req, res) => {
    res.json('Levels');
})

levelRouter.post('/', (req, res) => createLevelController.execute(req, res))

export { levelRouter }