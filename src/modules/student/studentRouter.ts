import { Router } from 'express'
import { createStudentController } from './useCases/createStudent'

const studentRouter: Router = Router();

console.log('Student router');

studentRouter.get('/', (req, res) => {
    res.json('Students');
})

studentRouter.post('/', (req, res) => createStudentController.execute(req, res))

export { studentRouter }