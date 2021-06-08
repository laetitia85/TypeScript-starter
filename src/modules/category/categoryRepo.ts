import { categoryProps } from './categoryTypes'

export class CategoryRepo  {
    private entities : any

    constructor(entities: any) {
        this.entities = entities
    }

    public async create(categoryProps: categoryProps) {
        const CategoryEntity = this.entities.Category
        return await CategoryEntity.create({ name: categoryProps.name, description: categoryProps.description }).save()
    }

    public async getCategories(categoryProps: categoryProps) {
        const CategoryEntity = this.entities.Category
        return await CategoryEntity.getCategories({ name: categoryProps.name, description: categoryProps.description })
    }

    public async remove(categoryProps: categoryProps) {
        const CategoryEntity = this.entities.Category.findOne({
            where: {
                id: categoryProps.id
            }
        });
        return await CategoryEntity.remove({ id: categoryProps.id, name: categoryProps.name, description: categoryProps.description })
    }


    // public async update(categoryProps: categoryProps) {
    // const CategoryEntity = this.entities.Category
  
    // return await CategoryEntity.update({ name: categoryProps.name, description: categoryProps.description }).save()
    // }
} 


