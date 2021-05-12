// interface ICategoryRepo {
//     //TODO
// }

export class CategoryRepo {
    private entities : any

    constructor(entities: any) {
        this.entities = entities
    }

    public async getCategories() {
        const CategoryEntity = this.entities.Category
        // const categories = await CategoryEntity.find();
        return await CategoryEntity.find();
    }
}

