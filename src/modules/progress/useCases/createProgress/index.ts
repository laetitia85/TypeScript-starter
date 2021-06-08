import { entitiesObject } from '../../../../app/database/typeorm/entities'

import { ProgressRepo } from '../../progressRepo'

import { SkillRepo } from '../../../skill/skillRepo'
import { StudentRepo } from '../../../student/studentRepo'
import { LevelRepo } from '../../../level/levelRepo'


import { CreateProgress} from './createProgress'
import { CreateProgressController } from './createProgressController'


const progressRepo = new ProgressRepo(entitiesObject)
const studentRepo = new StudentRepo(entitiesObject)
const skillRepo = new SkillRepo(entitiesObject)
const levelRepo = new LevelRepo(entitiesObject)

const createProgress = new CreateProgress(progressRepo, studentRepo, skillRepo, levelRepo)
const createProgressController = new CreateProgressController(createProgress)

export { createProgress, createProgressController}