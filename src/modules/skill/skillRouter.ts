import { Router } from 'express'
import { createSkillController } from './useCases/createSkill/'

const skillRouter: Router = Router();

console.log('Skill router');

skillRouter.get('/', (req, res) => {
    res.json('Skills');
})

skillRouter.post('/', (req, res) => createSkillController.execute(req, res))

export { skillRouter } 