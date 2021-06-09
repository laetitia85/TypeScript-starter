import { UserRepo } from "../../userRepo"
import { userProps } from '../../userTypes'
import argon2 from 'argon2'

export class CreateUser {
    private userRepo: UserRepo;

    constructor(userRepo: UserRepo) {
        this.userRepo = userRepo
    }
        public async execute(props: userProps) {

            try{
                const userAlreadyExists = await this.userRepo.exists(props.email)
                if(userAlreadyExists) {
                    return {
                        success: false,
                        message: 'user alredy exist'
                    }
                }

                const hashPassword = await argon2.hash(props.password);

                props.password = hashPassword;

                await this.userRepo.create(props);

                return {
                    success: true,
                    message: 'User is correctly created'
                }


            }
            catch(err) {
                return {
                    success: false,
                    message: err
                }
            }
        }
    } 