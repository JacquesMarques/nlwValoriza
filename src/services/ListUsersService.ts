import {getCustomRepository} from "typeorm";
import { classToPlain } from "class-transformer";
import { UsersRepository } from "../repositories/UsersRepository";

export class ListUsersService {
    async execute() {
        const usersRepository = getCustomRepository(UsersRepository);

        return classToPlain(usersRepository.find());
    }
}
