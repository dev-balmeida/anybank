import { IUserRepository } from '../repositores/IUserRepository';
import { IUser } from './../entities/IUser';

export class CreateUser {
    constructor(private userRepository: IUserRepository){}

    async execute(user: Omit<IUser, 'id'>){
        this.userRepository.createUser(user)
    }
}