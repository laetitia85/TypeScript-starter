import { entitiesObject } from '../../../../app/database/typeorm/entities'

import { CategoryRepo } from '../../categoryRepo'
import { CreateCategory} from './createCategory'
import { CreateCategoryController } from './createCategoryController'


const categoryRepo = new CategoryRepo(entitiesObject)
const createCategory = new CreateCategory(categoryRepo)
const createCategoryController = new CreateCategoryController(createCategory)

export { createCategory, createCategoryController}