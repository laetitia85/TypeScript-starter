import { User } from './user'
import { Skill } from './skill'
import { Category } from './category'
import { Level } from './level'
import { Progress } from './progress'
import { Student } from './student'


const entities = [User, Skill, Category, Level, Progress, Student]
const entitiesObject = {User, Skill, Category, Level, Progress, Student}

export { entities, entitiesObject }