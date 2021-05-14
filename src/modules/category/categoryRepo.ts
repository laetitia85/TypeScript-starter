import { categoryProps } from './categoryTypes'

export class CategoryRepo  {
    private entities : any

    constructor(entities: any) {
        this.entities = entities
    }

    // public async getCategories() {
    //     const CategoryEntity = this.entities.Category
    //     // const categories = await CategoryEntity.find();
    //     return await CategoryEntity.find();
    // }

    public async create(categoryProps: categoryProps) {
        const CategoryEntity = this.entities.Category
        // return await CategoryEntity.find();

        return await CategoryEntity.create({ name: categoryProps.name, description: categoryProps.description }).save()
    }
} 


