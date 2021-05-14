//UseCase -> Service -> de la logique
import { CategoryRepo } from "../../categoryRepo"
import { categoryProps } from '../../categoryTypes'

export class CreateCategory {
    private categoryRepo: CategoryRepo;

    constructor(categoryRepo: CategoryRepo) {
        this.categoryRepo = categoryRepo
    }

    // public async getCategories() {
    //     return await this.categoryRepo.getCategories();
        public async execute(props: categoryProps) {
            return await this.categoryRepo.create(props);
        }
    } 
    
