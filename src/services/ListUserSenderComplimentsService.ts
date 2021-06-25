import {getCustomRepository} from "typeorm";
import {ComplimentsRepository} from "../repositories/ComplimentsRepository";

export class ListUserSernderComplimentsService {
    async execute(user_id: string) {
        const complimentRepositoryRepository = getCustomRepository(ComplimentsRepository);

        return await complimentRepositoryRepository.find({
            where: {
                user_sender: user_id
            }
        });
    }
}
