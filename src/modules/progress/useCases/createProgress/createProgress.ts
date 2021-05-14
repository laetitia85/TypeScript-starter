import { ProgressRepo } from "../../progressRepo"
import { progressProps } from '../../progressTypes'

export class CreateProgress {
    private progressRepo: ProgressRepo;

    constructor(progressRepo: ProgressRepo) {
        this.progressRepo = progressRepo
    }
        public async execute(props: progressProps) {
            return await this.progressRepo.create(props);
        }
    } 