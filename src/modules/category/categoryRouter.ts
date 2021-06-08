import { Router } from 'express'
import { createCategoryController } from './useCases/createCategory/'
import { deleteCategoryController } from './useCases/deleteCategory/'
import { getCategoriesController } from './useCases/getCategories/'
// import { updateCategoryController } from './useCases/updateCategory/'

const categoryRouter: Router = Router();

categoryRouter.get('/', (req, res) => getCategoriesController.execute(req, res))
categoryRouter.post('/', (req, res) => createCategoryController.execute(req, res))
categoryRouter.delete('/', (req, res) => deleteCategoryController.execute(req, res))

// categoryRouter.put('/', (req, res) => updateCategoryController.execute(req, res))

export { categoryRouter }


